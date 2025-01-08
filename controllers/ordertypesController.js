const OrderTypes = require('../models/ordertypesModel');

exports.createOrderType = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await OrderTypes.create(req.body);
        res.status(201).json({ message: 'OrderType created', id: result.insertId });
    } catch (err) {
        console.error('Error creating OrderType:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllOrderTypes = async (req, res) => {
    try {
        const results = await OrderTypes.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching OrderTypes:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateOrderType = async (req, res) => {
    const id = req.params.id;
    try {
        await OrderTypes.update(id, req.body);
        res.status(200).json({ message: 'OrderType updated' });
    } catch (err) {
        console.error('Error updating OrderType:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteOrderType = async (req, res) => {
    const id = req.params.id;
    try {
        await OrderTypes.delete(id);
        res.status(200).json({ message: 'OrderType deleted' });
    } catch (err) {
        console.error('Error deleting OrderType:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};