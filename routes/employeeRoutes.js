// employeeRoutes.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/employees', employeeController.getAllEmployees);

router.get('/employees/:id', employeeController.getEmployeeById);

router.post('/employees', employeeController.createEmployee);

router.patch('/employees/:id', employeeController.updateEmployeeById);

router.put('/employees/:id', employeeController.updateEmployeeById);

router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;
