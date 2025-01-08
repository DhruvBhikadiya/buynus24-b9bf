const Types = require('../models/typesModel');
const Pagecategorys = require('../models/pagescategoryModel');

exports.createType = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await Types.create(req.body);
        res.status(201).json({ message: 'Type created', id: result.insertId });
    } catch (err) {
        console.error('Error creating Type:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllTypes = async (req, res) => {
    try {
        const results = await Types.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Types:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateType = async (req, res) => {
    const id = req.params.id;
    try {
        await Types.update(id, req.body);
        res.status(200).json({ message: 'Type updated' });
    } catch (err) {
        console.error('Error updating Type:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteType = async (req, res) => {
    const id = req.params.id;
    try {
        await Types.delete(id);
        res.status(200).json({ message: 'Type deleted' });
    } catch (err) {
        console.error('Error deleting Type:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};