# BoolFlix

Replicare la logica di un sito che permette la visione di film e telefilm.

### Milestone 0

Progettare la struttura del global state.

### Milestone 1

Creare un layout base con una searchbar (una input e un button) in cui scrivere completamente o parzialmente il nome di un film. Cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Dopo la risposta dell’API, visualizzare a schermo i seguenti valori per ogni film trovato:

1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

### Milestone 2

- Trasformare la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API.

- Allargare la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv.

### Milestone 3

- Aggiungere la copertina del film/serie.
- Trasformare il voto da 1 a 10 decimale in un numero intero da 1 a 5, per stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote.

### Milestone 4

Trasformare quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:

- Un header con logo e search bar
- Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina
- Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview

## Svolgimento
