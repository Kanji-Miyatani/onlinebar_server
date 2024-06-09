import express, { Request } from 'express';

const app : express.Express = express();
app.get("/", (req : express.Request,res :express.Response) => {
    console.log("request listened.")
    res.send("aaa");
})
app.get("/login", (req : express.Request,res :express.Response) => {
   
})
app.listen(3000 ,() => {
    console.log("Start on port 3000.");
   
});