const Backbone = require("backbone");
const ItemModel = require("../models/ItemModel");

const ItemCollection = Backbone.Collection.extend({
  url: "/items",
  model: ItemModel,

  initialize(){
    this.fetch();
  }
});



module.exports = ItemCollection;
