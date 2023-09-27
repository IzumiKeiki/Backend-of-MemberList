import db from "../config/database.js";

export const fetchAllData = (callback) => {
  const query = "SELECT * FROM list";
  db.query(query, callback);
};

export const insertData = (name, skills, status, callback) => {
  const query = "INSERT INTO list (name, skills, status) VALUES (?, ?, ?)";
  db.query(query, [name, skills, status], callback);
};

export const updateData = (id, name, skills, status, callback) => {
  const query = "UPDATE list SET name = ?, skills = ?, status = ? WHERE id = ?";
  db.query(query, [name, skills, status, id], callback);
};

export const deleteData = (id, callback) => {
  const query = "DELETE FROM list WHERE id = ?";
  db.query(query, [id], callback);
};
