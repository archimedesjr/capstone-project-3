import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/signin", (req, res) => {
  res.render("signin.ejs")
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/faqs", (req, res) => {
  res.render("faqs.ejs");
});

app.post("/welcome", (req, res) => {
  const password = req.body["password"];
  const email = req.body["email"];
  if (password === "12345678" && email === "webdev@email.com") {
    res.render("welcome.ejs");
  }
  else
    res.render("signin.ejs");
});

app.post("/trending-gist", (req, res) => {
  const postTopic = req.body["topic"];
  const postNiche = req.body["niche"];
  const bodyOfWork = req.body["message"];
  const email = req.body["email"];
  const phoneNumber = req.body["phone"];
  const writerFullname = req.body["fname"]+" "+req.body["lname"]
  res.render("index.ejs", {
    topic: postTopic,
    niche: postNiche,
    author: writerFullname,
    content: bodyOfWork,
    mail: email,
    phone: phoneNumber,
  });
})

app.get("/trending-gist", (req, res) => {
  res.render("index.ejs");
})

app.get("/write", (req, res) => {
  const { fname, lname, email, phone, topic, niche, message } = req.query; // Get query parameters
  res.render("newpost.ejs", { fname, lname, email, phone, topic, niche, message }); // Pass to EJS
});

app.get("/delete", (req, res) => {
  res.render("index.ejs");
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});