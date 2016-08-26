const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require("./views/ItemListView");

const view = new ItemListView({items: [
  {name: "item1", quantity: 1},
  {name: "item2", quantity: 2},
  {name: "item3", quantity: 3}
]});
const app = $("#app");

app.append(view.render().el);
