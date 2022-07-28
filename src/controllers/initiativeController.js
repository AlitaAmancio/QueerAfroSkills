const initiativeSchema = require("../models/initiativeSchema");

const findAllInitiatives = async(request, response) => {
  // retornar todos 
  // e/ou retorna por artista
  // e/ou retornar por titulo
  const { title, description,  } = request.query
  
  let query = {}
  
  // music.aritsta.toLowerCase().includes(artist.toLowercase()) -> ignore case
  if (title) query.title = new RegExp(title, 'i')

  if (description) query.description = new RegExp(description, 'i')

  try {
      const allInitiatives = await initiativeSchema.find(query)
      response.status(200).json(allInitiatives)
  } catch (error) {
      response.status(500).json({ message: error.message })
  }
}

const findById = async (request, response) =>  {
  try {
      const findInitiative = await initiativeSchema.findById(request.params.id)
      response.status(200).json(findInitiative)
  } catch (error) {
      response.status(500).json({ message: error.message })
  }
}

const createInitiative = async (req, res) => {
  try {
    const newInitiative = new initiativeSchema(req.body);

    const savedInitiative = await newInitiative.save();

    res.status(201).send({
      "message": "Iniciativa criada com sucesso.",
      savedInitiative
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
}

const updateInitiativeById = async (req, res) => {
  try {
    const findInitiative = await initiativeSchema.findById(req.params.id)
    console.log("INICIATIA ENCONTRADA", findInitiative);

    if(!findInitiative){
      res.status(404).send({
        "message": "Iniciativa não encontrada.",
        "statusCode": 404
      })
    }
    findInitiative.title = req.body.title || findInitiative.title
    findInitiative.description = req.body.description || findInitiative.description
    findInitiative.modality = req.body.modality || findInitiative.modality
    findInitiative.duration = req.body.duration || findInitiative.duration
    findInitiative.requirements = req.body.requirements || findInitiative.requirements
    findInitiative.additionalInfo = req.body.additionalInfo || findInitiative.additionalInfo
    findInitiative.contactInfo = req.body.contactInfo || findInitiative.contactInfo

    const savedInitiative = await findInitiative.save()

    res.status(200).send({
      "message": "Nota atualizada com sucesso.",
      savedInitiative
    })
  } catch(err) {
    console.error(err)
  }
}

const deleteInitiative = async (req, res) => {
  try {
    const deletedInitiative = await initiativeSchema.findByIdAndDelete(req.params.id)

    res.status(200).send({
      "message": "Iniciativa deletada com sucesso.",
      deletedInitiative
    })
  } catch(err) {
    console.error(err)
  };
};

module.exports = {
  findAllInitiatives,
  findById,
  createInitiative,
  updateInitiativeById,
  deleteInitiative
};
