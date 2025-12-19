#!/usr/bin/env python3
"""
Script to add Hungarian (hu) translations to all translation files
Based on English translations with Hungarian language mapping
"""

# Hungarian translations mapping for common trading/finance terms
HUNGARIAN_MAPPING = {
    # Navigation
    "Home": "Főoldal",
    "Trading": "Kereskedés",
    "Trading Platforms": "Kereskedési platformok",
    "Markets & Tools": "Piacok és eszközök",
    "Knowledge Hub": "Tudásközpont",
    "Company": "Társaság",
    "Login": "Bejelentkezés",
    "Open Account": "Számla nyitása",
    
    # Trading submenu
    "Open Trading Account": "Kereskedési számla nyitása",
    "Pricing Model": "Árazási modell",
    "Funding & Withdrawals": "Befizetés és kivonás",
    "Platform & Account Comparison": "Platform és számla összehasonlítás",
    "Mobile App": "Mobil alkalmazás",
    "WebTrader": "WebTrader",
    "MetaTrader 5": "MetaTrader 5",
    "MetaTrader 4": "MetaTrader 4",
    "cTrader": "cTrader",
    "TradingView": "TradingView",
    "Pro Trading Conditions": "Professzionális kereskedési feltételek",
    "Trading Benefits": "Kereskedési előnyök",
    
    # Markets
    "Forex": "Forex",
    "Stocks": "Részvények",
    "Indices": "Indexek",
    "Commodities": "Nyersanyagok",
    "Cryptocurrencies": "Kriptovaluták",
    "Futures": "Határidős ügyletek",
    "Trading Calculator": "Kereskedési kalkulátor",
    "Economic Calendar": "Gazdasági naptár",
    "Market News": "Piaci hírek",
    "Technical Analysis": "Technikai elemzés",
    
    # Knowledge Hub
    "Education": "Oktatás",
    "Trading Guides": "Kereskedési útmutatók",
    "Webinars": "Webináriumok",
    "Video Tutorials": "Videó útmutatók",
    "Trading Glossary": "Kereskedési szószedet",
    "FAQ": "GYIK",
    
    # Company
    "About Us": "Rólunk",
    "Why SMH Markets": "Miért SMH Markets",
    "Careers": "Karrier",
    "Partnerships": "Partnerségek",
    "Contact Us": "Kapcsolat",
    "Legal Documents": "Jogi dokumentumok",
    "Security": "Biztonság",
    
    # Hero section
    "Trade with Confidence": "Kereskedjen magabiztosan",
    "Professional Trading Platform": "Professzionális kereskedési platform",
    "Access global markets with competitive spreads, advanced tools, and lightning-fast execution": "Hozzáférés a globális piacokhoz versenyképes spreadekkel, fejlett eszközökkel és villámgyors végrehajtással",
    "Open Live Account": "Élő számla nyitása",
    "Try Demo": "Demo kipróbálása",
    
    # Features
    "Why Choose SMH Markets": "Miért válassza az SMH Markets-t",
    "Everything you need for successful trading": "Minden, amire szüksége van a sikeres kereskedéshez",
    "Key Features:": "Főbb jellemzők:",
    "Desktop": "Asztal",
    "Mobile": "Mobil",
    "Download for Windows": "Letöltés Windows-ra",
    "Download for Mac": "Letöltés Mac-re",
    "Download for iOS": "Letöltés iOS-re",
    "Download for Android": "Letöltés Android-ra",
    "Learn More about": "Tudjon meg többet",
    "Launch Web Platform": "Webes platform indítása",
    
    # Platforms
    "Advanced Trading Platforms": "Fejlett kereskedési platformok",
    "Choose the platform that suits your trading style": "Válassza ki az Ön kereskedési stílusához illő platformot",
    "The world's most popular trading platform": "A világ legnépszerűbb kereskedési platformja",
    "Next generation multi-asset platform": "Következő generációs multi-eszköz platform",
    "Professional trading platform": "Professzionális kereskedési platform",
    "Our proprietary trading platform": "Saját kereskedési platformunk",
    "Platform Comparison": "Platform összehasonlítás",
    "Feature": "Funkció",
    "Expert Advisors": "Szakértő tanácsadók",
    "Advanced Charting": "Fejlett grafikonok",
    "One-Click Trading": "Egy kattintásos kereskedés",
    "Mobile Apps": "Mobil alkalmazások",
    "Web Platform": "Webes platform",
    "Copy Trading": "Másolás kereskedés",
    "Level II Pricing": "II. szintű árazás",
    
    # Common terms
    "Trade": "Kereskedés",
    "Start Trading": "Kezdje el a kereskedést",
    "Get Started": "Kezdő lépések",
    "Learn More": "Tudjon meg többet",
    "Read More": "Olvass tovább",
    "View All": "Összes megtekintése",
    "Sign Up": "Regisztráció",
    "Register": "Regisztráció",
    "Submit": "Beküldés",
    "Send": "Küldés",
    "Cancel": "Mégse",
    "Close": "Bezárás",
    "Yes": "Igen",
    "No": "Nem",
    "Save": "Mentés",
    "Edit": "Szerkesztés",
    "Delete": "Törlés",
    "Search": "Keresés",
    "Filter": "Szűrő",
    "Sort": "Rendezés",
    "Next": "Következő",
    "Previous": "Előző",
    "Back": "Vissza",
    "Continue": "Folytatás",
    
    # Account types
    "Demo Account": "Demo számla",
    "Live Account": "Élő számla",
    "Standard Account": "Standard számla",
    "Pro Account": "Pro számla",
    "VIP Account": "VIP számla",
    "Islamic Account": "Iszlám számla",
    
    # Trading terms
    "Leverage": "Tőkeáttétel",
    "Spread": "Spread",
    "Spreads": "Spread-ek",
    "Commission": "Jutalék",
    "Margin": "Fedezet",
    "Lot": "Tétel",
    "Pip": "Pip",
    "Volume": "Mennyiség",
    "Position": "Pozíció",
    "Order": "Megbízás",
    "Buy": "Vétel",
    "Sell": "Eladás",
    "Stop Loss": "Stop Loss",
    "Take Profit": "Take Profit",
    "Pending Order": "Függőben lévő megbízás",
    "Market Order": "Piaci megbízás",
    "Limit Order": "Limit megbízás",
    
    # Account features
    "Minimum Deposit": "Minimum befizetés",
    "Maximum Leverage": "Maximum tőkeáttétel",
    "Instant execution": "Azonnali végrehajtás",
    "Fast execution": "Gyors végrehajtás",
    "Low spreads": "Alacsony spread-ek",
    "Tight spreads": "Szoros spread-ek",
    "Raw spreads": "Nyers spread-ek",
    "Zero spreads": "Nulla spread-ek",
    "No commission": "Nincs jutalék",
    "24/7 support": "24/7 támogatás",
    "Personal manager": "Személyes menedzser",
    "Dedicated support": "Dedikált támogatás",
    "Priority withdrawals": "Elsőbbségi kivonások",
    "Premium analytics": "Prémium elemzések",
    
    # Page titles
    "Regulation & Licensing": "Szabályozás és engedélyezés",
    "Why Trade with SMH Markets": "Miért kereskedjen az SMH Markets-szel",
    "Frequently Asked Questions": "Gyakran Ismételt Kérdések",
    "Trading Education": "Kereskedési oktatás",
    "Market Analysis": "Piaci elemzés",
    
    # Common phrases
    "Join successful traders": "Csatlakozzon a sikeres kereskedőkhöz",
    "Start your trading journey": "Kezdje el kereskedési utazását",
    "Trade global markets": "Kereskedjen globális piacokon",
    "Access to": "Hozzáférés ehhez",
    "Up to": "Akár",
    "From": "Ettől",
    "More than": "Több mint",
    "Over": "Több mint",
    
    # Time
    "24/7": "24/7",
    "Monday to Friday": "Hétfőtől péntekig",
    "Business hours": "Munkaidő",
    "Opening hours": "Nyitvatartási idő",
    
    # Status
    "Available": "Elérhető",
    "Not available": "Nem elérhető",
    "Coming soon": "Hamarosan",
    "Active": "Aktív",
    "Inactive": "Inaktív",
    "Pending": "Függőben",
    "Approved": "Jóváhagyva",
    "Rejected": "Elutasítva",
    
    # Forms
    "Full Name": "Teljes név",
    "Email": "E-mail",
    "Phone": "Telefon",
    "Subject": "Tárgy",
    "Message": "Üzenet",
    "Send Message": "Üzenet küldése",
    "Your message": "Az Ön üzenete",
    "Enter your email": "Adja meg e-mail címét",
    "Enter your name": "Adja meg nevét",
    
    # Buttons
    "Open Account Now": "Nyisson számlát most",
    "Start Trading Now": "Kezdje el a kereskedést most",
    "Try Demo Account": "Próbálja ki a demo számlát",
    "Contact Support": "Ügyfélszolgálat",
    "Download Now": "Letöltés most",
    "Register Now": "Regisztráljon most",
    "Apply Now": "Jelentkezzen most",
    "Select Account": "Számla kiválasztása",
    
    # Footer
    "Follow us": "Kövessen minket",
    "All rights reserved": "Minden jog fenntartva",
    "Risk Warning": "Kockázati figyelmeztetés",
    "Privacy Policy": "Adatvédelmi irányelvek",
    "Terms of Service": "Szolgáltatási feltételek",
    "Cookie Policy": "Cookie irányelvek"
}

def create_hungarian_translation(english_text):
    """Convert English text to Hungarian using the mapping or return the original"""
    if english_text in HUNGARIAN_MAPPING:
        return HUNGARIAN_MAPPING[english_text]
    return english_text

if __name__ == "__main__":
    print("Hungarian translation mapping created successfully")
    print(f"Total mapped phrases: {len(HUNGARIAN_MAPPING)}")
