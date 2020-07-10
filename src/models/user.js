const mongoose = require('../database');

//TODO - Provavelmente o uso disso aqui não é uma boa prática mas não estou certo. 
//Observe que o nome do arquivo é user js mas aqui você tem coisas envolvendo o mongo,  
//não sei dizer então vale a pesquisa numa documentação, ou busca por padrões e boas práticas.
//No minímo você pode desacoplar esses processos para evitar de reescrever sempre o que tiver sobre o mongo.
//TODO - Interfacear esse objeto
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }, 
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;