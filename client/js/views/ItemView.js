const _ = require("lodash");
const Backbone = require("backbone");

const ItemView = Backbone.View.extend({
  el: "<li></li>",

  template: _.template(`
    <span>Item: <%= item.name %></span><br>
    <span>Quantity: <%= item.quantity %></span><br>
  `),

  initialize(options){
    this.item = options.item;
  },

  render(){
    this.$el.append(this.template({item: this.item}));
    return this;
  }
});

module.exports = ItemView;
