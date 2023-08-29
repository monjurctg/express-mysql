const express = require("express");
const app = express();
require("dotenv").config();

const postsRouter = require("./routes/post.router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/posts", postsRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running ....");
});
