const PaymentSettings = require('../models/paymentsettingModel');

exports.createPaymentSetting = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await PaymentSettings.create(req.body);
        res.status(201).json({ message: 'PaymentSetting created', id: result.insertId });
    } catch (err) {
        console.error('Error creating PaymentSetting:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllPaymentSettings = async (req, res) => {
    try {
        const results = await PaymentSettings.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching PaymentSettings:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updatePaymentSetting = async (req, res) => {
    const id = req.params.id;
    try {
        await PaymentSettings.update(id, req.body);
        res.status(200).json({ message: 'PaymentSetting updated' });
    } catch (err) {
        console.error('Error updating PaymentSetting:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deletePaymentSetting = async (req, res) => {
    const id = req.params.id;
    try {
        await PaymentSettings.delete(id);
        res.status(200).json({ message: 'PaymentSetting deleted' });
    } catch (err) {
        console.error('Error deleting PaymentSetting:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};