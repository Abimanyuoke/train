console.log("Starting server...");

import express from 'express'
import cors from 'cors'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'
import dotenv from 'dotenv'
import userRoute from '../../frontend/userRoute'

dotenv.config()

import { PORT } from './global'

const app = express()
app.use(cors())
app.use(express.json())

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Ordering System API',
            version: '1.0.0',
            description: 'API documentation for the ordering system',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: { // Nama skema keamanan
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT', // Format token
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./src/routes/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(`/user`, userRoute)

// Set public folder as static
app.use(express.static(path.join(__dirname, '..', 'public')));

const serverPort = PORT || 5000;

app.listen(serverPort, () => {
    console.log(`[server]: Server is running at http://localhost:${serverPort}`)
})
