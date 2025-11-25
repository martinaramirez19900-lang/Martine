#!/usr/bin/env python3
import re

# Read the file
with open('src/i18n/translations.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define additions for each language
additions = {
    'cz': {
        'searchPlaceholder': 'Hledat nástroje...',
        'allMarkets': 'Všechny trhy',
        'chartVisualization': 'Vizualizace grafu',
        'buy': 'Koupit',
        'sell': 'Prodat',
        'noResults': 'Nebyly nalezeny žádné nástroje odpovídající vašim kritériím'
    },
    'tr': {
        'searchPlaceholder': 'Enstrüman ara...',
        'allMarkets': 'Tüm Piyasalar',
        'chartVisualization': 'Grafik görselleştirme',
        'buy': 'Al',
        'sell': 'Sat',
        'noResults': 'Kriterlerinize uyan enstrüman bulunamadı'
    },
    'sk': {
        'searchPlaceholder': 'Hľadať nástroje...',
        'allMarkets': 'Všetky trhy',
        'chartVisualization': 'Vizualizácia grafu',
        'buy': 'Kúpiť',
        'sell': 'Predať',
        'noResults': 'Neboli nájdené žiadne nástroje zodpovedajúce vašim kritériám'
    },
    'es': {
        'searchPlaceholder': 'Buscar instrumentos...',
        'allMarkets': 'Todos los mercados',
        'chartVisualization': 'Visualización de gráficos',
        'buy': 'Comprar',
        'sell': 'Vender',
        'noResults': 'No se encontraron instrumentos que coincidan con sus criterios'
    }
}

platforms_additions = {
    'cz': {
        'keyFeatures': 'Klíčové funkce:',
        'desktop': 'Desktop',
        'mobile': 'Mobilní',
        'downloadWindows': 'Stáhnout pro Windows',
        'downloadMac': 'Stáhnout pro Mac',
        'downloadIOS': 'Stáhnout pro iOS',
        'downloadAndroid': 'Stáhnout pro Android',
        'learnMoreAbout': 'Další informace o',
        'launchWeb': 'Spustit webovou platformu'
    },
    'tr': {
        'keyFeatures': 'Temel Özellikler:',
        'desktop': 'Masaüstü',
        'mobile': 'Mobil',
        'downloadWindows': 'Windows için indir',
        'downloadMac': 'Mac için indir',
        'downloadIOS': 'iOS için indir',
        'downloadAndroid': 'Android için indir',
        'learnMoreAbout': 'Hakkında daha fazla bilgi',
        'launchWeb': 'Web platformunu başlat'
    },
    'sk': {
        'keyFeatures': 'Kľúčové funkcie:',
        'desktop': 'Desktop',
        'mobile': 'Mobilné',
        'downloadWindows': 'Stiahnuť pre Windows',
        'downloadMac': 'Stiahnuť pre Mac',
        'downloadIOS': 'Stiahnuť pre iOS',
        'downloadAndroid': 'Stiahnuť pre Android',
        'learnMoreAbout': 'Viac informácií o',
        'launchWeb': 'Spustiť webovú platformu'
    },
    'es': {
        'keyFeatures': 'Características clave:',
        'desktop': 'Escritorio',
        'mobile': 'Móvil',
        'downloadWindows': 'Descargar para Windows',
        'downloadMac': 'Descargar para Mac',
        'downloadIOS': 'Descargar para iOS',
        'downloadAndroid': 'Descargar para Android',
        'learnMoreAbout': 'Más información sobre',
        'launchWeb': 'Lanzar plataforma web'
    },
    'en': {
        'keyFeatures': 'Key Features:',
        'desktop': 'Desktop',
        'mobile': 'Mobile',
        'downloadWindows': 'Download for Windows',
        'downloadMac': 'Download for Mac',
        'downloadIOS': 'Download for iOS',
        'downloadAndroid': 'Download for Android',
        'learnMoreAbout': 'Learn More about',
        'launchWeb': 'Launch Web Platform'
    },
    'pl': {
        'keyFeatures': 'Kluczowe funkcje:',
        'desktop': 'Komputer',
        'mobile': 'Mobilna',
        'downloadWindows': 'Pobierz dla Windows',
        'downloadMac': 'Pobierz dla Mac',
        'downloadIOS': 'Pobierz dla iOS',
        'downloadAndroid': 'Pobierz dla Android',
        'learnMoreAbout': 'Dowiedz się więcej o',
        'launchWeb': 'Uruchom platformę webową'
    }
}

# Function to add keys after energy line
def add_markets_keys(content, lang_code, additions_dict):
    # Find the pattern: energy: 'Something'\n    },
    pattern = rf"({lang_code}:.*?markets:.*?energy: '[^']+'\n)(    \}})"
    
    keys_str = ""
    for key, value in additions_dict.items():
        keys_str += f",\n      {key}: '{value}'"
    
    replacement = rf"\1{keys_str}\n\2"
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

# Function to add platforms keys
def add_platforms_keys(content, lang_code, additions_dict):
    # Find the pattern: subtitle: 'Something'\n    },
    pattern = rf"({lang_code}:.*?platforms:.*?subtitle: '[^']+'\n)(    \}})"
    
    keys_str = ""
    for key, value in additions_dict.items():
        keys_str += f",\n      {key}: '{value}'"
    
    replacement = rf"\1{keys_str}\n\2"
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

# Add markets keys for remaining languages
for lang in ['cz', 'tr', 'sk', 'es']:
    print(f"Adding markets keys for {lang}...")
    content = add_markets_keys(content, lang, additions[lang])

# Add platforms keys for all languages
for lang in ['en', 'pl', 'cz', 'tr', 'sk', 'es']:
    print(f"Adding platforms keys for {lang}...")
    content = add_platforms_keys(content, lang, platforms_additions[lang])

# Write back
with open('src/i18n/translations.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ All additions completed successfully!")
