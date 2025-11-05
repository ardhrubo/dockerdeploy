import express from "express"
import cors from "cors"

const app = express() 

app.use(express.json())
app.use(cors(
{
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        "http://206.189.92.237:5174",

    ],
    credentials: true,
    methods:["GET","POST"],
    allowedHeaders: ["Content-Type", "Authorization"]

}
))

// route

app.get("/api/test",(req,res)=>{
    res.json({
        message: "this is testing"
    })
})

const PORT = 4000


app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})

