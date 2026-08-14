const mysql = require("mysql2");



db.connect((err) => {
  if (err) {
    console.log("❌ DB connection failed");
    console.log("error code:",err.code);
    console.log("error message:",err.message);
    return;
  } 
    console.log("✅ MySQL Connected");
  
});

module.exports = db;