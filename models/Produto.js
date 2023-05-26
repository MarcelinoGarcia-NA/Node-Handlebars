const db = require('../config/connection');

const Produto = db.sequelize.define('produtos',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: db.Sequelize.REAL,
        allowNull: false
    },
    vitrine:{
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    foto:{   
        type: db.Sequelize.STRING,
        allowNull: false
        }
    })
Produto.sync();
module.exports = Produto;



