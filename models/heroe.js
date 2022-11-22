'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class heroe extends Model {    
    static associate(models) {      
    }
  }
  heroe.init({
    Name: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'heroe',
  });
  return heroe;
};