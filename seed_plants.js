require("dotenv").config();
const mongoose = require("mongoose");
const Plant = require("./Plant");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/herbal");

// Plant seed data from herbal_plants_enriched.json
const plantsData = [
  {
    name: "Tulsi",
    scientific_name: "Ocimum tenuiflorum L.",
    type: "Immunity",
    desc: "Boost immunity",
    usage: "Leaves consumed as tea or raw to boost immunity, treat cold, cough, and respiratory infections.",
    benefits: "Immunomodulatory, antibacterial, antiviral, adaptogenic, anti-inflammatory",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Tulsi_%28Ocimum_tenuiflorum%29_in_Hyderabad_W_IMG_6729.jpg/640px-Tulsi_%28Ocimum_tenuiflorum%29_in_Hyderabad_W_IMG_6729.jpg"
  },
  {
    name: "Neem",
    scientific_name: "Azadirachta indica A.Juss.",
    type: "Skin",
    desc: "Good for skin",
    usage: "Leaves paste applied to skin for acne, eczema, and infections. Bark used for dental hygiene.",
    benefits: "Antibacterial, antifungal, anti-inflammatory, blood purifier, insecticidal",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Azadirachta_indica_%28Neem%29_in_Hyderabad_W_IMG_6445.jpg/640px-Azadirachta_indica_%28Neem%29_in_Hyderabad_W_IMG_6445.jpg"
  },
  {
    name: "Turmeric",
    scientific_name: "Curcuma longa L.",
    type: "Immunity",
    desc: "Anti inflammatory",
    usage: "Rhizome powder added to food or milk (golden milk). Used topically for wound healing.",
    benefits: "Anti-inflammatory, antioxidant, antimicrobial, hepatoprotective, anticancer properties",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Curcuma_longa_roots.jpg/640px-Curcuma_longa_roots.jpg"
  },
  {
    name: "Aloe Vera",
    scientific_name: "Aloe barbadensis Mill.",
    type: "Skin",
    desc: "Good for skin",
    usage: "Gel extracted from leaves applied topically for burns, sunburn, moisturization, and wound healing.",
    benefits: "Skin soothing, anti-inflammatory, wound healing, laxative (latex), antimicrobial",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/640px-Aloe_vera_flower_inset.png"
  },
  {
    name: "Ginger",
    scientific_name: "Zingiber officinale Roscoe",
    type: "Digestion",
    desc: "Helps in digestion and cold",
    usage: "Rhizome used in teas, cooking, and supplements. Relieves nausea, indigestion, and cold symptoms.",
    benefits: "Digestive stimulant, anti-nausea, anti-inflammatory, analgesic, antioxidant",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Zingiber-officinale.jpg/640px-Zingiber-officinale.jpg"
  },
  {
    name: "Ashwagandha",
    scientific_name: "Withania somnifera (L.) Dunal",
    type: "Stress",
    desc: "Reduces stress and improves strength",
    usage: "Root powder consumed with milk or as capsules. Reduces cortisol levels and enhances endurance.",
    benefits: "Adaptogenic, stress-relieving, immunomodulatory, anti-inflammatory, neuroprotective",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Withania_somnifera.jpg/640px-Withania_somnifera.jpg"
  },
  {
    name: "Mint",
    scientific_name: "Mentha spicata L.",
    type: "Digestion",
    desc: "Good for stomach and freshness",
    usage: "Leaves used in teas, chutneys, and mouth fresheners. Relieves indigestion and IBS symptoms.",
    benefits: "Digestive, carminative, antimicrobial, analgesic, cooling, refreshing",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mint-leaves-2007.jpg/640px-Mint-leaves-2007.jpg"
  },
  {
    name: "Giloy",
    scientific_name: "Tinospora cordifolia (Willd.) Miers",
    type: "Immunity",
    desc: "Improves immunity and fights fever",
    usage: "Stem juice or powder taken internally. Used in Ayurveda for fever, dengue, and immune support.",
    benefits: "Immunomodulatory, antipyretic, anti-inflammatory, antioxidant, antidiabetic",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tinospora_cordifolia.jpg/640px-Tinospora_cordifolia.jpg"
  },
  {
    name: "Brahmi",
    scientific_name: "Bacopa monnieri (L.) Wettst.",
    type: "Brain",
    desc: "Improves memory and brain power",
    usage: "Leaves taken as juice, powder or capsules. Used for cognitive enhancement and stress relief.",
    benefits: "Nootropic, memory enhancer, anxiolytic, neuroprotective, adaptogenic",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bacopa_monnieri_2.jpg/640px-Bacopa_monnieri_2.jpg"
  },
  {
    name: "Lemon",
    scientific_name: "Citrus limon (L.) Osbeck",
    type: "Skin",
    desc: "Rich in vitamin C and good for skin",
    usage: "Juice applied topically for skin brightening. Consumed in water for detox and immune support.",
    benefits: "Antioxidant, vitamin C source, skin brightening, antimicrobial, digestive aid",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lemon_%28Citrus_limon%29_whole_and_split.jpg/640px-Lemon_%28Citrus_limon%29_whole_and_split.jpg"
  }
];

// Function to seed data
async function seedPlants() {
  try {
    // Insert plants
    await Plant.insertMany(plantsData);
    console.log("Plants data inserted successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding plants data:", error);
    mongoose.connection.close();
  }
}

// Run the seed function
seedPlants();