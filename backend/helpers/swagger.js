const swaggerJsdoc = require("swagger-jsdoc");
const dotenv = require("dotenv");
dotenv.config();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "World Tour API",
      version: "1.0.0",
      description: "APIs for the World Tour project",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Admin: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" },
            password: { type: "string" },
            role: { type: "string", enum: ["admin"] },
            isConfirmed: { type: "boolean" },
            forgotPasswordToken: { type: "string" },
            confirmationToken: { type: "string" },
          },
          required: ["firstName", "lastName", "email", "phone", "password"],
        },
        Camping: {
          type: "object",
          properties: {
            name: { type: "string" },
            location: { type: "string" },
            date: { type: "string", format: "date" },
            duration: { type: "string", format: "date-time" },
            group_member: { type: "number" },
            isPrivate: { type: "boolean" },
            price: { type: "number" },
            description: { type: "string" },
          },
          required: [
            "name",
            "location",
            "date",
            "duration",
            "group_member",
            "isPrivate",
            "price",
            "description",
          ],
        },
        Tour: {
          type: "object",
          properties: {
            title: { type: "string" },
            guide_id: { type: "string" },
            description: { type: "string" },
            image: { type: "string" },
            category: { type: "string" },
            duration: { type: "number" },
            price: { type: "number" },
          },
          required: [
            "title",
            "guide_id",
            "description",
            "image",
            "category",
            "duration",
            "price",
          ],
        },
        Review: {
          type: "object",
          properties: {
            user_id: { type: "string" },
            tour_id: { type: "string" },
            rating: { type: "number" },
            comment: { type: "string" },
          },
          required: ["user_id", "tour_id", "rating", "comment"],
        },
        User: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string" },
            address: { type: "string" },
            phone: { type: "string" },
            password: { type: "string" },
            age: { type: "number" },
            country: { type: "string" },
            role: { type: "string", enum: ["user", "guide"], default: "user" },
            forgotPasswordToken: { type: "string", default: null },
            isConfirmed: { type: "boolean", default: false },
            confirmationToken: { type: "string", default: null },
          },
          required: [
            "firstName",
            "lastName",
            "email",
            "address",
            "phone",
            "password",
            "age",
            "country",
          ],
        },
        Booking: {
            type: 'object',
            properties: {
              user: { type: 'string' },
              tour: { type: 'string' },
              camping: { type: 'string' },
              date: { type: 'string', format: 'date-time' },
              price: { type: 'number' },
              status: { type: 'string', enum: ['pending', 'confirmed', 'cancelled'] },
              isPaid: { type: 'boolean' },
            },
            required: ['user', 'date', 'price'],
          },
      },
      
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT' 
        },
        
      }
    },
    tags: [
      {
        name: "Admin",
        description: "Admin Operations ",
      },
      {
        name: "User",
        description: "User Operations",
      },
      {
        name: "Camping",
        description: "Camping Operations ",
      },
      {
        name: "Tour",
        description: "Tour Operations ",
      },
      {
        name: "Review",
        description: "Review Operations",
      },
      {
        name: 'Booking',
        description: 'Booking Operations',
      }
    ],
  },
  apis: [
    "./routes/*.js",
    "./swagger/campingSwagger.js",
    "./swagger/adminSwagger.js",
    "./swagger/tourSwagger.js",
    "./swagger/reviewSwagger.js",
    "./swagger/userSwagger.js",
    "./swagger/bookingSwagger.js",
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
