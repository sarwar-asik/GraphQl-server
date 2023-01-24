const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log("from db.js");
  console.log(
    `MongoDb Connected : ${conn.connection.host}`.green.bold
  );
  console.log(process.env.MONGO_URI.green.bold);

  //   const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();
  // });
};

module.exports = connectDB;
