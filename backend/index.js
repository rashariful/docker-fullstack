import express from "express"
import cors from "cors"
const app = express()
app.use (express.json())
app.use(cors())


// api routes
app.get("/", (req, res) => {
  res.send("Server OK 🔥");
});

app.get("/api/message", (req, res)=>{
    res.json({
        message: "hello world new message frombackend"
    })
})

const port = 5000
app.listen(port, "0.0.0.0", () => {
  console.log("server running on 5000");
});
