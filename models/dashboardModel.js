const db = require('../config/db');

const Dashboard = {
  adminDashboard: async () => {
    try {
      const [services] = await db.execute(`SELECT COUNT(*) AS row_count FROM services`);
      const [stores] = await db.execute(`SELECT COUNT(*) AS row_count FROM stores`);
      const [customers] = await db.execute(`SELECT COUNT(*) AS row_count FROM customers`);
      const [banners] = await db.execute(`SELECT COUNT(*) AS row_count FROM banners`);
      const [faqs] = await db.execute(`SELECT COUNT(*) AS row_count FROM faqs`);
      const [types] = await db.execute(`SELECT COUNT(*) AS row_count FROM types`);
      const [ordertypes] = await db.execute(`SELECT COUNT(*) AS row_count FROM ordertypes`);
      const [tickets] = await db.execute(`SELECT COUNT(*) AS row_count FROM tickets`);
      const [users] = await db.execute(`SELECT COUNT(*) AS row_count FROM users`);
      const [roles] = await db.execute(`SELECT COUNT(*) AS row_count FROM roles`);
      const [pages] = await db.execute(`SELECT COUNT(*) AS row_count FROM pages`);
      const [pagescategory] = await db.execute(`SELECT COUNT(*) AS row_count FROM pagescategory`);
      const [address] = await db.execute(`SELECT COUNT(*) AS row_count FROM address`);
      

      let dashboardJson = [
        {
          totalservices : services[0].row_count,
          totalstores : stores[0].row_count,
          totalcustomers : customers[0].row_count,
          totalbanners : banners[0].row_count,
          totalfaqs : faqs[0].row_count,
          totaltypes : types[0].row_count,
          totalordertypes : ordertypes[0].row_count,
          totaltickets : tickets[0].row_count,
          totalusers : users[0].row_count,
          totalroles : roles[0].row_count,
          totalpages : pages[0].row_count,
          totalpagescategory : pagescategory[0].row_count,
          totaladdress : address[0].row_count,
        }
      ]
      
      let dataJSON = {
        status: 'success',
        data: dashboardJson
      };
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },
  customerDashboard: async (clientId) => {
    try {
      const [address] = await db.execute(`SELECT COUNT(*) AS row_count FROM address WHERE userId = ?`,[clientId]);
      const [tickets] = await db.execute(`SELECT COUNT(*) AS row_count FROM tickets WHERE customerId = ?`,[clientId]);
      

      let dashboardJson = [
        {
          totaladdress : address[0].row_count,
          totaltickets : tickets[0].row_count,
        }
      ]
      
      let dataJSON = {
        status: 'success',
        data: dashboardJson
      };
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Dashboard;