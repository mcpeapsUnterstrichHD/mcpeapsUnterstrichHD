<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mcpeapsUnterstrichHD Webseite</title>
    <style>
        /* Stil für das Overlay */
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7); /* Hintergrundfarbe mit Transparenz */
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
        }

        /* Stil für den Inhalt des Overlays */
        .overlay-content {
            text-align: center;
        }
    </style>
</head>
<body>

<!-- Inhalt der Webseite -->
<h1>Willkommen auf mcpeapsUnterstrichHD</h1>
<p>Hier steht der normale Inhalt deiner Webseite.</p>

<!-- Overlay -->
<div class="overlay" id="myOverlay">
    <div class="overlay-content">
        <p>Dies ist das Overlay!</p>
        <button onclick="closeOverlay()">Overlay schließen</button>
    </div>
</div>

<!-- JavaScript zum Anzeigen und Schließen des Overlays -->
<script>
    function openOverlay() {
        document.getElementById("myOverlay").style.display = "flex";
    }

    function closeOverlay() {
        document.getElementById("myOverlay").style.display = "none";
    }
</script>

<!-- Füge diesen Button ein, um das Overlay manuell zu öffnen -->
<button onclick="openOverlay()">Overlay manuell öffnen</button>

</body>
