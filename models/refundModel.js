const db = require('../config/db');

const refunds = {
    create: async (data) => {
        const sql = 'INSERT INTO refunds (customerId, amount, status, reason, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())';
        try {
            const [results] = await db.execute(sql, [data.customerId, data.amount, data.status, data.reason]);

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
            const query = `SELECT * FROM refunds ORDER BY created_at DESC`;
            const [results] = await db.execute(query);

            const dataJSON = {
                status: 'success',
                data: results,
            };
            return dataJSON;
        } catch (err) {
            throw err;
        }
    },
    getrefundsByCustomerId: async (id) => {
      try {
        const [results] = await db.execute('SELECT * FROM refunds WHERE customerId = ?', [id]);
  
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
        const sqlUpdate = 'UPDATE refunds SET customerId = ?, amount = ?, status = ?, reason = ?, updated_at = NOW() WHERE id = ?';
        try {
            const [results] = await db.execute(sqlUpdate, [data.customerId, data.amount, data.status, data.reason, id]);

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
            const [results] = await db.execute('DELETE FROM refunds WHERE id = ?', [id]);
            return results;
        } catch (err) {
            throw err;
        }
    },
};

module.exports = refunds;