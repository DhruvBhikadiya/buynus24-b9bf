require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const permissionsRoutes = require('./routes/permissionsRoutes');
const pagesRoutes = require('./routes/pagesRoutes');
const pagescategoryRoutes = require('./routes/pagescategoryRoutes');
const storesRoutes = require('./routes/storesRoutes');
const customersRoutes = require('./routes/customersRoutes');
const ticketsRoutes = require('./routes/ticketsRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const addressRoutes = require('./routes/addressRoutes');
const bannersRoutes = require('./routes/bannersRoutes');
const faqRoutes = require('./routes/faqRoutes');
const typesRoutes = require('./routes/typesRoutes');
const ordertypesRoutes = require('./routes/ordertypesRoutes');
const shopnshipOrdersRoutes = require('./routes/shopnshipOrdersRoutes');
const shopnshipItemsRoutes = require('./routes/shopnshipItemsRoutes');
const paymentsettingRoutes = require('./routes/paymentsettingRoutes');
const depositRoutes = require('./routes/depositRoutes');
const refundRoutes = require('./routes/refundRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS options
const corsOptions = {
  origin: '*', // If you want any URL then use '*'
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

// Use CORS middleware with options
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api/users', usersRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/permissions', permissionsRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/pagescategory', pagescategoryRoutes);
app.use('/api/stores', storesRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/banner', bannersRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/types', typesRoutes);
app.use('/api/ordertypes', ordertypesRoutes);
app.use('/api/paymentsetting', paymentsettingRoutes);
app.use('/api/shopnshipOrders', shopnshipOrdersRoutes);
app.use('/api/shopnshipItems', shopnshipItemsRoutes);
app.use('/api/deposit', depositRoutes);
app.use('/api/refund', refundRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});