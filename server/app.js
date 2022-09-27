// hIi45Se2uWJnrDh0
import express from "express"
import mongoose from "mongoose"
import router from "./routes/book-routes.js"
import cors from 'cors'
const app = express()

const port = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors())
app.use("/books", router)

// DB Connection
mongoose.connect("mongodb+srv://admin:hIi45Se2uWJnrDh0@cluster0.qaerqsq.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Database connection successful")).catch((e) => console.log(e))

app.listen(port, () => console.log("Listening at the port"));