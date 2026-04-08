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

    # Revert previous partial attempt by replacing the motion stuff if it existed
    content = content.replace(import_str, "")
    content = content.replace('<motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">', '<div className="space-y-6">')
    content = re.sub(r'</motion\.div>\n*$', '</div>\n', content)

    # Insert import after first import
    content = re.sub(r"(import React.*?\n)", r"\1" + import_str, content, count=1)
    
    # Apply root container motion
    content = re.sub(
        r'(<div className="space-y-[^"]*")',
        r'<motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6"',
        content,
        count=1
    )
    # The end tag for the root container
    content = re.sub(r'</div>(\s*)$', r'</motion.div>\1', content)
    
    # Animate StatCard grids
    content = re.sub(
        r'(<div className="grid[^"]*gap-\d+")',
        r'<motion.div variants={itemVariants} \1',
        content
    )
    # the closing tag for these grids requires a bit of matching but it's simpler to just leave as div if we change `<div` to `<motion.div` we have to match `</div>`.
    # Let's do this: any `<div className="glass` becomes `<motion.div variants={itemVariants} className="glass glass-strong hover:scale-[1.01] transition-all`
    # any `<div className="grid` becomes `<motion.div variants={itemVariants} className="grid`
    # and we replace `</div>` with `</motion.div>` for everything inside `space-y-6` EXCEPT we can't blindly replace `</div>`.
    
    # What if we just do:
    # 1. wrap the entire return statement in `motion.div`
    # 2. make `StatCard` a `motion.div` internally?
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Done")
