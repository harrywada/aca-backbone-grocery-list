const _ = require("lodash");
const Backbone = require("backbone");

const ItemView = Backbone.View.extend({
  el: "<li></li>",

  template: _.template(`
    <span>Item: <%= item.get("name") %></span><br>
    <span>Quantity: <%= item.get("quantity") %></span><br>
  `),

  render(){
    this.$el.append(this.template({item: this.model}));
    return this;
  }
});

module.exports = ItemView;
