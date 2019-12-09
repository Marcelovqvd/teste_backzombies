import Item from '../models/Items';
import Survivor from '../models/Survivor';

class ItemController {
  async store(req, res) {
    const survivor = await Survivor.findOne({
      where: { email: req.body.email },
    });

    if (!survivor) {
      return res.status(400).json({ error: 'Survivor errado' });
    }

    const { name, value } = await Item.create(req.body);

    return res.json({ name, value });
  }

  async update(req, res) {
    const survivor = await Survivor.findOne({
      where: { email: req.body.email },
    });

    if (!survivor) {
      return res.status(400).json({ error: 'Survivor errado' });
    }

    const { name, value } = await Item.create(req.body);

    return res.json({ name, value });
  }
}
export default new ItemController();
