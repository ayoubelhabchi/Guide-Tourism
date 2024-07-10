const reviewSwagger = `
/**
 * @swagger
 * tags:
 *   name: Review
 *   description: Operations related to user reviews
 */

/**
 * @swagger
 * /api/review/feedback:
 *   post:
 *     summary: Submit feedback
 *     description: Endpoint to submit feedback.
 *     tags: [Review]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *                 description: The rating given by the user (1 to 5).
 *               comment:
 *                 type: string
 *                 description: Optional comment provided by the user.
 *     responses:
 *       '200':
 *         description: Feedback submitted successfully
 *       '401':
 *         description: Unauthorized, user not authenticated
 *       '500':
 *         description: Internal server error
 */`;

module.exports = reviewSwagger;
