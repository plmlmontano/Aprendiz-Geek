const { Router } = require("express");
const router = Router();
const fs = require("fs");
const contactsFile = fs.readFileSync('./contacts.json', 'utf-8')
let contacts = JSON.parse(contactsFile) 

router.get("/", (req, res) => {
  res.status(200).json("API REST Movies");
});

router.get("/contacts", (req, res) => {
    res.status(200).json(contacts);
  });

module.exports = router;