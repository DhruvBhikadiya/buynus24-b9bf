const db = require('../config/db');

const Deposits = {
    create: async (data) => {
        const sql = 'INSERT INTO deposits (customerId, amount, status, reason, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())';
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
            const query = `SELECT * FROM deposits ORDER BY created_at DESC`;
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
    getDepositsByCustomerId: async (id) => {
      try {
        const [results] = await db.execute('SELECT * FROM deposits WHERE customerId = ?', [id]);
  
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
        const sqlUpdate = 'UPDATE deposits SET customerId = ?, amount = ?, status = ?, reason = ?, updated_at = NOW() WHERE id = ?';
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
            const [results] = await db.execute('DELETE FROM deposits WHERE id = ?', [id]);
            return results;
        } catch (err) {
            throw err;
        }
    },
};

module.exports = Deposits;