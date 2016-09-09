const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require("./views/ItemListView");

const view = new ItemListView();
const app = $("#app");

app.append(view.render().el);
