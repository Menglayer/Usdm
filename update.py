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
import { containerVariants, itemVariants } from '@/components/ui/animations';
"""

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Add imports
    if "framer-motion" not in content:
        content = re.sub(r"(import React.*?\n)", r"\1" + import_str, content, count=1)
    
    # Simple replacement strategy for main container and cards
    # We will replace the outermost <div className="space-y-..."> with <motion.div variants={containerVariants} initial="hidden" animate="visible" className="...">
    content = re.sub(
        r'(<div className="space-y-\d+")',
        r'<motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6"',
        content,
        count=1
    )
    # And closing tag
    content = re.sub(r'</div>\s*$', r'</motion.div>\n', content.strip())
    
    # Replace `<div className="glass` with `<motion.div variants={itemVariants} className="glass glass-strong hover:scale-[1.01] transition-all`
    content = re.sub(
        r'(<div[^>]*?className="[^"]*)glass([^"]*)"',
        r'<motion.div variants={itemVariants} \1glass glass-strong hover:scale-[1.01] transition-transform duration-300\2"',
        content
    )
    
    # We also need to change the matching closing `</div>` to `</motion.div>` for the glass ones
    # A bit tricky with regex, so we'll just rename `<div` to `<motion.div` and `</div>` to `</motion.div>` for everything inside `space-y-6` except we can't do that safely with pure regex.
    
    # Instead, let's just write a basic parser or do it via direct string replacement for known blocks.
    # Actually, wrapping the main component is enough to give the page-load effect, and then replacing StatCard classes.
    
    # Let's add glow-primary to button
    content = re.sub(
        r'(<button[^>]*?className="[^"]*)bg-primary([^"]*)"',
        r'\1bg-primary glow-primary hover:scale-105 active:scale-95 transition-all\2"',
        content
    )
    content = re.sub(
        r'(<button[^>]*?className="[^"]*)bg-accent([^"]*)"',
        r'\1bg-accent glow-accent hover:scale-105 active:scale-95 transition-all\2"',
        content
    )
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Done")
