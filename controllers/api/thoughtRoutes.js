const router = require('express').Router();
const { User, Thought } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const allThoughts = await Thought.find();

      res.status(200).json(allThoughts);  
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try{
        const thought = await Thought.findbyId(req.params.thoughtId);

        res.status(200).json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const selectedUser = await User.findOne({ username: req.body.username });
        if (selectedUser) = await Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username,
            userUd: selectedUser._id,
    });

        const usernameThought = await User.findOneAndUpdate(
            {
                username: req.body.username,
            },
            {
                $push: { thoughts: createdThought },
            },
            {
                returnOriginal: false,
            }
        );

        res.status(200).json({ message: "Thought created", createdThought});
    } else res.status(400).json({ message: "Username invalid" });
} catch (err) {
    console.log(err);
    res.status(500).json(err);
});

router.put("/:thoughtId", async (req, res) => {
    const updateThought = await Thought.findbyIdAndUpate(
        req.params.thoughtId,
        {
            thoughtText: req.body.thoughtText,
        },
        {
            returnOriginal: false,
        }
    );
})