const express = require("express");
const morgan = require("morgan");
require("dotenv").config()
const { mongoConnect } = require('./config/dbConnect.js')
const authRouter = require("./routes/authRoutes.js")
const userRouter = require("./routes/userRoutes.js");
const { verifyToken } = require("./middlewares/authMiddleware.js");


mongoConnect(process.env.url);

const app = express();
const PORT = process.env.PORT || 9000;

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use("/api", authRouter);
app.use("/users",verifyToken, userRouter)

//Start server
app.listen(PORT, () => {
    console.log(`server running on port number ${PORT}`)
})

