const Backbone = require("backbone");
const ItemView = require("./ItemView");

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

  initialize(options){
    this.items = options.items;
  },

  events:{
    "submit form": "handleFormSubmit"
  },

  handleFormSubmit(e){
    const form = $(e.target);
    const item = {
      name: form.find("input[name=\"name\"]").val(),
      quantity: form.find("input[name=\"quantity\"]").val()
    };

    this.items.push(item);

    form.find("input[type=\"text\"]").val("");
    form.find("input[type=\"number\"]").val("");
    this.render();

    e.preventDefault();
  },

  render(){
    this.$el.find("ul").html("");
    this.items.forEach((item) => {
      const itemView = new ItemView({item: item});
      this.$el.find("ul").append(itemView.render().el);
    });

    return this;
  }
});

module.exports = ItemListView;
