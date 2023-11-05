const express = require("express");
const { Skins, PurchasedSkins } = require("../models/skin");

const router = express.Router();

// router.post("/skins", (req, res) => {
//   const skin = Skins(req.body);
//   skin
//     .save()
//     .then((data) => res.json(data))
//     .catch((e) => res.json({ message: e }));
// });

// get all skins
router.get("/skins/available", (req, res) => {
  Skins.find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

// buy one skin if it's available
router.post("/skins/buy", (req, res) => {
  const { _id } = req.body;

  Skins.findOne({ _id })
    .select("_id")
    .lean()
    .then((result) => {
      // if skin exists in the list of available skins it gets copied into the myskins collection
      if (result) {
        const purchasedSkin = PurchasedSkins(req.body);
        purchasedSkin
          .save()
          .then((data) => res.json(data))
          .catch((e) => res.json({ message: e }));
      } else {
        res.status(400).json({ message: "Skin not available" });
      }
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

// get user's purchased skins
router.get("/skins/myskins", (req, res) => {
  PurchasedSkins.find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

// update color of selected purchased skin
router.put("/skins/color/:id", (req, res) => {
  const { id } = req.params;
  const { color } = req.body;
  PurchasedSkins.updateOne(
    { _id: id },
    { $set: { color } },
    { runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

// delete a purchased skin
router.delete("/skins/delete/:id", (req, res) => {
  const { id } = req.params;
  PurchasedSkins.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

// get one skin from the list of available skins
router.get("/skins/:id", (req, res) => {
  const { id } = req.params;
  Skins.findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

module.exports = router;
