const User = require("../model/authModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "kishan sheth super secret key", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    // errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.register = async (req, res, next) => {
  try {
    const {username, email, password ,role,city} = req.body;
    console.log(username, email, password ,role,city)
    const user = await User.create({ username,email,role,city, password });
    // const token = createToken(user._id);

    // res.cookie("jwt", token, {
    //   withCredentials: true,
    //   httpOnly: false,
    //   maxAge: maxAge * 1000,
    // });

    res.status(201).json({ status: true });
  } catch (err) {
    console.log(err);
    // const errors = handleErrors(err);
    res.json({ err,status: false });
  }
};
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email+'  -   '+password)
  try {
    const user = await User.login(email, password);
    if(user){
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, status: true,username:user.name,role:user.role ,plase:user.city,msg:'Login Scussflly'});
    }
    else
    return res.status(400).json({status:false,msg:"Wrong username or password !"})
    
  } catch (err) {
    const errors = handleErrors(err);
    res.stsus(500).json({ errors, status: false ,msg:"something went wrong"});
  }
};
 