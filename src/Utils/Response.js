
function response_provider(res, status, message, records) {
    var sucesso = false;
    switch (status) {
        case 200: sucesso = true;
        case 201: sucesso = true;
    }
    return res.status(status).send( { success: sucesso, message: message, records: records } );
}

module.exports = response_provider;