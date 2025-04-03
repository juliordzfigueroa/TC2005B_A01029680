"use strict";

import express from 'express';

import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

app.use(express.json());

async function connectToDB() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'julian',
        password: 'hola',
        database: "cards_db"})
}

app.get("/api/cards", async (request, response) => {
    let connection = null;
  
    try {
  
      // The await keyword is used to wait for a Promise. It can only be used inside an async function.
      // The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.
  
      connection = await connectToDB();
  
      // The execute method is used to execute a SQL query. It returns a Promise that resolves with an array containing the results of the query (results) and an array containing the metadata of the results (fields).
      const [results, fields] = await connection.execute("select * from card");
  
      console.log(`${results.length} rows returned`);
      console.log(results);
      response.status(200).json(results);
    }
    catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    }
    finally {
      if (connection !== null) {
        connection.end();
        console.log("Connection closed succesfully!");
      }
    }
  });

app.get("/api/cards/:id", async (request, response) => {
    let connection = null;
  
    try {
  
      // The await keyword is used to wait for a Promise. It can only be used inside an async function.
      // The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.
  
      connection = await connectToDB();
  
      // The execute method is used to execute a SQL query. It returns a Promise that resolves with an array containing the results of the query (results) and an array containing the metadata of the results (fields).
      const [results, fields] = await connection.execute("select * from card where card_id = ?", [request.params.id]);
  
      console.log(`${results.length} rows returned`);
      console.log(results);
      response.status(200).json(results);
    }
    catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    }
    finally {
      if (connection !== null) {
        connection.end();
        console.log("Connection closed succesfully!");
      }
    }
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})