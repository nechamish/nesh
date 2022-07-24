const express =require("express");
const app = express();
const cors = require('cors');
const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("../server/swagger.json");
// const checkJwt = require("../server/api/middleware/middleware");
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');


const db = require("./db/MongooseDB.js");
const dotenv = require("dotenv");
dotenv.config();
db.connect();
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: '2KbxwjVnxxBhonqXPREsLsXBsCm3kQVe',
    issuerBaseURL: 'https://dev-i6vqgy24.us.auth0.com'
  };
  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(config));
  
  // req.isAuthenticated is provided from the auth router
  app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });
  

// const dbc = require("./db/database.js");
// dbc.connect();

const port=3000;
const UserRouter = require("./api/controlers/User");
const MeetingRouter = require("./api/controlers/Meeting")
const DailyRouter = require("./api/controlers/Dairies");

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use("/users", UserRouter);
app.use("/users/:id", UserRouter);
app.use("/meeting", MeetingRouter);
app.use("/meeting/:id", MeetingRouter);
app.use("/dairies/:id", DailyRouter);
app.use("/dairies", DailyRouter);

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });
app.listen(process.env.PORT || 3000, function () {
    console.log("SERVER STARTED PORT: 3000");})










