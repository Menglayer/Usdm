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

import_str = """import { PageWrapper } from '@/components/ui/PageWrapper';
"""

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "PageWrapper" in content:
        continue

    # Insert imports
    content = re.sub(r"(import React.*?\n)", r"\1" + import_str, content, count=1)
    
    # PageWrapper
    content = re.sub(r'<div className="([^"]*space-y-\d+[^"]*)">', r'<PageWrapper className="\1">', content, count=1)
    # The last </div> becomes </PageWrapper>
    last_div = content.rfind("</div>")
    if last_div != -1:
        content = content[:last_div] + "</PageWrapper>" + content[last_div+6:]
    
    # CSS changes
    # `className="glass` -> `className="glass-strong hover:scale-[1.01] transition-transform duration-300 `
    content = re.sub(r'className="glass(\s)', r'className="glass-strong hover:scale-[1.01] transition-transform duration-300\1', content)
    
    # buttons `bg-primary` -> `bg-primary glow-primary hover:scale-105 active:scale-95 transition-all`
    content = re.sub(r'className="([^"]*bg-primary[^"]*)"', r'className="\1 glow-primary hover:scale-105 active:scale-95 transition-all"', content)
    
    # buttons `bg-accent` -> `bg-accent glow-accent hover:scale-105 active:scale-95 transition-all`
    content = re.sub(r'className="([^"]*bg-accent[^"]*)"', r'className="\1 glow-accent hover:scale-105 active:scale-95 transition-all"', content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Done phase 2")
