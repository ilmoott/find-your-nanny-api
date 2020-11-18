var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');
var response_provider = require('../Utils/Response');
var User = require('../User/User');
var Token = require('../Token/Token');

exports.register = async function (req, res) {
    
    if (!req.body.email){
        return response_provider(res, 500, "Por favor, informe o e-mail.", null);
    }
    
    if (!req.body.password){
        return response_provider(res, 500, "Por favor, informe a senha.", null);
    }

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    var user = new User({ ...req.body, password: hashedPassword });

    User.findOne({ email: user.email }, function (err, userDB) {
        if (err) return response_provider(res, 500, "Erro ao tentar ler usuário.", err);
        if (userDB) return response_provider(res, 500, "Usuário já se encontra cadastrado.", null);

        user.save((err, data) => {
            if (err) return response_provider(res, 500, "Erro ao criar usuário.", err);
            return response_provider(res, 200, "Usuário cadastrado com sucesso.", { ...data._doc, password: null });
        });
    });
};

exports.login = function (req, res) {

    var user = new User({ email: req.body.email, password: req.body.password });

    User.findOne({ email: user.email }, function (err, userDB) {
        if (err) return response_provider(res, 500, "Erro ao tentar ler usuário.", null);
        if (!userDB) return response_provider(res, 404, "Usuário não encontrado.", null);

        var passwordIsValid = bcrypt.compareSync(user.password, userDB.password);

        if (!passwordIsValid) return response_provider(res, 401, "Senha inválida.", null);

        var token = jwt.sign({ id: userDB._id }, config.secret, { expiresIn: 86400 });

        var tkn = new Token({ token: token, user: userDB._id });

        tkn.save(function (err) {
            if (err) return response_provider(res, 500, "Erro ao tentar salvar token.", null);
            return response_provider(res, 200, "Logado com sucesso.", { ...userDB._doc, password: null, token: token });
        });

    });

};

exports.logout = function (req, res) {

    Token.deleteOne({ token: req.userToken }, function (err) {

        if (err) return response_provider(res, 500, "Erro ao tentar deslogar", err);

        return response_provider(res, 200, "Logout com sucesso.", null);

    });

};