const db = require('../config/db');

const Shopnshipitems = {
    create: async (data) => {
        const insertSql = `
            INSERT INTO shopnshipitems 
            (name, type, storeId, productURL, customerId, size, color, quantity, price, addressId, orderId, status, isRefunded, created_at, updated_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
        `;
        const selectSql = `
            SELECT * 
            FROM shopnshipitems 
            WHERE id = ?
        `;
    
        try {
            // Execute the insert query
            const [insertResult] = await db.execute(insertSql, [
                data.name, data.type, data.storeId, data.productURL, data.customerId, data.size, data.color, data.quantity, data.price, data.addressId, data.orderId, data.status, data.isRefunded
            ]);
    
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
            const [results] = await db.execute(`SELECT * FROM shopnshipitems ORDER BY created_at DESC`);

            let dataJSON = {
                status: 'success',
                data: results
            };

            return dataJSON;
        } catch (err) {
            throw err;
        }
    },
    getShopnshipItemByOrderId: async (id) => {
      try {
        const [results] = await db.execute('SELECT * FROM shopnshipitems WHERE orderId = ?', [id]);
  
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
        const sqlUpdate = 'UPDATE shopnshipitems SET name = ?, type = ?, storeId = ?, productURL = ?, customerId = ?, size = ?, color = ?, quantity = ?, price = ?, addressId = ?, orderId = ?, status = ?, isRefunded = ?, updated_at = NOW() WHERE id = ?';
        try {
            const [results] = await db.execute(sqlUpdate, [data.name, data.type, data.storeId, data.productURL, data.customerId, data.size, data.color, data.quantity, data.price, data.addressId, data.orderId, data.status, data.isRefunded, id]);

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
            const [results] = await db.execute('DELETE FROM shopnshipitems WHERE id = ?', [id]);
            return results;
        } catch (err) {
            throw err;
        }
    },  
};

module.exports = Shopnshipitems;