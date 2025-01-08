const Faqs = require('../models/faqModel');

exports.createFaq = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await Faqs.create(req.body);
        res.status(201).json({ message: 'Faq created', id: result.insertId });
    } catch (err) {
        console.error('Error creating Faq:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllFaqs = async (req, res) => {
    try {
        const results = await Faqs.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Faqs:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateFaq = async (req, res) => {
    const id = req.params.id;
    try {
        await Faqs.update(id, req.body);
        res.status(200).json({ message: 'Faq updated' });
    } catch (err) {
        console.error('Error updating Faq:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteFaq = async (req, res) => {
    const id = req.params.id;
    try {
        await Faqs.delete(id);
        res.status(200).json({ message: 'Faq deleted' });
    } catch (err) {
        console.error('Error deleting Faq:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};