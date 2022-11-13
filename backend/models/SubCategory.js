const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema(
  {
    title: { type: String, trim: true },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
    time: { type: String },
    categoryID: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
