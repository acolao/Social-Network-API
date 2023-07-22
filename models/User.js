const { Schema, Types, model } = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: string,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: string,
            required: true,
            unique: true,
            match: [/^.+@(?:[\w-]+\.)+\w+$/, "Please provide valid email address"],
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
        friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

usernameSchema.virtual("friendsCount").get(function () {
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;