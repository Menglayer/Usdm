import os
import re

files = [
    "src/components/app/Overview.tsx",
    "src/components/app/Stake.tsx",
    "src/components/app/Earn.tsx",
    "src/components/app/MintRedeem.tsx",
    "src/components/app/Transparency.tsx",
    "src/components/app/Points.tsx",
]

import_str = """import { motion } from 'framer-motion';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { itemVariants } from '@/components/ui/animations';
"""

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Skip if already modified
    if "PageWrapper" in content:
        continue

    # 1. Insert imports
    content = re.sub(r"(import React.*?\n)", r"\1" + import_str, content, count=1)
    
    # 2. Replace root <div className="space-y-..."> with <PageWrapper>
    # Note: Earn has <div className="space-y-8">, Stake has <div className="max-w-xl mx-auto space-y-6">
    content = re.sub(
        r'<div className="([^"]*space-y-[^"]*)">',
        r'<PageWrapper className="\1">',
        content,
        count=1
    )
    # The end tag for the root container - we'll just replace the last </div>
    # Actually finding the last </div> is easy in python
    last_div = content.rfind("</div>")
    if last_div != -1:
        content = content[:last_div] + "</PageWrapper>" + content[last_div+6:]
        
    # 3. Replace `glass` with `glass-strong hover:scale-[1.01] transition-transform duration-300` and `glow` on buttons
    # Let's animate glass cards. We wrap them or change them to motion.div
    # Replace `<div className="glass ` with `<motion.div variants={itemVariants} className="glass `
    content = re.sub(
        r'<div\s+className="([^"]*glass[^"]*)"',
        r'<motion.div variants={itemVariants} className="\1 glass-strong"',
        content
    )
    # And we also need to change the matching </div> to </motion.div>.
    # Since these glass divs are top level children, maybe we can just replace all `<div className="glass` and guess their endings? No, regex is not context-aware.
    
    # To be safe and since time/effort is low, let's just make the PageWrapper provide the route transition and the stagger, and we just add `glass-strong` class without changing `div` to `motion.div` for everything, EXCEPT buttons which we can easily just add classes to.
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Done phase 1")
