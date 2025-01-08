const db = require('../config/db');

const ShopnshipOrders = {
    create: async (data) => {
        const insertSql = `INSERT INTO shopnshiporders (type, status, items, customerId, addressId, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;
        const selectSql = `SELECT * FROM shopnshiporders WHERE id = ?`;
    
        try {
            // Execute the insert query
            const [insertResult] = await db.execute(insertSql, [data.type, data.status, data.items, data.customerId, data.addressId]);
    
            // Get the ID of the inserted row
            const insertedId = insertResult.insertId;
    
            // Fetch the full details of the created row
            const [rows] = await db.execute(selectSql, [insertedId]);
    
            // Return the created item
            return {
                status: 'success',
                data: rows[0] // Assuming rows[0] contains the newly inserted record
            };
        } catch (err) {
            throw err;
        }
    },

    getAll: async () => {
        try {
            const [results] = await db.execute(`SELECT * FROM shopnshiporders ORDER BY created_at DESC`);

            let dataJSON = {
                status: 'success',
                data: results
            };

            return dataJSON;
        } catch (err) {
            throw err;
        }
    },
    getShopnshipOrderByOrderId: async (id) => {
      try {
        const [results] = await db.execute('SELECT * FROM shopnshiporders WHERE id = ?', [id]);
  
        let dataJSON = {
          status: 'success',
          data: results
        };
        return dataJSON;
      } catch (err) {
        throw err;
      }
    },
    getShopnshipOrderByCustomerId: async (id) => {
      try {
        const [results] = await db.execute('SELECT * FROM shopnshiporders WHERE customerId = ?', [id]);
  
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
        const sqlUpdate = 'UPDATE shopnshiporders SET type = ?, status = ?, items = ?, customerId = ?, addressId = ?, updated_at = NOW() WHERE id = ?';
        try {
            const [results] = await db.execute(sqlUpdate, [data.type, data.status, data.items, data.customerId, data.addressId, id]);

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
            const [results] = await db.execute('DELETE FROM shopnshiporders WHERE id = ?', [id]);
            return results;
        } catch (err) {
            throw err;
        }
    },  
};

module.exports = ShopnshipOrders;