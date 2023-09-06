const express = require("express");
const router = express.Router();

router.get("/menu1", (req, res) => {
    res.render("menu1", { });
});

router.get("/menu2", (req, res) => {
    res.render("menu2", { });
});

module.exports = router;
