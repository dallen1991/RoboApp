// api/generateEndpoint.js
module.exports = async (req, res) => {
  const { method } = req;
  const { entity } = req.query; // e.g., 'user', 'product'

  // Simulate a basic CRUD API handler
  switch (method) {
    case 'POST':
      return res.status(201).json({ message: `Created new ${entity}`, data: req.body });
    case 'GET':
      return res.status(200).json({ message: `Fetched ${entity}`, data: [] });
    case 'PUT':
      return res.status(200).json({ message: `Updated ${entity}`, data: req.body });
    case 'DELETE':
      return res.status(200).json({ message: `Deleted ${entity}` });
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
