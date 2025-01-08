const Deposits = require('../models/depositModel');

exports.createDeposit = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await Deposits.create(req.body);
        res.status(201).json({ message: 'Deposit created', id: result.insertId });
    } catch (err) {
        console.error('Error creating Deposit:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllDeposits = async (req, res) => {
    try {
        const results = await Deposits.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Deposits:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getDepositsByCustomerId = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await Deposits.getDepositsByCustomerId(id);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Permission:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateDeposit = async (req, res) => {
    const id = req.params.id;
    try {
        await Deposits.update(id, req.body);
        res.status(200).json({ message: 'Deposit updated' });
    } catch (err) {
        console.error('Error updating Deposit:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteDeposit = async (req, res) => {
    const id = req.params.id;
    try {
        await Deposits.delete(id);
        res.status(200).json({ message: 'Deposit deleted' });
    } catch (err) {
        console.error('Error deleting Deposit:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};