const express = require("express");
const categoryController = require("../controller/category/category");
const subCategoryController = require("../controller/category/subCategory");
const MainTitleController = require("../controller/mainTitle");
const authController = require("../controller/authentication");
const auth = require("../middleware/Auth");
const upload = require("../utils/multer");

const Router = express.Router();
Router.use(express.json());

//Authentication
Router.post("/api/login", authController.userLogin);
Router.post("/api/signup", authController.userSignUp);
Router.put("/api/updateUser/:id", authController.updateUser);
Router.delete("/api/deleteUser/:id", authController.deleteUser);

//MainTitle
Router.post("/api/mainTitle", MainTitleController.createMainTitle);
Router.get("/api/mainTitle", MainTitleController.getAllMainTitle);
Router.put("/api/mainTitle", MainTitleController.updateMainTitle);
Router.delete("/api/mainTitle", MainTitleController.deleteMainTitle);

//Category
Router.post("/api/category",upload.single("image"), categoryController.createCategory);
Router.get("/api/getAllCategory", categoryController.getAllCategory);
Router.get("/api/getCategoryByID/:id", categoryController.getCategoryByID);
Router.put("/api/updateCategory/:id", categoryController.updatecategory);
Router.delete("/api/deleteCategory/:id", categoryController.deletecategory);

//SubCategory
Router.post("/api/subCategory", subCategoryController.createSubCategory);
Router.get("/api/getAllSubCategory", subCategoryController.getAllSubCategory);
Router.get(
  "/api/getSubCategoryById/:id",
  subCategoryController.getSubCategoryByID
);
Router.put(
  "/api/updateSubCategory/:id",
  subCategoryController.updateSubCategory
);
Router.delete(
  "/api/deleteSubCategory/:id",
  subCategoryController.deleteSubCategory
);

Router.get(
  "/api/getCategoriesByMainTitleID/:id",
  categoryController.getCategoriesByMainTitleID
);
Router.get(
  "/api/getSubCategoriesByCategoryID/:id",
  subCategoryController.getSubCategoriesByCategoryID
);

module.exports = Router;
