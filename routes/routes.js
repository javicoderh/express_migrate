import express from "express";
import { createRole, deleteRole, getRoles } from "../controllers/role.js";
import { createTeamMember, deleteTeamMember, getTeams, getTeamsById, updateTeamMember } from "../controllers/team.js";
import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controllers/users.js";
import { isUserAuthenticated } from "../middlewares/auth.js";

const Router = express.Router();

Router.get("/roles", isUserAuthenticated, getRoles);
Router.get("/teams", isUserAuthenticated, getTeams);
Router.get("/users", isUserAuthenticated, getUser);
Router.get("/teams/:id", isUserAuthenticated, getTeamsById);
Router.get("/users/:id", isUserAuthenticated, getUserById);
Router.delete("/teams/:id", isUserAuthenticated, deleteTeamMember)
Router.delete("/roles/:id", isUserAuthenticated, deleteRole)
Router.delete("/users/:id", isUserAuthenticated, deleteUser)
Router.put("/teams/:id", isUserAuthenticated, updateTeamMember);
Router.put("/users/:id", isUserAuthenticated, updateUser);
Router.post("/teams", isUserAuthenticated, createTeamMember);
Router.post("/roles", isUserAuthenticated, createRole);
Router.post("/users", isUserAuthenticated, createUser);
export default Router;