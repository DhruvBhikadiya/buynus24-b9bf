const ShopnshipItems = require('../models/shopnshipItemsModel');

exports.createShopnshipItem = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await ShopnshipItems.create(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Error creating ShopnshipItem:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllShopnshipItems = async (req, res) => {
    try {
        const results = await ShopnshipItems.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching ShopnshipItems:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateShopnshipItem = async (req, res) => {
    const id = req.params.id;
    try {
        await ShopnshipItems.update(id, req.body);
        res.status(200).json({ message: 'ShopnshipItem updated' });
    } catch (err) {
        console.error('Error updating ShopnshipItem:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getShopnshipItemByOrderId = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await ShopnshipItems.getShopnshipItemByOrderId(id);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Permission:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteShopnshipItem = async (req, res) => {
    const id = req.params.id;
    try {
        await ShopnshipItems.delete(id);
        res.status(200).json({ message: 'ShopnshipItem deleted' });
    } catch (err) {
        console.error('Error deleting ShopnshipItem:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};