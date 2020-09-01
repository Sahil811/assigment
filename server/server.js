const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! ⚡ Shutting down...");
  process.exit(1);
});

dotenv.config({ path: `${__dirname}/config.env` });
const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  // .connect(process.env.DATABASE_LOCAL, )
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    //console.log(con.connections);
    console.log("DB connection successful!");
  });

//console.log(process.env)

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLE REJECTION! ⚡ Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("🐱‍🐱‍🏍 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated!");
  });
});
