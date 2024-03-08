const User = require("./../Models/UserModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    res.status(201).json({
        status: "Success",
        data: {
          user: newUser,
        },
    })
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getUser = async(req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            data: {
              user,
            },
          });

    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err,
          });
    }
}