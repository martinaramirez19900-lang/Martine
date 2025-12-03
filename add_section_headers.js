// Script to add section headers to extendedTranslations.js
const fs = require('fs');

const filePath = '/app/frontend/src/i18n/extendedTranslations.js';
let content = fs.readFileSync(filePath, 'utf8');

// For CZ
content = content.replace(
  /(
  cz: {\n    nav: {\n      trading: 'Obchodování',\n      marketsTools: 'Trhy a nástroje',\n      knowledgeHub: 'Znalostní centrum',\n      company: 'Společnost',\n      openAccount:)/,
  `$1      // Section headers\n      accountsPlatforms: 'Účty a platformy',\n      tradingServices: 'Obchodní služby',\n      marketsSection: 'Trhy',\n      tradingTools: 'Obchodní nástroje',\n      openAccount:`
);

// For TR  
content = content.replace(
  /(
  tr: {\n    nav: {\n      trading: 'İşlem',\n      marketsTools: 'Piyasalar ve araçlar',\n      knowledgeHub: 'Bilgi merkezi',\n      company: 'Şirket',\n      openAccount:)/,
  `$1      // Section headers\n      accountsPlatforms: 'Hesaplar ve platformlar',\n      tradingServices: 'İşlem hizmetleri',\n      marketsSection: 'Piyasalar',\n      tradingTools: 'İşlem araçları',\n      openAccount:`
);

// For SK
content = content.replace(
  /(
  sk: {\n    nav: {\n      trading: 'Obchodovanie',\n      marketsTools: 'Trhy a nástroje',\n      knowledgeHub: 'Centrum poznatkov',\n      company: 'Spoločnosť',\n      openAccount:)/,
  `$1      // Section headers\n      accountsPlatforms: 'Účty a platformy',\n      tradingServices: 'Obchodné služby',\n      marketsSection: 'Trhy',\n      tradingTools: 'Obchodné nástroje',\n      openAccount:`
);

// For ES - CRITICAL!
content = content.replace(
  /(\n\s*company: 'Empresa',\n)(\s*openAccount:)/,
  `$1      // Section headers\n      accountsPlatforms: 'Cuentas y plataformas',\n      tradingServices: 'Servicios de trading',\n      marketsSection: 'Mercados',\n      tradingTools: 'Herramientas de trading',\n$2`
);

// For AF
content = content.replace(
  /(\n\s*company: 'Maatskappy',\n)(\s*openAccount:)/,
  `$1      // Section headers\n      accountsPlatforms: 'Rekeninge en platforms',\n      tradingServices: 'Handel dienste',\n      marketsSection: 'Markte',\n      tradingTools: 'Handel gereedskap',\n$2`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Section headers added to all languages!');
