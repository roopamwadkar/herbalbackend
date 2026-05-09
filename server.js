require("dotenv").config();
const express = require("express")
const fs = require("fs")
const cors = require("cors")
const mongoose = require("mongoose")

const Doctor = require("./Doctor")
const Remedy = require("./Remedy")
const Plant = require("./Plant")
const Feedback = require("./Feedback")
const User = require("./User")

const app = express()

app.use(cors())
app.use(express.json())

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/herbal";
mongoose.set("strictQuery", false);

mongoose.connect(mongoUri, {
  dbName: "herbal",
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message || err);
    console.error(
      "Atlas connection failed. Check your IP whitelist, password, and network access."
    );
  });

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error event:", err.message || err);
});

app.post("/signup", async (req,res)=>{
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({msg:"User saved"});
  } catch (err) {
    res.status(500).json({ error: "Failed to save user" });
  }
})



/* ---------- LOGIN ---------- */

app.post("/login", async (req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({msg:"ok"});
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
})



/* ---------- GET PLANTS ---------- */

app.get("/plants", async (req,res)=>{
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch plants" });
  }
})



/* ---------- ADD PLANT ---------- */

app.post("/addPlant", async (req,res)=>{
  try {
    const newPlant = new Plant(req.body);
    await newPlant.save();
    res.json({msg:"Plant added"});
  } catch (err) {
    res.status(500).json({ error: "Failed to add plant" });
  }
})



app.listen(5000, () => {
  console.log("Server running")
})

app.get("/remedies", async (req,res)=>{
  try {
    const remedies = await Remedy.find();
    res.json(remedies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch remedies" });
  }
})

app.post("/addRemedy", async (req,res)=>{
  try {
    const newRemedy = new Remedy(req.body);
    await newRemedy.save();
    res.json({msg:"Remedy added"});
  } catch (err) {
    res.status(500).json({ error: "Failed to add remedy" });
  }
})


//------------doctor
app.get("/doctors", async (req,res)=>{
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
})
app.post("/addDoctor", async (req,res)=>{
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.json({msg:"Doctor added"});
  } catch (err) {
    res.status(500).json({ error: "Failed to add doctor" });
  }
})

//------------feedback
app.post("/addFeedback", async (req,res)=>{
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.json({msg:"Feedback saved"});
  } catch (err) {
    res.status(500).json({ error: "Failed to save feedback" });
  }
})

app.get("/feedbacks", async (req,res)=>{
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
})