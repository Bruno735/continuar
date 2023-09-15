const db = require('./db')

const Post = db.sequelize.define('Produtos', {
    nome:{
        type: db.Sequelize.STRING
    },
    preco:{
        type: db.Sequelize.FLOAT
    },
    descricao:{
        type: db.Sequelize.STRING
    }
});

//Post.sync({force: true})

module.exports = Post