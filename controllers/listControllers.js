import * as listModel from "../models/listModel.js";

export const getID = (req, res) => {
  const { username, password } = req.body;
  listModel.getID(username, password, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to get ID" });
    } else {
      res.status(200).json(result);
    }
  });
};

export const getData = (req, res) => {
  const { id } = req.params;
  listModel.fetchAllData(id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

export const insertData = (req, res) => {
  const { name, skills, status, userID } = req.body;
  listModel.insertData(name, skills, status, userID, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to insert data" });
    } else {
      const newItem = {
        id: result.inserId,
        name,
        skills,
        status,
        userID,
      };
      res.status(200).json(newItem);
    }
  });
};

export const updateData = (req, res) => {
  const { id } = req.params;
  const { name, skills, status, userID } = req.body;
  listModel.updateData(id, name, skills, status, userID, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to update data" });
    } else {
      res.status(200).json({ message: "Data updated successfully" });
    }
  });
};

export const deleteData = (req, res) => {
  const { id } = req.params;
  listModel.deleteData(id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to delete data" });
    } else {
      res.status(200).json({ message: "Data deleted successfully" });
    }
  });
};
