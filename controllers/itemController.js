
let items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1', price: 10, category: 'Category A' },
  { id: 2, name: 'Item 2', description: 'Description for item 2', price: 20, category: 'Category B' },
  { id: 3, name: 'Item 3', description: 'Description for item 3', price: 30, category: 'Category A' },
  { id: 4, name: 'Item 4', description: 'Description for item 4', price: 40, category: 'Category B' },
  { id: 5, name: 'Item 5', description: 'Description for item 5', price: 50, category: 'Category A' },
  { id: 6, name: 'Item 6', description: 'Description for item 6', price: 60, category: 'Category C' },
  { id: 7, name: 'Item 7', description: 'Description for item 7', price: 70, category: 'Category D' },
  { id: 8, name: 'Item 8', description: 'Description for item 8', price: 80, category: 'Category C' },
  { id: 9, name: 'Item 9', description: 'Description for item 9', price: 90, category: 'Category D' },
  { id: 10, name: 'Item 10', description: 'Description for item 10', price: 100, category: 'Category E' },
  { id: 11, name: 'Item 11', description: 'Description for item 11', price: 110, category: 'Category F' },
  { id: 12, name: 'Item 12', description: 'Description for item 12', price: 120, category: 'Category G' },
  { id: 13, name: 'Item 13', description: 'Description for item 13', price: 130, category: 'Category H' },
  { id: 14, name: 'Item 14', description: 'Description for item 14', price: 140, category: 'Category I' },
  { id: 15, name: 'Item 15', description: 'Description for item 15', price: 150, category: 'Category J' }
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
