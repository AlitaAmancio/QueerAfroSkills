const companySchema = require("../models/companySchema");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  companySchema.find(function (err, users) {
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
      const findCompany = await companySchema.findById(request.params.id)
      response.status(200).json(findCompany)
  } catch (error) {
      response.status(500).json({ message: error.message })
  }
};

const createCompany = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  const emailExists = await companySchema.exists({ email: req.body.email });  

  if(emailExists) {
    res.status(401).send({
      "message": "Email já cadastrado."
    })
  }

  try {
    const newCompany = new companySchema(req.body);

    const savedCompany = await newCompany.save();

    return res.status(201).send({
      "message": "Company User criado com sucesso!",
      savedCompany
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    });
  };
};

const updateCompanyById = async (req, res) => {
  try {
    const findCompany = await companySchema.findById(req.params.id)

    if (findCompany) {
      findCompany.name = req.body.name || findCompany.name
      findCompany.email = req.body.email || findCompany.email
      findCompany.password = req.body.password || findCompany.password
      findCompany.phoneNumber = req.body.phoneNumber || findCompany.phoneNumber
      findCompany.description = req.body.description || findCompany.description
    }

    const savedCompany = await findCompany.save()

    return res.status(200).send({
      message: "Company User atualizado com sucesso!",
      savedCompany
    })

  } catch (error) {
    console.error(error)
  };
};

const deleteCompanyById = async (req, res) => {
  try {
    const companyFound = await companySchema.findById(req.params.id)

    await companyFound.delete()

    return res.status(200).send({
      "mensagem": `Company User '${companyFound.email}' deletada com sucesso!`,
      companyFound
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
  createCompany,
  updateCompanyById,
  deleteCompanyById
};
