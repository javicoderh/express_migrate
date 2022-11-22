import Users from "../models/users.js";

export const getUser = async (request, response) => {
 try {
  const user = await Users.findAll();
  response.send(user)
 } catch (err) {
  console.log(err);
 }
}

export const getUserById = async (request, response) => {
 try {
  const user = await Users.findByPk(request.params.id);
  if (!Users) {
   response.status(404).send({message: `No user found with id ${request.params.id}`
  });
  }
  response.send(user)
 } catch (err) {
  console.log(err);
 }
}

export const createUser = async(request, response) => {
 try {
  await Users.create(request.body);
  response.json({
    "message": "User created",
  });
 } catch (err) {
  console.log(err);
 }
}

export const deleteUser = async (request, response) => {
 try {
  const user = await Users.findByPk(request.params.id);
  if (!team) {
   response.status(404).send({message: `No user found with id ${request.params.id}`
  });
  return;
  }
  await user.destroy({
   where: {
    id: request.params.id
   }
  });
  response.json({
   "message": "User deleted"
  });
 } catch (err) {
  console.log(err);
 }
}

export const updateUser = async (request, response) => {
 try {
  const user = await Users.findByPk(request.params.id);
  if (!user) {
   response.status(404).send({message: `No user found with id ${request.params.id}`
  });
  return;
  }
  await user.update(request.body, {
   where: {
    id: request.params.id
   }
  });
  response.json({
   "message": "User updated"
  });
 } catch (err) {
  console.log(err);
 }
}

