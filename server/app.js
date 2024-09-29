import express from "express"
import cors from "cors"
// import cookieParser from "cookie-parser"
import { sendClientDetails } from "./services/mail.js";

const app = new express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))
// app.use(cookieParser())

app.get("/sent-mail", async(req, res) => {
    // const {clientDetails} = req.body;
    const clientDetails = {
        Name: "John Doe",
        Number: "1234567890",
        LoanType: "Home Loan",
        LoanAmount: "250000",
        Email: "johndoe@example.com"
      };
    try{
        await sendClientDetails(clientDetails);
        res.status(200).send("Mail Sent Successfully")
    }
    catch(e){
        console.log(e);
        res.status(500).send("Server Error");
    }
});

export {app}