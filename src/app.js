const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/database');
const userRoutes = require('./routes/userRoutes')
const companyUserRoutes = require('./routes/companyUserRoutes')
const initativeRoutes = require('./routes/initiativeRoutes')

db.connect();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/company", companyUserRoutes);
app.use("/initiative", initativeRoutes);

module.exports = app;
