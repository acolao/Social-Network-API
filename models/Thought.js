const { Schema, Types, model } = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId(),
    },
    reactionBody: {
        type: string,
        required: true,
        maxLength: 280,
    },
    username: {
        type: string,
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

  const thoughSchema = new Schema(
    {
       thoughtText: {
        type: string,
        required: true,
        minlength: 1,
        maxLength: 280,
       },
       createdAt: {
        type: Date,
        default: () => Date.now(),
       },
       username: {
        type: string,
        required: true,
       },
       userId: {
        type: Types.ObjectId,
        ref: "User",
       },
       reactiions: [reactionSchema],
    },
  );
       {
        toJSON: {
            virtuals: true,    
        },
        id: false,
        }
        thoughtSchema.virtuals("reactionCount").get(function () {
            return this.reactions.length;
        });

        const Thought = model("Thought", thoughtSchema);

        module.exports = { Thought, thoughtSchema };
