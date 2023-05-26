const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://rraamqud:57oHYsWoU7g6rcz7g2t4BSVqUsRCVx8j@silly.db.elephantsql.com/rraamqud",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o Mysql!');
  } catch (error) {
    console.error('Anteção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize}