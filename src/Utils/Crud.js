var response_provider = require('../Utils/Response');

module.exports = {

    findAll(res, Schema, query, callback) {
        
        var pop = '';

        if (query.populate) {
            pop = query.populate;
            delete query.populate;
        }

        Schema.find(query).populate(pop).exec(function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao listar " + Schema.modelName + ".", err);

            if (!callback) return response_provider(res, 200, "Listado " + Schema.modelName + " com sucesso.", resultDB);

            callback({...resultDB, password:null});
        });

    },

    findById(res, Schema, query, id, callback) {

        var pop = '';

        if (query.populate) {
            pop = query.populate;
        }

        Schema.findById(id).populate(pop).exec(function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao listar por " + Schema.modelName + " Id.", err);

            if (!callback) return response_provider(res, 200, "Listado " + Schema.modelName + "(id) com sucesso.", resultDB);

            callback({...resultDB, password:null});

        });

    },

    insert(res, Schema, body, callback) {

        var obj = new Schema({
            ...body
        });

        Schema.findOne({ ...body}, function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao verificar " + Schema.modelName + ".", err);

            if (resultDB) return response_provider(res, 500, Schema.modelName + " já cadastrada.", null);

            obj.save(function (err, resultDB) {

                if (err) return response_provider(res, 500, "Erro ao salvar " + Schema.modelName + ".", err);

                if (!callback) return response_provider(res, 200, Schema.modelName + " salva com sucesso.", resultDB);

                callback({...resultDB, password:null});

            });

        });

    },

    update( res, Schema, id, body, callback ){

        Schema.findByIdAndUpdate(id, { ...body }, function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao verificar " + Schema.modelName + ".", err);

            if (!callback) return response_provider(res, 200, Schema.modelName + " alterado com sucesso.", resultDB);

            callback({...resultDB, password:null});

        }); 
    },

    delete( res, Schema, id, callback ){

        Schema.findByIdAndRemove(id, function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao verificar " + Schema.modelName + ".", err);

            if (!callback) return response_provider(res, 200, Schema.modelName + " deletado com sucesso.", resultDB);

            callback({...resultDB, password:null});

        }); 
    },

    insertItem( res, Schema, id, lista, obj, callback ){

        Schema.findById(id, function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao listar por " + Schema.modelName + " Id.", err);

            resultDB[lista].push(obj);

            resultDB.markModified(lista);

            resultDB.save((err, result)=>{

                if (err) return response_provider(res, 500, "Erro ao adicionar item na lista " + Schema.modelName + " Id.", err);

                if (!callback) return response_provider(res, 200, "Adicionado item de " + lista + " com sucesso.", result);

                callback({...resultDB, password:null});

            })

        });

    },

    updateItem( res, Schema, id, idLista, lista, obj, callback ){

        Schema.findById(id, function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao listar por " + Schema.modelName + " Id.", err);

            var found = resultDB[lista];
            var index = found.findIndex((obj => obj._id.toString() == idLista.toString() ));

            found[index] = {...found[index], ...obj};
            
            resultDB[lista] = found;

            resultDB.markModified(lista);

            resultDB.save((err, result)=>{

                if (err) return response_provider(res, 500, "Erro ao adicionar item na lista " + Schema.modelName + " Id.", err);

                if (!callback) return response_provider(res, 200, "Editado item de " + lista + " com sucesso.", result);

                callback(resultDB);

            })

        });

    },

    deleteItem( res, Schema, id, idLista, lista, callback ){

        Schema.findById(id, function (err, resultDB) {

            if (err) return response_provider(res, 500, "Erro ao listar por " + Schema.modelName + " Id.", err);

            resultDB[lista].splice( resultDB[lista].findIndex( (item) => item._id.toString() === idLista.toString() ),1);

            resultDB.save((err, result)=>{

                if (err) return response_provider(res, 500, "Erro ao adicionar item na lista " + Schema.modelName + " Id.", err);

                if (!callback) return response_provider(res, 200, "Deletado item de " + lista + " com sucesso.", result);

                callback(resultDB);

            })

        });

    }



}