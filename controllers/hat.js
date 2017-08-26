const Hat = require('../models/hat');

let HatController = {
  list: function(req, res) {
    Hat.find().then(function(hats) {
      res.render('hat/list', {hats: hats});
    });
  },
  add: function(req, res) {
    let name = req.body.name;
    let size = req.body.size;
    let materials = {
      primary: req.body.materialPrimary,
      secondary: req.body.materialSecondary
    };
    let styles = req.body.style;
    let newHat = new Hat({
      name: name,
      size: size,
      materials: materials,
      styles: styles
    });
    newHat.save(function() {
      res.redirect('/hat');
    });
  },
  delete: function(req, res) {
    let hatId = req.params.id;
    Hat.deleteOne({'_id': hatId}).then(function(){
      res.redirect('/hat');
    });
  },
  update: function(req, res) {
    let hatId = req.params.id;
    Hat.findOne({
      '_id': hatId
    }).then(function(hat) {
      res.render('update', hat);
    });
  },
  complete: function(req, res) {
    let hatId = req.body.id;
    let name = req.body.name;
    let size = req.body.size;
    let materials = {
      primary: req.body.materialPrimary,
      secondary: req.body.materialSecondary
    };
    let styles = req.body.style;

    Hat.updateOne({
      _id: hatId
    }, {
      $set: {
        name: name,
        size: size,
        materials: materials
      },
      $addToSet: {
        styles: styles
      }
    }).then(function(res) {
      res.redirect('/hat');
    });
  }
};

module.exports = HatController;
