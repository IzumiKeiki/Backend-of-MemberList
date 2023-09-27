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
  const query = "INSERT INTO list (name, skills, status, userID) VALUES (?, ?, ?, ?)";
  db.query(query, [name, skills, status, userID], callback);
};

export const updateData = (id, name, skills, status, userID, callback) => {
  const query = "UPDATE list SET name = ?, skills = ?, status = ? WHERE id = ?";
  db.query(query, [name, skills, status, id, userID], callback);
};

export const deleteData = (id, callback) => {
  const query = "DELETE FROM list WHERE id = ?";
  db.query(query, [id], callback);
};
