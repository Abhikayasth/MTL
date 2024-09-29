import dotenv from "dotenv";
dotenv.config();
import {app} from "./app.js";
// import ConnectDB from "./db/index.js";

app.get("/",(req,res)=>{
    res.send("Hello World")
});

app.on("error",()=>{
    console.log(error);    
})

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})