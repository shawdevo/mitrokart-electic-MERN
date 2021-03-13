import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@g.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "shubh s",
    email: "a@g.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "tan singh",
    email: "b@g.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
