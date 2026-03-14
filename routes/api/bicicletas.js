let express = require('express');
let router = express.Router();
let BicicletaControllerAPI = require("../../controllers/api/BicicletaControllerAPI");

/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - id
 *         - color
 *         - modelo
 *         - ubicacion
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la bicicleta
 *           example: 1
 *         color:
 *           type: string
 *           description: Color de la bicicleta
 *           example: Rojo
 *         modelo:
 *           type: string
 *           description: Modelo de la bicicleta
 *           example: Trek
 *         ubicacion:
 *           type: array
 *           description: Coordenadas de ubicación
 *           items:
 *             type: number
 *           example: [28.503789, -13.853296]
 */


/**
 * @swagger
 * /api/bicicletas:
 *   get:
 *     summary: Obtener todas las bicicletas
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: Lista de bicicletas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 */
router.get("/", BicicletaControllerAPI.bicicleta_list);

/**
 * @swagger
 * /api/bicicletas/create:
 *   post:
 *     summary: Crear una nueva bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       201:
 *         description: Bicicleta creada correctamente
 *       400:
 *         description: Error en los datos enviados
 */
router.post("/create", BicicletaControllerAPI.bicicleta_create);

/**
 * @swagger
 * /api/bicicletas/delete:
 *   delete:
 *     summary: Eliminar una bicicleta
 *     tags: [Bicicletas]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la bicicleta a eliminar
 *     responses:
 *       200:
 *         description: Bicicleta eliminada
 *       404:
 *         description: Bicicleta no encontrada
 */
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete);

/**
 * @swagger
 * /api/bicicletas/update:
 *   put:
 *     summary: Actualizar una bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta actualizada
 *       404:
 *         description: Bicicleta no encontrada
 */
router.put("/update", BicicletaControllerAPI.bicicleta_update);

module.exports = router;