const express = require("express");
const colors = require("colors");
const config = require("./config");
const loader = require("./loaders");
const { UserRoutes, PostRoutes } = require("./routes");

config();
loader();

const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`.yellow.bold);
  app.use("/api/v1/users", UserRoutes);
  app.use("/api/v1/posts", PostRoutes);
});
