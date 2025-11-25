#!/usr/bin/env python3
import re
import json

# Read the original translations file
with open('src/i18n/translations.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Read additional translations
with open('src/i18n/additionalTranslations.js', 'r', encoding='utf-8') as f:
    additional_content = f.read()

# Additional keys to add to markets section
markets_additions = {
    'en': {
        'searchPlaceholder': 'Search instruments...',
        'allMarkets': 'All Markets',
        'chartVisualization': 'Chart visualization',
        'buy': 'Buy',
        'sell': 'Sell',
        'noResults': 'No instruments found matching your criteria'
    },
    'pl': {
        'searchPlaceholder': 'Szukaj instrumentów...',
        'allMarkets': 'Wszystkie rynki',
        'chartVisualization': 'Wizualizacja wykresu',
        'buy': 'Kup',
        'sell': 'Sprzedaj',
        'noResults': 'Nie znaleziono instrumentów odpowiadających kryteriom'
    },
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
    },
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
    }
}

# Function to add keys to a section
def add_keys_to_section(content, lang, section, additions):
    # Find the section for this language
    pattern = rf"({lang}:.*?{section}:\s*\{{[^}}]*)(}})"
    
    # Build the additions string
    additions_str = ""
    for key, value in additions.get(lang, {}).items():
        additions_str += f",\n      {key}: '{value}'"
    
    # Replace
    result = re.sub(pattern, rf"\1{additions_str}\2", content, flags=re.DOTALL)
    return result

print("Adding translations to markets section...")
for lang in ['en', 'pl', 'cz', 'tr', 'sk', 'es']:
    content = add_keys_to_section(content, lang, 'markets', markets_additions)

print("Adding translations to platforms section...")
for lang in ['en', 'pl', 'cz', 'tr', 'sk', 'es']:
    content = add_keys_to_section(content, lang, 'platforms', platforms_additions)

print("✅ Translations updated successfully!")
print("Backup: Creating backup of original file...")

# Save backup
with open('src/i18n/translations.js.backup', 'w', encoding='utf-8') as f:
    with open('src/i18n/translations.js', 'r', encoding='utf-8') as orig:
        f.write(orig.read())

# Note: Manual addition of Afrikaans is needed at the end of the file
print("Note: Afrikaans language needs to be added manually from additionalTranslations.js")
