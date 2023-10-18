import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectMongoose } from "./util/connectMongoose.js";
import phoneBookRouter from "./routes/phoneRouter.js"
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: ['http://localhost:4004', 'http://localhost:5173'],
      credentials: true,
    })
  );


// Routes
app.use('/api',userRouter)
app.use('/api',phoneBookRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log('im error middleware,', err);
  res.status(err.status || err.statusCode || 500).send({
    error: {
      status: err.status || err.statusCode,
      message: err.message || 'Internal Server Error',
    },
  });
});
const PORT = process.env.PORT || 4000;

const mongooseConnected = await connectMongoose();

if (mongooseConnected) {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
} else {
  console.error("Database connection did'n work :(");
}
