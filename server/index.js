const express = require("express");
const colors = require("colors");

require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require(`./schema/schema`);
const connectDB = require("./config/db");

const port = process.env.PORT || 3004;

const app = express();

// connect to mongodb
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`GraphQl Server is running on port${port}`.yellow.italic.bold.underline));
