//milestone 1, creazione del file postsController.js
// Questo file contiene le funzioni per gestire le richieste HTTP relative ai post

// controllers/postsController.js

// Importiamo l'array dei post
const posts = require('../data/posts');

// INDEX - restituisce tutti i post (con filtro tag se richiesto)
function index(req, res) {
  const { tag } = req.query; // Legge il parametro di ricerca ""

  if (tag) {
    // Filtra i post per tag
    const filtered = posts.filter(post => post.tags.includes(tag));
    return res.json(filtered);
  }

  // Se nessun tag richiesto, restituisce tutti i post
  res.json(posts);
}

// SHOW - mostra un singolo post
function show(req, res) {
  const { id } = req.params;

  // Cerca il post per ID (converte a numero)
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    // Se il post non esiste, restituisce errore 404
    return res.status(404).json({ error: "Post non trovato" });
  }

  res.json(post); // Restituisce il post
}

// CREATE - (per ora ancora vuoto)
function create(req, res) {
  res.send('Creazione di un nuovo post');
}

// UPDATE - (per ora ancora vuoto)
function update(req, res) {
  res.send('Aggiornamento del post');
}

// DESTROY - elimina un post
function destroy(req, res) {
  const { id } = req.params;
  const index = posts.findIndex(p => p.id === parseInt(id));

  if (index === -1) {
    // Se il post non esiste
    return res.status(404).json({ error: "Post non trovato" });
  }

  // Rimuove il post dall'array
  posts.splice(index, 1);

  // Mostra la nuova lista aggiornata nel terminale
  console.log("Lista aggiornata:", posts);

  // Risponde con stato 204 (nessun contenuto)
  res.status(204).send();
}

// Esportiamo tutte le funzioni
module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
