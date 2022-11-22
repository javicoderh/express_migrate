import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";
import Role from "./Role.js";

const { DataTypes} = Sequelize;

const Team = db.define('team', {

id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
},
name: {
type: DataTypes.STRING
},
email: {
type: DataTypes.STRING
},
age: {
type: DataTypes.NUMBER
},
createdOn: {
type: DataTypes.DATE,
field: 'created_on',
defaultValue: Sequelize.NOW
},
role_id: {
type: DataTypes.INTEGER,
field: 'role_id',
references: {
 model: Role,
 key: 'id'
}
}},{
tableName: 'team'
});

 export default Team