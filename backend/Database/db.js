require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://user-1:shahul123@cluster0.t1nv8.mongodb.net/college_management";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;
