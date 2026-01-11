import express from "express";
import dino from "./dino.js";

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


// middlewares errors handler
app.use(errorHandler);

// router dei post
app.use("/posts", postsRouter);

// middleware not found
app.use(notFound);

app.listen(port, () => {
    console.log("funziona");
});
