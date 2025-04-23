//milestone 1, creazione del file postsController.js
// Questo file contiene le funzioni per gestire le richieste HTTP relative ai post


// Funzione INDEX - mostra la lista dei post
function index(req, res) {
    // Risponde con un messaggio testuale
    res.send('Lista dei post');
  }
  
  // Funzione SHOW - mostra un singolo post in base all'id
  function show(req, res) {
    const { id } = req.params; // Legge il parametro "id" dall'URL
    res.send(`Visualizzazione del post ${id}`);
  }
  
  // Funzione CREATE - crea un nuovo post
  function create(req, res) {
    // Risponde con un messaggio che conferma la creazione
    res.send('Creazione di un nuovo post');
  }
  
  // Funzione UPDATE - aggiorna un post esistente
  function update(req, res) {
    const { id } = req.params; // Legge l'id dall'URL
    res.send(`Aggiornamento del post ${id}`);
  }
  
  // Funzione DESTROY - elimina un post
  function destroy(req, res) {
    const { id } = req.params; // Legge l'id dall'URL
    res.send(`Cancellazione del post ${id}`);
  }
  
  // Esportiamo tutte le funzioni, così possiamo usarle nel router
  module.exports = {
    index,
    show,
    create,
    update,
    destroy
  };
  