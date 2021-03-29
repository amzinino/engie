import express from 'express';
import { Server } from './server';

const PORT = process.env.PORT || 8000
const App = Server()
App.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});