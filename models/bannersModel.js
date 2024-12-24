const db = require('../config/db');

const Banners = {
  create: async (data) => {
    const sql = 'INSERT INTO banners (image, url, created_at, updated_at) VALUES (?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.image, data.url]);
      
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
      const [results] = await db.execute('SELECT * FROM banners ORDER BY created_at DESC');
      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },

  update: async (id, data) => {
    const sql = 'UPDATE banners SET image = ?, url = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.image, data.url, id]);
      
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
      const [results] = await db.execute('DELETE FROM banners WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Banners;