const express = require("express");
const router = express.Router();

const Slots = require("../../models/slotsModel");

//GET description page
router.post("/", async (req, res) => {
  Slots.find(
    { $and: [{ vendorID: req.body.vendor_id }, { date: req.body.date }] },
    function (err, docs) {
      if (!err) res.json(docs);
    }
  );
});
//INSERT
router.post("/add", async (req, res) => {
  try {
    var dateArray = req.body.date;
    for (var i = 0; i < dateArray.length; i++) {
      let user_data = await new Slots({
        vendorID: req.body.vendorID,
        date: dateArray[i],
        slots: req.body.slots,
      });

      user_data.save();
    }
    return res.status(200).json({});
  } catch (err) {
    res.status(500).json(err.response);
  }
});

//UPDATE
router.put("/update", async (req, res) => {
  var row_id = req.body.id;
  Slots.findByIdAndUpdate(
    row_id,
    { slots: req.body.slots },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).json({});
      }
    }
  );
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    let response = await Category.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ result: "success" });
  } catch (err) {
    res.status(200).json({ result: "error", message: err.messageFormat });
  }
});

//GET Vendor Slots page
router.get("/getAllById/:id", async (req, res) => {
  Slots.find({ vendorID: req.params.id }, function (err, docs) {
    if (!err) res.json(docs);
  });
});

module.exports = router;
