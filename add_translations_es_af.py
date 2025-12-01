#!/usr/bin/env python3
"""
Script to add Spanish (ES) and Afrikaans (AF) translations to the main translations.js file
"""

import json
import re

# Translation dictionaries for common trading terms
TRADING_TERMS_ES = {
    # Navigation
    'Home': 'Inicio',
    'Trading': 'Trading',
    'Platforms': 'Plataformas',
    'Markets': 'Mercados',
    'Tools': 'Herramientas',
    'Education': 'Educación',
    'About': 'Acerca de',
    'Login': 'Iniciar sesión',
    'Open Account': 'Abrir cuenta',
    'Signup': 'Registrarse',
    
    # Common terms
    'Trade': 'Operar',
    'Buy': 'Comprar',
    'Sell': 'Vender',
    'Deposit': 'Depósito',
    'Withdrawal': 'Retiro',
    'Account': 'Cuenta',
    'Platform': 'Plataforma',
    'Market': 'Mercado',
    'Instrument': 'Instrumento',
    'Currency': 'Moneda',
    'Leverage': 'Apalancamiento',
    'Spread': 'Spread',
    'Commission': 'Comisión',
    'Professional': 'Profesional',
    'Advanced': 'Avanzado',
    'Expert': 'Experto',
    'Fast': 'Rápido',
    'Secure': 'Seguro',
    'Regulated': 'Regulado',
    'License': 'Licencia',
    'Support': 'Soporte',
    'Contact': 'Contacto',
    'Learn More': 'Saber más',
    'Get Started': 'Comenzar',
    'Download': 'Descargar',
    'Register': 'Registrarse',
    'Start Trading': 'Comenzar a operar',
}

TRADING_TERMS_AF = {
    # Navigation
    'Home': 'Tuis',
    'Trading': 'Handel',
    'Platforms': 'Platforms',
    'Markets': 'Markte',
    'Tools': 'Gereedskap',
    'Education': 'Opvoeding',
    'About': 'Oor',
    'Login': 'Teken aan',
    'Open Account': 'Maak rekening oop',
    'Signup': 'Registreer',
    
    # Common terms
    'Trade': 'Handel',
    'Buy': 'Koop',
    'Sell': 'Verkoop',
    'Deposit': 'Deposito',
    'Withdrawal': 'Onttrekking',
    'Account': 'Rekening',
    'Platform': 'Platform',
    'Market': 'Mark',
    'Instrument': 'Instrument',
    'Currency': 'Geldeenheid',
    'Leverage': 'Hefboom',
    'Spread': 'Spread',
    'Commission': 'Kommissie',
    'Professional': 'Professioneel',
    'Advanced': 'Gevorderd',
    'Expert': 'Kundige',
    'Fast': 'Vinnig',
    'Secure': 'Veilig',
    'Regulated': 'Gereguleer',
    'License': 'Lisensie',
    'Support': 'Ondersteuning',
    'Contact': 'Kontak',
    'Learn More': 'Leer meer',
    'Get Started': 'Begin',
    'Download': 'Laai af',
    'Register': 'Registreer',
    'Start Trading': 'Begin handel',
}

print("Translation script for adding ES and AF languages")
print("=" * 60)
print("\nThis script will add Spanish and Afrikaans translations")
print("to all i18n files in the project.")
print("\nNote: Using automated translation with common trading terms")
print("=" * 60)
