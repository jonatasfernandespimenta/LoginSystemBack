const LogModel = require('../Models/LogModel');

module.exports = async function(req, res) {

        const { name, pass } = req.body;

        var User = await LogModel.findOne({ nome: name });

        if (User) {
            if (User.pass === pass) {
                return res.send({ User, type: 'Login' });
            }
            return res.status(400).send({error: 'Senha Errada!'});
        }

        User = await LogModel.create({ nome: name, pass: pass });
        return res.send({ User, type: 'Register' });
    };
