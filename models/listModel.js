import db from "../config/database.js";

export const getID = (username, password, callback) => {
  const query = "SELECT id, username FROM user WHERE username = ? AND password = ?";
  db.query(query, [username, password], callback);
};

export const fetchAllData = (id, callback) => {
  const query = "SELECT * FROM list WHERE userID = ?";
  db.query(query, [id], callback);
};

export const insertData = (name, skills, status, userID, callback) => {
  const query = "SELECT insert_data(?, ?, ?, ?) as insertId";
  db.query(query, [name, skills, status, userID], callback);
};

export const updateData = (id, name, skills, status, userID, callback) => {
  const query = "CALL update_data(?, ?, ?, ?)";
  db.query(query, [name, skills, status, id, userID], callback);
};

export const deleteData = (id, callback) => {
  const query = "DELETE FROM list WHERE id = ?";
  db.query(query, [id], callback);
};
