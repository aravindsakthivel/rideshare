const express = require("express");
const connect = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

const user_route = require("./resources/routes/user.route");
const car_route = require("./resources/routes/car.route");
const ride_by_route = require("./resources/routes/ride_by.route");
const ride_req_route = require("./resources/routes/ride_req.route");
const ride_route = require('./resources/routes/ride.route')

const PORT = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log("listening to port " + PORT);
  });
};

start();

app.use("/api/users", user_route);
app.use("/api/cars", car_route);
app.use("/api/ride_by", ride_by_route);
app.use("/api/ride_req", ride_req_route);
app.use('/api/ride', ride_route)
