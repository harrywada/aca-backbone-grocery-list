const Backbone = require("backbone");

const ItemModel = Backbone.Model.extend({
  idAttribute: "_id",
  urlRoot: "/items",

  initialize(){
    this.on("change", function(){
      this.save();
    });
  }
});

module.exports = ItemModel;
