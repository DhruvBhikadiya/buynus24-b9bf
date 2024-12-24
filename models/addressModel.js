const db = require('../config/db');

const Address = {
  create: async (data) => {
    const sql = 'INSERT INTO address (address, landmark, zipcode, city, state, contry, userId, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.address, data.landmark, data.zipcode, data.city, data.state, data.contry, data.userId]);
      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },
  
  getAll: async () => {
    try {
      const query = `
        SELECT 
          address.*, 
          customers.name AS customerName 
        FROM 
          address 
        INNER JOIN 
          customers 
        ON 
          address.userId = customers.id 
        ORDER BY 
          address.created_at DESC
      `;
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
  
  getAddressById: async (id) => {
    try {
      const [results] = await db.execute('SELECT * FROM address WHERE id = ?', [id]);

      let dataJSON = {
        status: 'success',
        data: results
      };
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },

  getAddressByUser: async (userId) => {
    try {
      const [results] = await db.execute('SELECT * FROM address WHERE userId = ?', [userId]);

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
    const sql = 'UPDATE address SET address = ?, landmark = ?,zipcode = ?, city = ?, state = ?, contry = ?, userId = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.address, data.landmark, data.zipcode, data.city, data.state, data.contry, data.userId, id]);
      
      let dataJson = {
        status: 'success',
        data: results
    }
      return dataJson;
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    try {
      const [results] = await db.execute('DELETE FROM address WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Address;