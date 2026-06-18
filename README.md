# Brass.313 — Glow Up

Ein Design-Glow-Up der Website [brass313.de](https://www.brass313.de/) — gebaut mit dem
[Astro](https://astro.build/)-Framework.

**Live:** https://waltermelcher.github.io/Brass313-GlowUp/

## Über das Projekt

Brass.313 ist ein 7-köpfiges Blasmusik-Ensemble aus Württemberg (entlang der B313), das
traditionelle Blasmusik mit modernen Pop-Arrangements verbindet.

Dieses Repo ist eine neu gestaltete Version der bestehenden Seite. **Struktur, Texte, Bilder
und Navigation** wurden übernommen; das Design wurde deutlich aufgewertet:

- **Look:** Cinematic Dark mit Messing-/Gold-Akzent
- **Typografie:** Fraunces (Display-Serif) + Inter (Body)
- **Animationen:** dezente Scroll-Reveals & Hover-Effekte (respektiert `prefers-reduced-motion`)
- **Technik:** Astro 5, statische Generierung, responsive, SEO-/OpenGraph-Tags, Sitemap

> Die Rechtsseite (Impressum & Datenschutz) enthält **Platzhalter-/Dummytexte** und muss vor
> einem echten Live-Gang durch rechtsgültige Angaben ersetzt werden.

## Seiten

| Seite | Pfad |
| --- | --- |
| Start | `/` |
| Auftritte | `/auftritte` |
| Termine | `/termine` |
| Musiker | `/musiker` |
| Kontakt | `/kontakt` |
| Impressum & Datenschutz | `/impressum-datenschutz` |

## Lokal entwickeln

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:4321/Brass313-GlowUp
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Deployment

Push auf `main` triggert den GitHub-Actions-Workflow (`.github/workflows/deploy.yml`), der die
Seite baut und auf GitHub Pages veröffentlicht.

---

Bildrechte: Originalfotos der Band (Fotograf u. a. Daniel Jueptner · 8pm.de).
