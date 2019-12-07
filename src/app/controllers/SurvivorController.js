import Survivor from '../models/Survivor';

class SurvivorController {
  async store(req, res) {
    const { name, age, genre, location } = await Survivor.create(req.body);

    return res.json({
      name,
      age,
      genre,
      location,
    });
  }
}

export default new SurvivorController();
