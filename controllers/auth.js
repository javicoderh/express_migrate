import  jwt   from "jsonwebtoken";
import User from "../models/users.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
 try {
  const user = await User.create({
   name: req.body.name,
   email: req.body.email,
   password: bcrypt.hashSync(req.body.password, 8)
  })
  res.status(201).json({
   "message": "User created",
   "userid": user.id
  });
 } catch(err) {
  console.log(err);
 }
};

export const login = async (req, res) => {
 try {
  const user = await User.findOne({
   where: {
    email: req.body.email
   }
  })
 

 if (!user) {
  return res.status(404).send({
   message: `no user found with email ${req.body.email}`
  });
 }

 const passwordIsValid = bcrypt.compareSync(
  req.body.password,
  user.password
  );

 if (!passwordIsValid) {
  return res.status(401)
  .send({
   message: "invalid password"
  });
 }

 const token = jwt.sign({
  id: user.id,
  name: user.name,
 }, 'secret-key', {
  expiresIn: 86400
 });

 res.status(200)
.send({
 user: {
  id: user.id,
  email: user.email,
  name: user.name
 },
 message: "login successfull",
 accesToken: token,
});
} catch(err) {
 console.log(err);
}
}