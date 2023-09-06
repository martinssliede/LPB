const express = require("express");
const app = express();
const port = 3000;

const menuController = require("./MenuController");
app.use("/", menuController);

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", {});
});


app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});