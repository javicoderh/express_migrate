import Role from "../models/Role.js";

export const getRoles = async (request, response) => {
 try {
  const role = await Role.findAll();
  response.send(role)
 } catch (err) {
  console.log(err);
 }
}

export const createRole = async(request, response) => {
 try {
  await Role.create(request.body);
  response.json({
    "message": "role created",
  });
 } catch (err) {
  console.log(err);
 }
}

export const deleteRole = async (request, response) => {
 try {
  const team = await Role.findByPk(request.params.id);
  if (!Role) {
   response.status(404).send({message: `this role doesn't exist ${request.params.id}`
  });
  return;
  }
  await Role.destroy({
   where: {
    id: request.params.id
   }
  });
  response.json({
   "message": "role deleted"
  });
 } catch (err) {
  console.log(err);
 }
}