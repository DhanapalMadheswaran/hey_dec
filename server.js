const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const categoryRouter = require("./routes/api/cateroryRouter");
const vendorRouter = require("./routes/api/vendorRouter");
const sliderRouter = require("./routes/api/sliderRouter");
const bannerRouter = require("./routes/api/bannerRouter");
const userRouter = require("./routes/api/authenticationRouter");
const slotsRouter = require("./routes/api/slotsRouter");
const ordersRouter = require("./routes/api/ordersRouter");
const customerRouter = require("./routes/api/customerRouter");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

var allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

const checkAuth = require("./middlewares/check-auth");

mongoose.connect("mongodb://localhost:27017/heyevents", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

app.use("/api/items", categoryRouter);

app.use("/api/vendor", vendorRouter);
app.use("/api/slider", sliderRouter);
app.use("/api/banner", bannerRouter);
app.use("/api/user", userRouter);
app.use("/api/slots", slotsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/customers", customerRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port 5000"));
