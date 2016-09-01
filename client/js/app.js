const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require("./views/ItemListView");
const ItemCollection = require("./collections/ItemCollection");

const items = new ItemCollection();
items.fetch({
  success(){
    const view = new ItemListView({collection: items});
    const app = $("#app");

    app.append(view.render().el);
  },

  error(){
    alert("could not fetch items from database");
  }
});
