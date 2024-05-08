// const express = require('express')
import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.post('/api/users', (req, res) => {
  res.status(200).send('CREATE USER')
})

app.listen(PORT, () => {
  // console.log("Server is running on port" + PORT);
	console.log(`Server is running on port ${PORT}`);
});
