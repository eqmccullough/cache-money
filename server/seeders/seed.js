const db = require("../config/connection");
const { Profile, Category, Item } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const categorySeeds = require("./categorySeeds.json");
const itemSeeds = require("./itemSeeds.json");


db.once('open', async () => {
    await Profile.deleteMany({});
    await Categories.deleteMany({});
    await Item.deleteMany({});

    const categories = await Category.insertManu(categorySeeds);
    const profiles = await Profile.insertMany(profileSeeds);
    const items = await Item.insertMany(itemSeeds);

    console.log('Database seeded!');
    process.exit(0);
});
