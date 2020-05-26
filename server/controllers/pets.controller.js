const Pet = require('../models/pet.model');

module.exports = {
  getAll(_,res){
    Pet.find()
    .then(pets => res.json(pets));
  },

	create(req, res) {
    Pet.create(req.body)
      .then(pet => res.json(pet))
      .catch((err) => res.json(err));
  },
  
  getOne(req, res) {
    const petId = req.params.id;
    Pet.findById(petId)
      .then(pet => res.json(pet))
      .catch(err => res.json(err));
  },

  update(req, res) {
    const petId = req.params.id;
    Pet.findByIdAndUpdate(
      petId,
      req.body,
      {
        new: true,
        runValidators: true
      }
    )
      .then(pet => res.json(pet))
      .catch(err => res.json(err));
  },

  delete(req, res) {
    const petId = req.params.id;
    Pet.findByIdAndDelete(petId)
      .then(() => res.json({ status: "success" }))
      .catch((err) => res.json(err));
  }
};