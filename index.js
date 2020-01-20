import express from "express";

const app = express();

app.use('/', (r, re, n) => {
    return re.json({hello: "hi"});
})

app.listen(8080);

