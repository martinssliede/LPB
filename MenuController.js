const express = require("express");
const router = express.Router();

router.get("/menu1", (req, res) => {
    const message = "This menu1 is rendered on the server side!";
    res.render("menu1", { message });
});

router.get("/menu2", (req, res) => {
    const message = "This menu2 is rendered on the server side!";
    res.render("menu2", { message });
});

module.exports = router;
