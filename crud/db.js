const sequelize =require('sequelize');
const componentSequelize = new sequelize('dbproduto,root',123456,
{
    dialect:'Mysql', host:'localhost'
});
module.exports =componentSequelize;