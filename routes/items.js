const express = require("express");
var router = express.Router();

var ItemController = require("../controllers/ItemController");

router.get("/", function(req, res){
  ItemController.list(req, res);
});
router.get("/:id", function(req, res){
  ItemController.show(req, res)
});
router.post("/", function(req, res){
  ItemController.create(req, res)
});
router.put("/:id", function(req, res){
  ItemController.update(req, res)
});
router.delete("/:id", function(req, res){
  ItemController.delete(req, res)
});

module.exports = router;
