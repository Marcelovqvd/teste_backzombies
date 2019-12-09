import Inventory from '../models/Inventory';
import Survivor from '../models/Survivor';

class InventoryController {
  async store(req, res) {
    const survivorExists = await Survivor.findOne({
      where: { email: req.body.email },
    });

    if (!survivorExists) {
      return res.status(400).json({ error: 'Survivor errado' });
    }

    const { item } = await Inventory.create(req.body);

    return res.json({ item });
  }

  async update(req, res) {
    const survivorExists = await Survivor.findOne({
      where: { email: req.body.email },
    });

    if (!survivorExists) {
      return res.status(400).json({ error: 'Survivor errado' });
    }
    const { item } = await Inventory.create(req.body);

    return res.json({ item });
  }
}
export default new InventoryController();
