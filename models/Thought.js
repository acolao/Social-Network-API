const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
    {
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    },
    {
    toJSON: {
      virtuals: true,
    },
    id: false,
    }
  );

  const thoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 280,
       },
       createdAt: {
        type: Date,
        default: () => Date.now(),
       },
       username: {
        type: String,
        required: true,
       },
       userId: {
        type: Types.ObjectId,
        ref: "User",
       },
       reactiions: [reactionSchema],
    },
       {
        toJSON: {
            virtuals: true,    
        },
        id: false,
        }
        );

        thoughtSchema.virtual("reactionCount").get(function () {
            return this.reactions.length;
        });

        const Thought = model("Thought", thoughtSchema);

        module.exports = { Thought, thoughtSchema };
