import Survivor from '../models/Survivor';

class SurvivorController {
  async store(req, res) {
    const survivorExists = await Survivor.findOne({
      where: { email: req.body.email }
    });

    if (survivorExists) {
      return res.status(400).json({ error: 'Survivor já existe' });
    }

    const {
      name,
      email,
      age,
      genre,
      location,
      infected,
    } = await Survivor.create(req.body);

    return res.json({
      name,
      email,
      age,
      genre,
      location,
      infected,
    });
  }
}

export default new SurvivorController();
