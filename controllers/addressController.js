const Address = require('../models/addressModel');

exports.createAddress = async (req, res) => {
  try {
    const result = await Address.create(req.body);
    res.status(201).json({ message: 'Address created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Address:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllAddress = async (req, res) => {
  try {
    const results = await Address.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Address:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAddressById = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await Address.getAddressById(id);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Permission:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAddressByUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const results = await Address.getAddressByUser(userId);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Permission:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateAddress = async (req, res) => {
  const id = req.params.id;
  try {
    await Address.update(id, req.body);
    res.status(200).json({ message: 'Address updated' });
  } catch (err) {
    console.error('Error updating Address:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteAddress = async (req, res) => {
  const id = req.params.id;
  try {
    await Address.delete(id);
    res.status(200).json({ message: 'Address deleted' });
  } catch (err) {
    console.error('Error deleting Address:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
