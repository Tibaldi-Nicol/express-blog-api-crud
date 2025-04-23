// routers/posts.js

// Importiamo express per usare il router
const express = require('express');
const router = express.Router();


// Importiamo tutte le funzioni del controller
const postsController = require('../controllers/postsController');

// Rotta INDEX - restituisce la lista dei post
router.get('/', postsController.index);



// Rotta SHOW - restituisce un singolo post (tramite ID)
router.get('/:id', postsController.show);




// Rotta CREATE - crea un nuovo post
router.post('/', postsController.create);
//


// Rotta UPDATE - modifica un post (tramite ID)
router.put('/:id', postsController.update);

// Rotta DESTROY - elimina un post (tramite ID)
router.delete('/:id', postsController.destroy);

// Esportiamo il router per usarlo in app.js
module.exports = router;

// // In questo file abbiamo definito le rotte per gestire i post. Ogni rotta è associata a una funzione del controller 
