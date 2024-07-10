const adminSwagger = `
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Operations related to admin
 */

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Login admin
 *     tags: [Admin]
 *     description: Endpoint to login as an admin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful login response
 *       '401':
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/admin/register:
 *   post:
 *     summary: Register admin
 *     tags: [Admin]
 *     description: Endpoint to register a new admin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful registration response
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /api/admin/allUsers:
 *   get:
 *     summary: Get all users
 *     tags: [Admin]
 *     description: Retrieve all users.
 *     security: 
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response with user data
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */

/**
 * @swagger
 * /api/admin/delete/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Admin]
 *     description: Delete a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '401':
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/admin/allguides:
 *   get:
 *     summary: Get all guides
 *     tags: [Admin]
 *     description: Retrieve all guides.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response with guide data
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */


/**
 * @swagger
 * /api/admin/guide/{id}:
 *   get:
 *     summary: Get guide by ID
 *     tags: [Admin]
 *     description: Retrieve a guide by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the guide to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response with guide data
 *       '401':
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/admin/approval/{id}/status:
 *   put:
 *     summary: Update guide status by ID
 *     tags: [Admin]
 *     description: Update the approval status of a guide by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the guide to update status
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Guide status updated successfully
 *       '401':
 *         description: Unauthorized
 */`;

module.exports = adminSwagger;
