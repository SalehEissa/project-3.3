// Connect to the database
require('dotenv').config();
const db = require('./config/database.cjs');


setTimeout(() => {
    db.close();
}, 5000);









