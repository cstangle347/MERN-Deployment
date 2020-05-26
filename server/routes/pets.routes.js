const petController = require('../controllers/pets.controller');

module.exports = app => {
    app.post('/api/pets', petController.create);
    app.get('/api/pets', petController.getAll);
    app.get('/api/pets/:id', petController.getOne);
    app.put('/api/pets/:id', petController.update);
    app.delete('/api/pets/:id', petController.delete);
}