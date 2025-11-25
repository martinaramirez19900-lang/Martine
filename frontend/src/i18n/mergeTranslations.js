// Script to merge additional translations into main translations file
const fs = require('fs');
const path = require('path');

// Deep merge function
function deepMerge(target, source) {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key];
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

// Load files
const translationsPath = path.join(__dirname, 'translations.js');
const additionalPath = path.join(__dirname, 'additionalTranslations.js');

// Read current translations
const translationsContent = fs.readFileSync(translationsPath, 'utf8');
const additionalContent = fs.readFileSync(additionalPath, 'utf8');

// Extract translations objects
const translationsMatch = translationsContent.match(/export const translations = ({[\s\S]+});$/m);
const additionalMatch = additionalContent.match(/export const additionalMarketKeys = ({[\s\S]+});$/m);

if (translationsMatch && additionalMatch) {
  // Parse as objects (eval in controlled environment)
  const translations = eval('(' + translationsMatch[1] + ')');
  const additional = eval('(' + additionalMatch[1] + ')');
  
  // Merge
  const merged = {};
  Object.keys(translations).forEach(lang => {
    merged[lang] = deepMerge(translations[lang], additional[lang] || {});
  });
  
  // Add new languages
  Object.keys(additional).forEach(lang => {
    if (!merged[lang]) {
      merged[lang] = additional[lang];
    }
  });
  
  // Write back
  const newContent = `export const translations = ${JSON.stringify(merged, null, 2)};\n`;
  fs.writeFileSync(translationsPath, newContent, 'utf8');
  
  console.log('✅ Translations merged successfully!');
  console.log('Languages:', Object.keys(merged).join(', '));
} else {
  console.error('❌ Failed to parse translations');
}
