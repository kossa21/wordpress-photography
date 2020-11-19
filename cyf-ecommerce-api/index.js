const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("My server is running on port 3000!");
})

const { Pool } = require('pg');

const pool = new Pool({
    user: 'migracode',
    host: 'localhost',
    database: 'cyf_ecommerce',
    password: 'occlaptop1',
    port: 5432
});

app.get("/customers", function(req, res) {
    pool.query('SELECT name, address FROM customers', (error, result) => {
        res.json(result.rows);
    });
});

app.get("/suppliers", (req, res) => {
    pool.query('SELECT supplier_name, country FROM suppliers', (error, result) => {
        res.json(result.rows);
    });
});

app.get("/products", (req, res) => {
    pool.query('select p.product_name , s.supplier_name from products p join suppliers s on s.id = p.supplier_id', (error, result) => {
        res.json(result.rows);
    });
});
