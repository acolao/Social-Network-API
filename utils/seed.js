const connection = require("../config/connection");
const { User } = require("../models");

const usernames = [
    "coolguy",
    "butterflykisses",
    "moonlightdreamer",
    "electricjazz",
    "blazingsunset",
    "midnightrider",
    "silverarrow",
    "oceanwavez",
    "pixelninja",
    "thunderstrike89",
];

const emails = [
    "john.doe@example.com",
    "jane_smith123@example.co.uk",
    "test-user_42@example.net",
    "contact_me@example.org",
    "random.email@example.com",
    "support-team@example.io",
    "webmaster@example.dev",
    "hello123@example.xyz",
    "info-sales@example.tech",
    "customer.service@example.store",
];

connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process with a non-zero code to indicate an error
});

connection.once("open", async () => {
    console.log("Connected to MongoDB");
    await User.deleteMany({});

    const users = [];

    // Make sure both arrays have the same number of elements before iterating
    const numberOfUsers = Math.min(usernames.length, emails.length);

    for (let i = 0; i < numberOfUsers; i++) {
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
    process.exit(0); // Exit the process with a zero code to indicate success
});
