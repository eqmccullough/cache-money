const db = require("../config/connection");
const { User, Category, Item } = require("../models");
const userSeeds = require("./userSeeds.json");
const categorySeeds = require("./categorySeeds.json");
const itemSeeds = require("./itemSeeds.json");

db.once("open", async () => {
  await User.deleteMany();
  await Category.deleteMany();
  await Item.deleteMany();

  const categories = await Category.insertMany(categorySeeds);
  let users = [];
  for (let i = 0; i < userSeeds.length; i++) {
    const currentUser = userSeeds[i];
    currentUser.categories = currentUser.categories.map((categoryName) => {
      const currentCategory = categories.find((c) => c.name === categoryName);

      return currentCategory._id;
    });

    //create user
    const user = await User.create(currentUser);
    users.push(user);
  }

  for (const item of itemSeeds) {
    // const newItem = {...item}
    const currentUser = users[item.userId - 1];
    item.userId = currentUser._id;
    const currentItem = await Item.create(item);
    const randomIndex = Math.floor(Math.random() * categories.length);
    const currentCategory = categories[randomIndex]._id;
    await Category.findByIdAndUpdate(
      currentCategory,
      { $push: { items: currentItem._id } },
      { new: true }
    );
  }
  //update user with new categories id number
  //   const updateUser = await User.findByIdAndUpdate(
  //     user.id,
  //     { $addToSet: { categories: category._id } },
  //     { new: true }
  //   );
  //   //create item
  //   const item = await Item.create(itemData[i]);
  //   // add item to category
  //   const updateCategory = await Category.findByIdAndUpdate(category._id, {
  //     $addToSet: { items: item._id },
  //   });
  //   // console log everything to make sure it worked
  // });

  // const profiles = await Profile.insertMany(profileSeeds);
  // const items = await Item.insertMany(itemSeeds);

  console.log("Database seeded!");
  process.exit(0);
});
