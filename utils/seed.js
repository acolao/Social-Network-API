const connection = require("../config/connection");
const { User } = require("../models");

//fake data array
const usernames = [
    “cool_guy123”,
    “butterfly_kisses”,
    “moonlight_dreamer”,
    “electric_jazz”,
    “blazing_sunset”,
    “midnight_rider”,
    “silver_arrow”,
    “ocean_wavez”,
    “pixel_ninja”,
    “thunderstrike89”,
];

emails = [
    “john.doe@example.com”,
    “jane_smith123@example.co.uk”,
    “test-user_42@example.net”,
    “contact_me@example.org”,
    “random.email@example.com”,
    “support-team@example.io”,
    “webmaster@example.dev”,
    “hello123@example.xyz”,
    “info-sales@example.tech”,
    “customer.service@example.store”,
];

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});

  const users = [];

  for (i = 0; i < 19; i++) {
    const username = usernames[i];
    const email = emails[i];

    users.push({
      username,
      email,
      thoughts: [],
      friends: [],
    });
  }

  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete");
  process.exit(0);
});