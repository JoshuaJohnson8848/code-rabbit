
let items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1', price: 10, category: 'Category A' },
  { id: 2, name: 'Item 2', description: 'Description for item 2', price: 20, category: 'Category B' },
  { id: 3, name: 'Item 3', description: 'Description for item 3', price: 30, category: 'Category A' },
  { id: 4, name: 'Item 4', description: 'Description for item 4', price: 40, category: 'Category B' },
  { id: 5, name: 'Item 5', description: 'Description for item 5', price: 50, category: 'Category A' }
];

const getItems = (req, res) => {
  res.json(items);
};

const getItemById = (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
};

const createItem = (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.json(item);
};

const deleteItem = (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
