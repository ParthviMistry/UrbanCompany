const MainTable = require("../models/MainTable");

const createMainTable = async (req, res) => {
  try {
    const postMainTable = new MainTable(req.body);
    await postMainTable.save();

    return res
      .status(200)
      .send({ message: "MainTable Created successfully!!", postMainTable });
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const getAllMainTable = async (req, res) => {
  try {
    const data = await MainTable.find();

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const getMainTableByID = async (req, res) => {
  try {
    const category = await MainTable.findById(req.params.id);
    return res.status(200).send(category);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const updateMainTable = async (req, res) => {
  try {
    const updatedCategory = await MainTable.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    return res
      .status(200)
      .send({ message: "Category has been Updated", updatedCategory });
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteMainTable = async (req, res) => {
  try {
    const deletedCategory = await MainTable.findByIdAndDelete(req.params.id);

    return res
      .status(200)
      .send({ message: "Category has been Deleted", deletedCategory });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createMainTable,
  getAllMainTable,
  getMainTableByID,
  updateMainTable,
  deleteMainTable,
};
