const model = require("../models/models");

// post categories
exports.create_Categories = (req, res) => {
  model.Categories.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the categories.",
      });
    } else {
      res.json(data);
    }
  });
};

// get categories

exports.get_categories = async (req, res) => {
  const categories = await model.Categories.find({});
  const objects = categories.map((cat) =>
    Object.assign({}, { type: cat.type, color: cat.color })
  );
  res.json(objects);
};

// post transactions
exports.create_Transaction = (req, res) => {
  if (req.body.name === "" || req.body.name === null) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the categories.",
    });
  } else {
    model.Transaction.create(req.body, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the categories.",
        });
      } else {
        res.json(data);
      }
    });
  }
};

// get categories

exports.get_transaction = async (req, res) => {
  let data = await model.Transaction.find({});
  return res.json(data);
};
// delete transaction
exports.delete_transaction = async (req, res) => {
  if (!req.body) res.status(400).json({ message: "Request body not Found" });
  await model.Transaction.deleteOne(req.body, function (err) {
    if (!err) res.json("Record Deleted...!");
  })
    .clone()
    .catch(function (err) {
      res.json("Error while deleting Transaction Record");
    });
};

exports.get_labels = async (req, res) => {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: "$categories_info",
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info["color"],
          }
        )
      );
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json("Looup Collection Error");
    });
};
