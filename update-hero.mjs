import fs from 'fs';
import path from 'path';

const files = {
  'Hero.tsx': (content) => {
    // If we missed anything, let's fix it by exact replace
    content = content.replace(
      /The tri-layer stablecoin protocol\. RWA yields &times; CeFi strategies &times; DeFi composability — nested like a Matryoshka\./g,
      `{t('hero.subtitle')}`
    );
    content = content.replace(/>Launch App</g, `>{t('hero.launchApp')}<`);
    content = content.replace(/>Read Docs</g, `>{t('hero.readDocs')}<`);
    content = content.replace(/>Total Value Locked</g, `>{t('hero.stat.tvl')}<`);
    content = content.replace(/>mUSD Supply</g, `>{t('hero.stat.supply')}<`);
    content = content.replace(/>smUSD APY</g, `>{t('hero.stat.apy')}<`);
    content = content.replace(/>Protocol Revenue</g, `>{t('hero.stat.revenue')}<`);
    return content;
  }
};

const dir = 'E:/Project/Usdm/src/components/landing';
for (const [filename, fileFunc] of Object.entries(files)) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  content = fileFunc(content);
  fs.writeFileSync(filePath, content);
  console.log("Updated", filename);
}
