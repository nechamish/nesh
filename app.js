const express =require("express");
const app = express();
const cors = require('cors');
const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("../server/swagger.json");


const db = require("./DB/mongoose");
const dotenv = require("dotenv");
dotenv.config();
db.connect();
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

app.listen(process.env.PORT || 3000, function () {
    console.log("SERVER STARTED PORT: 3000");})




