const LogModel = require('../Models/LogModel');

module.exports = async function(req, res) {
  const { _id, nome } = req.headers;
  await LogModel.findByIdAndRemove({ _id });

  return res.send({ ok: true });
};
  
