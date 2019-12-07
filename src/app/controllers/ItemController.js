import Item from '../models/Items';

class ItemController {
  async store(req, res) {
    const { name, value } = await Item.create(req.body);

    return res.json({
      name,
      value,
    });
  }
}

export default new ItemController();
