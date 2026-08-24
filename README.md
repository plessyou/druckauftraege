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
- Das rote Speicherband wurde vollständig aus der Startseite entfernt.
- Speicherdiagnosen stehen ausschließlich unter **Daten**.
- Ein Service Worker hält die App nach dem ersten erfolgreichen Laden auch offline verfügbar.

## Auftrags- und Bestandslogik

- Der frühere Status **Übergeben** heißt jetzt **Erledigt**. Erledigte Aufträge liegen im Ordner **✓ Erledigt** und zählen nicht mehr zu den aktiven Aufträgen.
- Im kompakten Bestandsstreifen steht Textil, Farbe, Größe und freie Menge.
- Bei einem Auftrag zeigen die Größen Grün für verfügbar, Orange für zu knapp und Rot für nicht verfügbar.
- Unisex und Frauenschnitt wurden entfernt. Bestehende getrennte Bestände werden automatisch zusammengeführt.
- Mehrere Platzierungen können gleichzeitig ausgewählt werden, zum Beispiel **Brust links** und **Rücken groß**.
- Eine einfache Grundfarbenkarte ist beim Bestand, bei der Textilfarbe und bei beiden Druckfarben verfügbar.

## Wichtige Hinweise

- GitHub speichert nur den App-Code. Aufträge und Fotos liegen weiterhin lokal im Browser oder in der installierten App.
- Vor einem Gerätewechsel unter **Daten → Sicherung speichern** exportieren und auf dem neuen Gerät wieder laden.
- Die App muss über HTTPS geöffnet werden. GitHub Pages stellt HTTPS automatisch bereit.
- Nach einem Update aktiviert die App den neuen Offline-Cache automatisch und lädt sich einmal neu. Die Registrierung umgeht dabei alte Browser-Caches.
