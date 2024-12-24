const ShopnshipOrders = require('../models/shopnshipOrdersModel');

exports.createShopnshipOrder = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await ShopnshipOrders.create(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Error creating ShopnshipOrder:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllShopnshipOrders = async (req, res) => {
    try {
        const results = await ShopnshipOrders.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching ShopnshipOrders:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateShopnshipOrder = async (req, res) => {
    const id = req.params.id;
    try {
        await ShopnshipOrders.update(id, req.body);
        res.status(200).json({ message: 'ShopnshipOrder updated' });
    } catch (err) {
        console.error('Error updating ShopnshipOrder:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getShopnshipOrderByOrderId = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await ShopnshipOrders.getShopnshipOrderByOrderId(id);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Permission:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getShopnshipOrderByCustomerId = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await ShopnshipOrders.getShopnshipOrderByCustomerId(id);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Permission:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteShopnshipOrder = async (req, res) => {
    const id = req.params.id;
    try {
        await ShopnshipOrders.delete(id);
        res.status(200).json({ message: 'ShopnshipOrder deleted' });
    } catch (err) {
        console.error('Error deleting ShopnshipOrder:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};