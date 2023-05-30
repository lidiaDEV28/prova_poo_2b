 const sequelize= require('sequelize');
 const database = required('./db');
 const produto =database.define('produto',
 {
id:
{
        type:sequelize.INTEGER,
        autoIncrement :true,
        allowfull : false,
        primaryKey : true
},
    Nome :
    {
        type :sequelize,STRING,
        allowfull : false,
    },
    DataCriacao:
    {
        type :sequelize,DATE,
        allowfull : false,
    }
  },
 )
 module.exports= produto;