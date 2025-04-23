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

// Facciamo partire il server sulla porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
//