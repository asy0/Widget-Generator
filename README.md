# Widget Generator
 
Ein kleiner Web‑Generator, der Reddit‑Posts aus beliebigen Subreddits abruft und sie als uebersichtliche Widgets darstellt.  
Frontend in React, Backend in Flask.
 
## Features
- Suche nach Subreddits und Anzeige der neuesten Posts
- Vordefinierte, haeufig genutzte Widgets (z. B. NBA, Sports, Gaming)
- Fehlerbehandlung fuer private oder nicht existente Subreddits
- Klare, einfache UI
 
## Tech Stack
- **Frontend:** React, React Router, Bootstrap, Styled Components
- **Backend:** Flask, Flask‑CORS
- **API:** Reddit (ueber Parser im Backend)

- ## Projektstruktur (Kurz)
root/ frontend/ # React App backend/ # Flask API


## Lokales Setup (Kurz)
1. Backend starten
   - Abhaengigkeiten installieren: `pip install -r requirements.txt`
   - Server starten: `python -m app.app`
2. Frontend starten
   - Abhaengigkeiten installieren: `npm install`
   - App starten: `npm start`

## Nutzung
- Subreddit eingeben und "Generate" klicken
- Die Posts werden als Liste im Widget angezeigt

