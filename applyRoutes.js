import { Router } from "express";
import cors from "cors";
import { uploadDocument } from '../controllers/documentController.js';
import {
  getCountries,
  getStates,
  getCities,
  getCountryCodes,
} from "../controllers/applyController.js";

import {
    createEmployee,
    errorHandler
} from '../controllers/employeeController.js';
import {
    validateRequestBody,
    employeeValidationRules,
} from '../middleware/validationMiddleware.js';
const routes = Router();
routes.use(cors({
  origin: "http://localhost:3001",  // ✅ Allow requests from React frontend
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
}));
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get all countries
 *     tags: [Location]
 *     responses:
 *       200:
 *         description: List of all countries
 */
routes.get("/countries", getCountries);
/**
 * @swagger
 * /states/{countryCode}:
 *   get:
 *     summary: Get states by country code
 *     tags: [Location]
 *     parameters:
 *       - in: path
 *         name: countryCode
 *         required: true
 *         schema:
 *           type: string
 */
routes.get("/states/:countryCode", getStates);
routes.get("/cities/:stateCode", getCities);
routes.get("/states/:country_id", getStates);
routes.get("/cities/:state_id", getCities);
routes.get("/countryPhoneCodes", getCountryCodes);

// Create employee route with validation
routes.post(
    '/employees',
    validateRequestBody,
    employeeValidationRules,
    createEmployee
);
routes.post('/upload/', uploadDocument);

routes.all('*', (req, res) => {
    res.status(404).json({ statusCode:404, error: 'Route Not Found' });
});

routes.use(errorHandler);
export default routes;

// **********************************************************************************
// DO NOT USE FOLLOWING CODE. NO AUTHENTICATION IN PLACE
// **********************************************************************************
// Get all employees route with pagination validation
// routes.get(
//     '/employees',
//     paginationValidationRules,
//     getAllEmployees
// );

// Get employee by ID route with ID validation
// routes.get(
//     '/employees/:id',
//     idValidationRules,
//     getEmployeeById
// );

// Update employee route with all validations
// routes.put(
//     '/employees/:id',
//     validateRequestBody,
//     idValidationRules,
//     employeeValidationRules,
//     updateEmployee
// );

// Delete employee route with ID validation
// routes.delete(
//     '/employees/:id',
//     idValidationRules,
//     deleteEmployee
// );