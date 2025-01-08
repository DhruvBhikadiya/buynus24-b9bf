const db = require('../config/db');

const paymentsetting = {
    create: async (data) => {
        const sql = 'INSERT INTO paymentsetting (rzp_keyId, rzp_keySecret, created_at, updated_at) VALUES (?, ?, NOW(), NOW())';
        try {
            const [results] = await db.execute(sql, [data.rzp_keyId, data.rzp_keySecret]);

            let dataJSON = {
                status: 'success',
                data: results
            }

            return dataJSON;
        } catch (err) {
            throw err; // Propagate the error to be handled later
        }
    },

    getAll: async () => {
        try {
            const [results] = await db.execute(`SELECT * FROM paymentsetting ORDER BY created_at DESC`);

            let dataJSON = {
                status: 'success',
                data: results
            };

            return dataJSON;
        } catch (err) {
            throw err;
        }
    },
    update: async (id, data) => {
        const sqlUpdate = 'UPDATE paymentsetting SET rzp_keyId = ?, rzp_keySecret = ?, updated_at = NOW() WHERE id = ?';
        try {
            const [results] = await db.execute(sqlUpdate, [data.rzp_keyId, data.rzp_keySecret, id]);

            let dataJSON = {
                status: 'success',
                data: results
            }
    
            return dataJSON;
        } catch (err) {
            throw err;
        }
    },

    delete: async (id) => {
        try {
            const [results] = await db.execute('DELETE FROM paymentsetting WHERE id = ?', [id]);
            return results;
        } catch (err) {
            throw err;
        }
    },  
};

module.exports = paymentsetting;