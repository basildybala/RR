const mongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const state = {
  db: null,
};
module.exports.connect = (done) => {
  const url = 'mongodb://localhost:27017'
  const dbname = 'movieshub'

  mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
    done();
  });
};

module.exports.get = () => {
  return state.db;
};