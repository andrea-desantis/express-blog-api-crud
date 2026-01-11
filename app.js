import express from "express";


import postsRouter from "./routers/posts.js";

import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js"


const app = express();
const port = 3000;



// express
app.use(express.json());
app.use(express.static('public'));


app.get("/", (req, res) => {
    res.send("Server del mio blog");
});



// router dei post
app.use("/posts", postsRouter);

// i middlewares vanno messi dopo le route perché 
// essendo express a cascata, se messi PRIMA delle route
// darebbero sempre errore poiche il programma legge prima 
// l'errore che il path



// middlewares errors handler
app.use(errorHandler);

// middleware not found
app.use(notFound);

app.listen(port, () => {
    console.log("funziona");
});
