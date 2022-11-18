const mongoose = require("mongoose");

const MainTableSchema = mongoose.Schema(
  {
    title: { type: String, trim: true }, // Home Services // Application
    image: { type: String },
    //category // Home Services > home painting , home cleaning
    category: [
      {
        title: { type: String },
        description: { type: String },
        image: { type: String },
        //subCategory // bathroom , kitchen cleaning
        subCategory: [
          {
            title: { type: String },
            description: { type: String },
            image: { type: String },
            time: { type: String },
            price: { type: Number },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const MainTable = mongoose.model("MainTable", MainTableSchema);

module.exports = MainTable;
