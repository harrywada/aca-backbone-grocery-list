var ItemModel = require("../models/ItemModel.js");

module.exports = {

  list: function(req, res){
    ItemModel.find(function(err, items){
      if(!err){
        res.json(items);
        return res.end();
      }
      res.json({success: false});
      return res.end();
    });
  },

  show: function(req, res){
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function(err, item){
      if(!err){
        res.json(item);
        return res.end();
      }
      res.json({success: false});
      return res.end();
    });
  },

  create: function(req, res){
    var item = new ItemModel({
      name: req.body.name,
      quantity: req.body.quantity
    });

    item.save(function(err, item){
      if(!err){
        res.json(item);
        return res.end();
      }
      res.json({success: false});
      return res.end();
    });
  },

  update: function(req, res){
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function(err, item){
      item.name = req.body.name ? req.body.name : item.name;
      item.quantity = req.body.quantity ? req.body.quantity : item.quantity;

      item.save(function(err, item){
        if(!err){
          res.json(item);
          return res.end();
        }
        res.json({success: false});
        return res.end();
      });
    });
  },

  remove: function(req, res){
    var id = req.params.id;
    ItemModel.findByIdAndRemove(id, function(err, item){
      if(!err){
        res.json(item);
        return res.end();
      }
      res.json({success: false});
      return res.end();
    });
  }
}
