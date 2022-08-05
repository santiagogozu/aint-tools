console.clear();

require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const port = process.env.PORT || 9000;

const authRoutes = require("./routes/authorization");

//middleware
app.use(express.json());
app.use(
  session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static(path.resolve(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

//routes
app.use("/", authRoutes);
app.use("/api", userRoutes);
app.use((req, res, next) => {
  res.status(404).render("notFound");
});

//MongoDb connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDb Atlas"))
  .catch((error) => console.error(error));
app.listen(port, () => console.log("Server Listening on port", port, "🔥🔥🔥"));
