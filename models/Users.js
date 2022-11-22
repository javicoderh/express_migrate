import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";

const { DataTypes} = Sequelize;

const User = db.define('user', {

id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
},
name: {
type: DataTypes.STRING
},
password: {
type: DataTypes.STRING
},
createdOn: {
type: DataTypes.DATE,
field: 'created_on',
defaultValue: Sequelize.NOW
},
email: {
  type: DataTypes.STRING
  },
},{
tableName: 'users'
});

export default User