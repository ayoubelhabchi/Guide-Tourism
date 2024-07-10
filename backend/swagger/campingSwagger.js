const campingSwagger = `
/**
 * @swagger
 * tags:
 *   name: Camping
 *   description: Operations related to camping
 */

/**
 * @swagger
 * /api/camping/add:
 *   post:
 *     summary: Add a camping
 *     tags: [Camping]
 *     description: Endpoint to add a new camping.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Camping'
 *     responses:
 *       '200':
 *         description: A successful response indicating the camping is added
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/camping/show:
 *   get:
 *     summary: Get all campings
 *     tags: [Camping]
 *     description: Retrieve all campings.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response with camping data
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/camping/update/{campingId}:
 *   put:
 *     summary: Update a camping by ID
 *     tags: [Camping]
 *     description: Update a camping by its ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: campingId
 *         required: true
 *         description: ID of the camping to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Camping'
 *     responses:
 *       '200':
 *         description: A successful response indicating the camping is updated
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Camping not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/camping/delete/{id}:
 *   delete:
 *     summary: Delete a camping by ID
 *     tags: [Camping]
 *     description: Delete a camping by its ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the camping to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response indicating the camping is deleted
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Camping not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/camping/sortCampingsAscending:
 *   get:
 *     summary: Sort campings in ascending order
 *     tags: [Camping]
 *     description: Retrieve all campings sorted in ascending order.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response with sorted camping data
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/camping/sortCampingsDescending:
 *   get:
 *     summary: Sort campings in descending order
 *     tags: [Camping]
 *     description: Retrieve all campings sorted in descending order.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response with sorted camping data
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/camping/filter-name:
 *   get:
 *     summary: Filter campings by name
 *     tags: [Camping]
 *     description: Retrieve campings filtered by name.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response with filtered camping data
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */`;

module.exports = campingSwagger;
