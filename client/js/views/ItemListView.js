const Backbone = require("backbone");
const ItemView = require("./ItemView");
const ItemCollection = require("../collections/ItemCollection");
const ItemModel = require("../models/ItemModel");

const ItemListView = Backbone.View.extend({
  el: `
    <div>
      <form>
        <label for="name">Name: </label><br>
        <input type="text" name="name" /><br>

        <label for="quantity">Quantity: </label><br>
        <input type="number" name="quantity" /><br>

        <input type="submit" name="submit" value="submit" />
      </form>

      <ul></ul>
    </div>
  `,

  initialize(){
    this.collection = new ItemCollection();

    this.listenTo(this.collection, "update", () => {
      this.render();
    });
  },

  events:{
    "submit form": "handleFormSubmit"
  },

  handleFormSubmit(e){
    const form = $(e.target);

    const newItem = new ItemModel({
      name: form.find("input[name=\"name\"]").val(),
      quantity: form.find("input[name=\"quantity\"]").val()
    });
    this.collection.add(newItem).save();

    form.find("input[type=\"text\"]").val("");
    form.find("input[type=\"number\"]").val("");
    e.preventDefault();
  },

  render(){
    this.$el.find("ul").html("");
    this.collection.forEach((item) => {
      const itemView = new ItemView({model: item});
      this.$el.find("ul").append(itemView.render().el);
    });

    return this;
  }
});

module.exports = ItemListView;
