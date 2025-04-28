// Importiamo il modulo express
// e creiamo un router per gestire le richieste HTTP relative ai post. Ogni rotta è associata a una funzione del controller

// Importiamo express
const express = require('express');
const app = express();

// Importiamo il router dei post
const postsRouter = require('./routers/posts');

// Middleware per leggere JSON nel body delle richieste (es. POST/PUT)
app.use(express.json());

// Diciamo a Express di usare il router dei post su ogni rotta che inizia con /posts
app.use('/posts', postsRouter);

// middleware se le rote non vengono trovate 
app.use((req, res) => {
  // Risponde con status 404 e un messaggio JSON
  res.status(404).json({
    error: 'Risorsa non trovata',
    url: req.originalUrl
  });
});

//Gestisce gli errori che vengono spassati a next() all'interno dell'applicazione

app.use((err, req, res, next) => {
  console.error(err.stack); // Logga l'errore nel server
  
  // Risponde con status 500 e un messaggio JSON
  res.status(500).json({
    error: 'Si è verificato un errore sul server',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Errore interno'
  });
});





// Facciamo partire il server sulla porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
//