import Team from "../models/Team.js";

export const getTeams = async (request, response) => {
 try {
  const team = await Team.findAll();
  response.send(team)
 } catch (err) {
  console.log(err);
 }
}

export const getTeamsById = async (request, response) => {
 try {
  const team = await Team.findByPk(request.params.id);
  if (!team) {
   response.status(404).send({message: `No team member found with id ${request.params.id}`
  });
  }
  response.send(team)
 } catch (err) {
  console.log(err);
 }
}

export const createTeamMember = async(request, response) => {
 try {
  await Team.create(request.body);
  response.json({
    "message": "Team member created",
  });
 } catch (err) {
  console.log(err);
 }
}

export const deleteTeamMember = async (request, response) => {
 try {
  const team = await Team.findByPk(request.params.id);
  if (!team) {
   response.status(404).send({message: `No member found with id ${request.params.id}`
  });
  return;
  }
  await team.destroy({
   where: {
    id: request.params.id
   }
  });
  response.json({
   "message": "Team member deleted"
  });
 } catch (err) {
  console.log(err);
 }
}

export const updateTeamMember = async (request, response) => {
 try {
  const team = await Team.findByPk(request.params.id);
  if (!team) {
   response.status(404).send({message: `No member found with id ${request.params.id}`
  });
  return;
  }
  await team.update(request.body, {
   where: {
    id: request.params.id
   }
  });
  response.json({
   "message": "Team member updated"
  });
 } catch (err) {
  console.log(err);
 }
};