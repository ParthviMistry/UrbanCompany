const SubCategory = require("../../models/SubCategory");

const createSubCategory = async (req, res) => {
    try {
        const { title, categoryID, description, image } = req.body;

        if (!title || !categoryID || !description) {
            throw new Error("Please enter all value");
        }

        const postSubCategory = new SubCategory(req.body);
        await postSubCategory.save();

        return res.status(200).send({ message: "SubCategory Created successfully!!", postSubCategory });
    } catch (error) {
        return res.status(400).send(error.toString());
    }
};

const getAllSubCategory = async (req, res) => {
    try {
        const data = await SubCategory.find();

        return res.status(200).send(data);
    } catch (error) {
        return res.status(400).send(error.toString());
    }
}

const getSubCategoryByID = async (req, res) => {
    try {
        const category = await SubCategory.findById(req.params.id);

        return res.status(200).send(data);
    } catch (error) {
        return res.status(400).send(error.toString());
    }
}

const getSubCategoriesByCategoryID = async (req, res) => {
    try {
        const category = await SubCategory.find({ categoryID: req.params.id });

        return res.status(200).send(category);
    } catch (error) {
        return res.status(400).send(error.toString());
    }
}

const updateSubCategory = async (req, res) => {
    try {
        const updatedSubCategory = await SubCategory.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        return res.status(200).send({ message: "SubCategory has been Updated", updatedSubCategory });
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteSubCategory = async (req, res) => {
    try {
        const deletedSubCategory = await SubCategory.findByIdAndDelete(req.params.id);

        return res.status(200).send({ message: "SubCategory has been Deleted", deletedSubCategory });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    createSubCategory,
    getAllSubCategory,
    getSubCategoryByID,
    updateSubCategory,
    deleteSubCategory,
    getSubCategoriesByCategoryID,
};