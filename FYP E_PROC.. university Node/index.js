const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/product");
const cartRoute = require("./Routes/cart");
const orderRoute = require("./Routes/order");
const stripeRoute = require("./Routes/stripe");
const newsRoute = require("./Routes/news");
const paymentRoute = require("./Routes/payment");
// const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("DB is connected")).catch((err)=>console.log(err))

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/news", newsRoute);
app.use("/api/payments", paymentRoute);


app.listen(process.env.PORT || 4000,()=>{
    console.log("Backend is running");
})





