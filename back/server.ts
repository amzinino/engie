import express from 'express';
import apiRoutes from './routes/api';

export function Server() {
	const app = express()
	app.use(express.json())
	app.use("/api", apiRoutes)
	return app
}
