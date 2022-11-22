import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";

const { DataTypes} = Sequelize;

const Role = db.define('role', {

id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
},
name: {
type: DataTypes.STRING
},
description: {
type: DataTypes.STRING
}},{
tableName: 'role'
});

 export default Role