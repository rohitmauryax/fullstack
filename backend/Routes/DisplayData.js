const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    // console.log(global.food_items);
    res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.send("srver error");
  }
});

module.exports = router;
