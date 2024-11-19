// api/index.js
const config = require('./config');

module.exports = async (req, res) => {
  res.status(200).json({
    message: "Welcome to the API Generator",
    entities: config.entities,
  });
};
