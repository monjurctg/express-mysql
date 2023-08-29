const Pool = require("../db/index");

const postControler = {};

postControler.getAll = async (req, res) => {
  try {
    const [rows, fields] = await Pool.query("select * from posts");
    res.send(rows);
  } catch (err) {}
};

module.exports = postControler;
