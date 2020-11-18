var jwt = require('jsonwebtoken');
var config = require('../../config');
var response_provider = require('../Utils/Response');
var User = require('../User/User');
var Token = require('../Token/Token');

function verificaToken(req, res, next) {

    var tokenReq = req.headers.authorization;
    
    if (!tokenReq) return response_provider(res, 401, 'Token não informado.', null );

    if (tokenReq.startsWith('Bearer ')) {
        tokenReq = tokenReq.slice(7, tokenReq.length);
    }    

    jwt.verify(tokenReq, config.secret, function (err, decoded) {

        if (err) return response_provider(res, 500, 'Token inválido.', null ); 

        User.findById(decoded.id, { password: 0 }, function (err, userDB) {

            if (err) return response_provider(res, 500, 'Erro ao tentar ler usuário.', err ); 

            if (!userDB) return response_provider(res, 404, 'Usuário não encontrado.', null );

            Token.findOne({ token: tokenReq }, function (err, tokenDB) {

                if (err) return response_provider(res, 500, 'Erro ao tentar ler token.', err );

                if (!tokenDB) return response_provider(res, 404, 'Token não encontrado.', null );

                if (tokenDB.user.toString() !== userDB._id.toString() ) return response_provider(res, 404, 'Este token não pertence a esse usuário.', null );

                req.userId = decoded.id;
                req.userToken = tokenReq;

                next();

            })

        });

    });
    
}

module.exports = verificaToken;