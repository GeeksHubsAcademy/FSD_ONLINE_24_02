// const express = require('express')
import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.post('/api/users', (req, res) => {
  res.status(200).send('CREATE USER')
})

app.get('/api/users', (req, res) => {
  res.status(200).send('GET USERS')
})

app.put('/api/users', (req, res) => {
  res.status(200).send('UPDATE USER')
})

app.delete('/api/users', (req, res) => {
  res.status(200).send('DELETE USER')
})

app.listen(PORT, () => {
  // console.log("Server is running on port" + PORT);
	console.log(`Server is running on port ${PORT}`);
});
