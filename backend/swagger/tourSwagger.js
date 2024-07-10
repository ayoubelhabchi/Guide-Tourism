const tourSwagger = `
/**
 * @swagger
 * tags:
 *   name: Tour
 *   description: Operations related to tours
 */

/**
 * @swagger
 * /api/tour/create:
 *   post:
 *     summary: Create a tour
 *     description: Endpoint to create a new tour.
 *     tags: [Tour]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               guide_id:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               category:
 *                 type: string
 *               duration:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       '200':
 *         description: A successful response indicating the tour is created
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tour/allTours:
 *   get:
 *     summary: Get all tours
 *     description: Retrieve all tours.
 *     tags: [Tour]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response with tour data
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tour/getTour/{id}:
 *   get:
 *     summary: Get tour by ID
 *     description: Retrieve a tour by its ID.
 *     tags: [Tour]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tour to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response with tour data
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Tour not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tour/updateTour/{id}:
 *   put:
 *     summary: Update a tour by ID
 *     description: Update a tour by its ID.
 *     tags: [Tour]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tour to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               guide_id:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               category:
 *                 type: string
 *               duration:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       '200':
 *         description: A successful response indicating the tour is updated
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Tour not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tour/deleteTour/{id}:
 *   delete:
 *     summary: Delete a tour by ID
 *     description: Delete a tour by its ID.
 *     tags: [Tour]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tour to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response indicating the tour is deleted
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Tour not found
 *       '500':
 *         description: Internal server error
 */`;

module.exports = tourSwagger;
