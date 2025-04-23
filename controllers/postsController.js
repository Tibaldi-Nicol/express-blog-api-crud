

//  Importiamo l'array di post (finto database)
const posts = require('../data/posts');


//  INDEX - restituisce la lista di tutti i post, con filtro opzionale per tag
function index(req, res) {
  const { tag } = req.query; // legge il parametro "tag" dalla query string, es: /posts?tag=Dolci

  if (tag) {
    // Se è stato passato un tag, filtra i post che contengono quel tag
    const filtered = posts.filter(post => post.tags.includes(tag));
    return res.json(filtered); // restituisce solo i post filtrati
  }

  // Se non è stato passato nessun tag, restituisce tutti i post
  res.json(posts);
}


//  SHOW - restituisce un singolo post dato l'ID
function show(req, res) {
  const { id } = req.params; // es: /posts/3 => id = "3"

  const post = posts.find(p => p.id === parseInt(id)); // cerca il post con quell'ID

  if (!post) {
    // se non esiste, restituisce errore 404
    return res.status(404).json({ error: "Post non trovato" });
  }

  res.json(post); // altrimenti restituisce il post trovato
}


//  CREATE - crea un nuovo post e lo aggiunge all'array
function create(req, res) {
  const { title, content, tags, image } = req.body; // prende i dati dal corpo della richiesta

  // controlla che titolo e contenuto siano presenti
  if (!title || !content) {
    return res.status(400).json({ error: "Titolo e contenuto sono obbligatori" });
  }

  // crea un nuovo ID prendendo l'ultimo ID esistente e aggiungendo 1
  const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

  const newPost = {
    id: newId,
    title,
    content,
    tags: tags || [],
    image: image || null
  };

  posts.push(newPost); // aggiunge il nuovo post all'array

  res.status(201).json(newPost); // restituisce il post creato con stato 201 (created)
}


// UPDATE - modifica un post esistente
function update(req, res) {
  const { id } = req.params; // prende l'id dalla URL
  const { title, content, tags, image } = req.body; // prende i nuovi dati dal body

  const post = posts.find(p => p.id === parseInt(id)); // cerca il post da aggiornare

  if (!post) {
    return res.status(404).json({ error: "Post non trovato" }); // se non lo trova
  }

  // aggiorna solo i campi forniti
  if (title) post.title = title;
  if (content) post.content = content;
  if (tags) post.tags = tags;
  if (image) post.image = image;

  res.json(post); // restituisce il post aggiornato
}


//  DESTROY - elimina un post
function destroy(req, res) {
  const { id } = req.params;

  const index = posts.findIndex(p => p.id === parseInt(id)); // trova l'indice del post da eliminare

  if (index === -1) {
    return res.status(404).json({ error: "Post non trovato" }); // se non lo trova
  }

  posts.splice(index, 1); // elimina il post dall'array

  console.log("Lista aggiornata:", posts); // stampa la lista aggiornata nel terminale

  res.status(204).send(); // risponde con 204 (nessun contenuto)
}


//  Esportiamo tutte le funzioni per usarle nel router
module.exports = {
  index,
  show,
  create,
  update,
  destroy
};

