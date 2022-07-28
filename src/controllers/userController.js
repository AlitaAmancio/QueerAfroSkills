const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  userSchema.find(function (err, users) {
    if(err) {
      return res.status(500).send({
        message: err.message
      })
    }
    return res.status(200).json(users)
  })
};

const findById = async (request, response) =>  {
  try {
      const findUser = await userSchema.findById(request.params.id)
      response.status(200).json(findUser)
  } catch (error) {
      response.status(500).json({ message: error.message })
  }
};

const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  const emailExists = await userSchema.exists({ email: req.body.email });  

  if(emailExists) {
    res.status(401).send({
      "message": "Email já cadastrado."
    })
  }

  try {
    const newUser = new userSchema(req.body);

    const savedUser = await newUser.save();

    return res.status(201).send({
      "message": "User criado com sucesso!",
      savedUser
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    });
  };
};

const updateUserById = async (req, res) => {
  try {
    const findUser = await userSchema.findById(req.params.id)

    if(findUser) {
      findUser.name = req.body.name || findUser.name
      findUser.email = req.body.email || findUser.email
      findUser.password = req.body.password || findUser.password
      findUser.phoneNumber = req.body.phoneNumber || findUser.phoneNumber
    }

    const savedUser = await findUser.save()

    return res.status(200).send({
      message: "User atualizado com sucesso!",
      savedUser
    })

  } catch (error) {
    console.error(error)
  };
};

const deleteUserById = async (req, res) => {
  try {
    const userFound = await userSchema.findById(req.params.id)

    await userFound.delete()

    return res.status(200).send({
      "mensagem": `User '${userFound.email}' deletado com sucesso!`,
      userFound
    })

  } catch (err) {
    return res.status(400).send({
      "mensagem": err.message
    });
  };
};

module.exports = {
  getAll,
  findById,
  createUser,
  updateUserById,
  deleteUserById
};
