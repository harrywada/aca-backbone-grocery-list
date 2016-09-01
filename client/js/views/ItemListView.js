const Backbone = require("backbone");
const ItemView = require("./ItemView");
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

  events:{
    "submit form": "handleFormSubmit"
  },

  handleFormSubmit(e){
    const form = $(e.target);

    const newItem = new ItemModel({
      name: form.find("input[name=\"name\"]").val(),
      quantity: form.find("input[name=\"quantity\"]").val()
    });

    newItem.save(null, {
      success: () => {
        this.collection.add(newItem);

        form.find("input[type=\"text\"]").val("");
        form.find("input[type=\"number\"]").val("");
        this.render();
      },

      error: () => {
        alert("could not save item");
      }
    });

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
