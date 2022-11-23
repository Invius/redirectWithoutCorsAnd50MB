import express from "express";
/* import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser'; */

//dotenv.config();

const app = express();
//app.use(cors());

const port = 80;

/* app.use(express.raw({
  inflate: true,
  limit: '50mb',
  type: () => true, // this matches all content types
}));

app.use(bodyParser.json({limit: '50mb'})); 

app.get("*", function (req, res) {
  //res.send(req.url + " : " + process.env.API_TO_REDIRECT);

  res.redirect(`${process.env.API_TO_REDIRECT}${req.url}`);
});

app.post("*", function (req, res) {
  //res.send(req.url + " : " + process.env.API_TO_REDIRECT);

  res.redirect(307, `${process.env.API_TO_REDIRECT}${req.url}`);
});*/

app.get("/", function (req, res) {
  //res.send(req.url + " : " + process.env.API_TO_REDIRECT);

  //res.redirect(`${process.env.API_TO_REDIRECT}${req.url}`);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
