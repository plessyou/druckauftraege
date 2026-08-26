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

## Behobener Speicherfehler (v5)

- Scheiterte ein Schreibvorgang in IndexedDB auch nur ein einziges Mal, hat die App die Datenbank für den Rest der Sitzung abgeschaltet und still nur noch im Arbeitsspeicher gehalten. Alles danach ging beim Schließen verloren.
- IndexedDB-Verbindungen werden jetzt bei einem Abbruch neu aufgebaut und die Aktion einmal wiederholt. Das betrifft besonders installierte Apps auf iOS, die im Hintergrund die Verbindung verlieren.
- Nach einem Ausfall klopft die App vor jedem Schreibversuch erneut an. Sobald die Datenbank wieder antwortet, wird alles Aufgelaufene nachgeschrieben.
- Zusätzlich wird der Speicher der Claude-Vorschau unterstützt, damit dieselbe Datei auch dort läuft. Auf GitHub Pages ändert das nichts: dort bleibt IndexedDB die Hauptablage.

## Auftrags- und Bestandslogik

- Der frühere Status **Übergeben** heißt jetzt **Erledigt**. Erledigte Aufträge liegen im Ordner **✓ Erledigt** und zählen nicht mehr zu den aktiven Aufträgen.
- Im kompakten Bestandsstreifen steht Textil, Farbe, Größe und freie Menge.
- Bei einem Auftrag zeigen die Größen Grün für verfügbar, Orange für zu knapp und Rot für nicht verfügbar.
- Unisex und Frauenschnitt wurden entfernt. Bestehende getrennte Bestände werden automatisch zusammengeführt.
- Mehrere Platzierungen können gleichzeitig ausgewählt werden, zum Beispiel **Brust links** und **Rücken groß**.
- Bei der Textilfarbe stehen die vollständigen Markenkarten zur Auswahl: Stanley/Stella Creator 2.0 (55 Farben) und EarthPositive EP185 (24 Farben, direkt aus dem Farbfächer abgenommen), dazu die Grundfarben für andere Marken. Bei den Druckfarben bleiben es die Grundfarben.
- Die Hex-Werte sind an die Stoffmuster angeglichen und stehen als eine Liste (`FARBKARTEN`) oben in der Datei, falls einzelne Töne nachjustiert werden sollen.

## Wichtige Hinweise

- GitHub speichert nur den App-Code. Aufträge und Fotos liegen weiterhin lokal im Browser oder in der installierten App.
- Vor einem Gerätewechsel unter **Daten → Sicherung speichern** exportieren und auf dem neuen Gerät wieder laden.
- Die App muss über HTTPS geöffnet werden. GitHub Pages stellt HTTPS automatisch bereit.
- Nach einem Update aktiviert die App den neuen Offline-Cache automatisch und lädt sich einmal neu. Die Registrierung umgeht dabei alte Browser-Caches.
