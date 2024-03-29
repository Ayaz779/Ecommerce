const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { response } = require("express");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    isAdmin: req.body.isAdmin,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

// router.post('/login', async (req, res) => {
//     try{
//         const user = await User.findOne(
//             {
//                 username: req.body.username
//             }
//         );

//         !user && res.status(401).json("Wrong User Name");

//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password,
//             process.env.PASS_SEC
//         );

//         const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//         const inputPassword = req.body.password;

//         originalPassword != inputPassword &&
//             res.status(401).json("Wrong Password");

//         const accessToken = jwt.sign(
//         {
//             id: user._id,
//             isAdmin: user.isAdmin,
//         },
//         process.env.JWT_SEC,
//             {expiresIn:"3d"}
//         );

//         const { password, ...others } = user._doc;
//         res.status(200).json({...others, accessToken});
//     }catch(err){
//        return res.status(500).json(err);
//     }

// });

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });
  if(user!==null){
  const hashedPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.PASS_SEC
  );
  const isAdmin = user.isAdmin;
  const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

  const inputPassword = req.body.password;
  if (user && originalPassword === inputPassword) {
    let accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    res.status(200).json({ accessToken,isAdmin });
  } else {
    res.status(401).json("no user found");
  }}else{
    res.status(401).json("no user found");
  }
});

module.exports = router;
