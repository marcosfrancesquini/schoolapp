const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const bookSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        author: {
            type: String
        },
        year: {
            type: Number
        },
        bookImg: {
            type: String
        },
        price: {
            type: Number
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const Book = model("book", bookSchema);

module.exports = Book;