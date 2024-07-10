/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to user profiles and management
 */

/**
 * @swagger
 * /api/user/user-profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieves the profile of the authenticated user.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *       '401':
 *         description: Unauthorized, user not authenticated
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/switch-profile/{id}:
 *   put:
 *     summary: Switch user profile
 *     description: Updates user profile with new data and files (profile picture, identity, certificate).
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update profile
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profile_picture:
 *                 type: string
 *                 format: binary
 *                 description: New profile picture
 *               identity:
 *                 type: string
 *                 format: binary
 *                 description: New identity document
 *               certificate:
 *                 type: string
 *                 format: binary
 *                 description: New certificate document
 *     responses:
 *       '200':
 *         description: User profile updated successfully
 *       '401':
 *         description: Unauthorized, user not authenticated
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/update/{id}:
 *   put:
 *     summary: Update user profile (for guides)
 *     description: Updates user profile data for guides.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update profile
 *         schema:
 *           type: string
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
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               age:
 *                 type: number
 *               country:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User profile updated successfully
 *       '401':
 *         description: Unauthorized, user not authenticated
 *       '403':
 *         description: Forbidden, user is not a guide
 *       '500':
 *         description: Internal server error
 */
