const Refunds = require('../models/refundModel');

exports.createRefund = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await Refunds.create(req.body);
        res.status(201).json({ message: 'Refund created', id: result.insertId });
    } catch (err) {
        console.error('Error creating Refund:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllRefunds = async (req, res) => {
    try {
        const results = await Refunds.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Refunds:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getRefundsByCustomerId = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await Refunds.getRefundsByCustomerId(id);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Permission:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateRefund = async (req, res) => {
    const id = req.params.id;
    try {
        await Refunds.update(id, req.body);
        res.status(200).json({ message: 'Refund updated' });
    } catch (err) {
        console.error('Error updating Refund:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteRefund = async (req, res) => {
    const id = req.params.id;
    try {
        await Refunds.delete(id);
        res.status(200).json({ message: 'Refund deleted' });
    } catch (err) {
        console.error('Error deleting Refund:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};