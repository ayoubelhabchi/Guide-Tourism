const bookingSwagger = `
/**
 * @swagger
 * /api/bookings/book:
 *   post:
 *     summary: Book a service
 *     description: Endpoint to book a service.
 *     tags: [Booking]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Define properties based on your request payload
 *     responses:
 *       '200':
 *         description: Service booked successfully
 *       '401':
 *         description: Unauthorized, user not authenticated
 *       '500':
 *         description: Internal server error
 *
 * /api/bookings/checkout/{id}:
 *   get:
 *     summary: Get checkout session
 *     description: Retrieve checkout session for a booking.
 *     tags: [Booking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the booking
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Checkout session retrieved successfully
 *       '401':
 *         description: Unauthorized, user not authenticated
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */`;

module.exports = bookingSwagger;
