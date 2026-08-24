# Siebdruckaufträge

Eine installierbare Web-App für Aufträge, Deadlines, Bezahlung und Textilbestand. Alle Daten bleiben lokal auf dem jeweiligen Gerät. Die App benötigt kein Backend.

## Auf GitHub Pages veröffentlichen

1. Den Inhalt dieses Ordners in ein GitHub-Repository hochladen. `index.html` muss im Hauptverzeichnis des veröffentlichten Ordners liegen.
2. Im Repository unter **Settings → Pages** bei **Build and deployment** die Option **Deploy from a branch** wählen.
3. Den Branch `main` und den Ordner `/ (root)` auswählen und speichern.
4. Die angezeigte HTTPS-Adresse öffnen. Auf iPhone oder iPad in Safari **Teilen → Zum Home-Bildschirm** wählen. Unter Android oder Desktop-Chrome im Browsermenü **App installieren** wählen.

## Was beim Speicherproblem geändert wurde

- IndexedDB ist jetzt der Hauptspeicher. Das ist für Fotos und größere Datenmengen geeigneter als `localStorage`.
- Vorhandene Daten aus der bisherigen Version werden weiterhin gelesen und automatisch in IndexedDB übernommen.
- Die Warnung „Tippen für Details“ erscheint nicht mehr beim Start.
- Speicherdiagnosen stehen unter **Daten**. Eine Warnung auf der Startseite erscheint nur nach einem echten fehlgeschlagenen Speichervorgang.
- Ein Service Worker hält die App nach dem ersten erfolgreichen Laden auch offline verfügbar.

## Wichtige Hinweise

- GitHub speichert nur den App-Code. Aufträge und Fotos liegen weiterhin lokal im Browser oder in der installierten App.
- Vor einem Gerätewechsel unter **Daten → Sicherung speichern** exportieren und auf dem neuen Gerät wieder laden.
- Die App muss über HTTPS geöffnet werden. GitHub Pages stellt HTTPS automatisch bereit.
- Nach einem Update kann einmaliges Neuladen nötig sein, damit der neue Offline-Cache aktiv wird.
