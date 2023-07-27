const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://FoodHub:d99cChmrWUTx21E9@foodhub.bppgjtu.mongodb.net/FoodHub?retryWrites=true&w=majority";

const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "food_Category"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });
          // if (err) console.log(err);
          // else {
          //   global.food_items = data;
          //   console.log(global.food_items);
          // }
        });
      }
    }
  );
  // try {
  //   mongoose.set("strictQuery", false);
  //   mongoose.connect(mongoUrl);
  //   console.log("Connected to Mongo Successfully!");
  //   const fetchData = await mongoose.connection.db.collection("food_items");
  //   fetchData.find({}).toArray(function (err, data) {
  //     if (err) console.log(err);
  //     else console.log(data);
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};

module.exports = mongoDB;
