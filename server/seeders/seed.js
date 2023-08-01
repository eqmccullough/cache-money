const db = require("../config/connection");
const { User, Category, Item } = require("../models");
const userSeeds = require("./userSeeds.json");
const categorySeeds = require("./categorySeeds.json");
const itemSeeds = require("./itemSeeds.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Categories.deleteMany({});
  await Item.deleteMany({});

  for (let i = 0; i < userSeeds.length; i++) {
    const element = userSeeds[i];
    //create user
    const user = await User.create(userdata[i]);
    //create category
    const category = await Category.create(categoryData[i]);
  }
  //update user with new categories id number
  const updateUser = await User.findByIdAndUpdate(
    user.id,
    { $addToSet: { categories: category._id } },
    { new: true }
  );
  //create item
  const item = await Item.create(itemData[i]);
  // add item to category
  const updateCategory = await Category.findByIdAndUpdate(category._id, {
    $addToSet: { items: item._id },
  });
  // console log everything to make sure it worked
});

const categories = await Category.insertManu(categorySeeds);
const profiles = await Profile.insertMany(profileSeeds);
const items = await Item.insertMany(itemSeeds);

console.log("Database seeded!");
process.exit(0);
