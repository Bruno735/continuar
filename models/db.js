const Sequelize = require("sequelize")
const sequelize = new Sequelize('system_products', 'aluno_medio', '@lunoSenai23.', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso')
}).catch((error)=>{
    console.log('Erro ao se conectar:' + error)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}