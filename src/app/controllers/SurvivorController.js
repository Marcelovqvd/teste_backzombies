import Survivor from '../models/Survivor';

class SurvivorController {
  async store(req, res) {
    const { name, age, genre, location, infected } = await Survivor.create(
      req.body
    );

    return res.json({
      name,
      age,
      genre,
      location,
      infected,
    });
  }
}

export default new SurvivorController();
