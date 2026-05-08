require("dotenv").config();
const mongoose = require("mongoose");
const Doctor = require("./Doctor");
const Remedy = require("./Remedy");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/herbal");

// Doctor seed data
const doctorsData = [
  {
    name: "Dr. Sanjay Algude",
    specialization: "Homeopathy & Ayurvedic Medicine",
    experience: "Over 20 years of experience in integrating Homeopathy and Ayurvedic treatments",
    phone: "+91 9850615151",
    img: "", // Placeholder for image URL
  },
  {
    name: "Dr. Amit Sheth",
    specialization: "MBBS, Homeopathy & Herbal Wellness",
    experience: "Combines modern medicine with traditional herbal wellness approaches",
    phone: "+91 8275960639",
    img: "",
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "Ayurvedic Medicine & Panchakarma",
    experience: "Renowned Ayurvedic physician specializing in Panchakarma detoxification therapies",
    phone: "+91 9876543210",
    img: "",
  },
  {
    name: "Dr. Rajesh Kumar",
    specialization: "Naturopathy & Yoga Therapy",
    experience: "Certified Naturopath and Yoga therapist with expertise in treating stress-related disorders",
    phone: "+91 9123456789",
    img: "",
  },
  {
    name: "Dr. Meena Patel",
    specialization: "Herbal Dermatology",
    experience: "Specializes in treating skin conditions using herbal and Ayurvedic formulations",
    phone: "+91 9988776655",
    img: "",
  },
  {
    name: "Dr. Arun Krishnan",
    specialization: "Traditional Siddha Medicine",
    experience: "Expert in Siddha medicine, specializing in respiratory ailments and digestive disorders",
    phone: "+91 9445566778",
    img: "",
  },
];

// Remedy seed data
const remediesData = [
  {
    name: "Tulsi Tea for Cold & Cough",
    type: "cold",
    ingredients: "Tulsi leaves, Ginger, Water, Honey",
    steps: "Boil tulsi leaves and ginger in water for 10 minutes. Strain, add honey, drink warm twice daily.",
    benefit: "Relieves cold and cough symptoms",
  },
  {
    name: "Ginger Tea for Sore Throat",
    type: "cold",
    ingredients: "Ginger slices, Water, Honey, Lemon",
    steps: "Boil ginger in water for 10 minutes. Add honey and lemon. Drink warm to ease throat irritation.",
    benefit: "Soothes sore throat",
  },
  {
    name: "Turmeric Milk for Cold",
    type: "cold",
    ingredients: "Turmeric powder (1 tsp), Warm milk, Black pepper, Honey",
    steps: "Mix turmeric and a pinch of black pepper in warm milk. Add honey to taste. Drink before bed.",
    benefit: "Helps with cold relief",
  },
  {
    name: "Steam Inhalation for Congestion",
    type: "cold",
    ingredients: "Hot water, Eucalyptus oil (2-3 drops)",
    steps: "Add eucalyptus oil to a bowl of hot water. Cover head with towel and inhale steam for 10 minutes.",
    benefit: "Clears nasal congestion",
  },
  {
    name: "Ashwagandha Milk for Stress",
    type: "stress",
    ingredients: "Ashwagandha powder (1 tsp), Warm milk",
    steps: "Mix ashwagandha powder in warm milk. Drink before bed to reduce stress and improve sleep.",
    benefit: "Reduces stress and improves sleep",
  },
  {
    name: "Brahmi Tea for Anxiety",
    type: "stress",
    ingredients: "Brahmi leaves (fresh or dried), Water, Honey",
    steps: "Boil brahmi leaves in water for 5-7 minutes. Strain and add honey. Drink twice daily for mental calm.",
    benefit: "Calms anxiety and promotes mental peace",
  },
  {
    name: "Lavender Aromatherapy",
    type: "stress",
    ingredients: "Lavender essential oil, Diffuser or warm bath",
    steps: "Add 5-6 drops to a diffuser or bath water. Inhale deeply and relax for 20-30 minutes.",
    benefit: "Relieves stress through aromatherapy",
  },
  {
    name: "Ajwain Water for Indigestion",
    type: "digestion",
    ingredients: "Ajwain seeds (1 tsp), Water",
    steps: "Boil ajwain seeds in a glass of water. Strain and drink warm to relieve gas and indigestion.",
    benefit: "Relieves indigestion and gas",
  },
  {
    name: "Jeera Water for Bloating",
    type: "digestion",
    ingredients: "Cumin seeds (1 tsp), Water",
    steps: "Soak cumin seeds in water overnight. Strain and drink in the morning on an empty stomach.",
    benefit: "Reduces bloating",
  },
  {
    name: "Triphala for Constipation",
    type: "digestion",
    ingredients: "Triphala powder (1 tsp), Warm water",
    steps: "Mix triphala powder in warm water. Drink before bed for regular bowel movements.",
    benefit: "Helps with constipation",
  },
  {
    name: "Ginger-Lemon Digestive Tonic",
    type: "digestion",
    ingredients: "Fresh ginger juice (1 tsp), Lemon juice (1 tsp), Warm water, Rock salt",
    steps: "Mix ginger and lemon juice in warm water. Add a pinch of rock salt. Drink before meals.",
    benefit: "Aids digestion",
  },
  {
    name: "Neem Paste for Acne",
    type: "skin",
    ingredients: "Fresh neem leaves, Water",
    steps: "Crush fresh neem leaves into a paste. Apply to affected areas for 15 minutes then rinse.",
    benefit: "Treats acne naturally",
  },
  {
    name: "Aloe Vera Gel for Burns",
    type: "skin",
    ingredients: "Fresh aloe vera leaf",
    steps: "Cut aloe leaf and extract gel. Apply directly to minor burns or skin irritations. Leave for 20 minutes.",
    benefit: "Soothes burns and skin irritations",
  },
  {
    name: "Turmeric Face Mask",
    type: "skin",
    ingredients: "Turmeric powder (1/2 tsp), Gram flour (1 tbsp), Milk or rose water",
    steps: "Mix ingredients into a paste. Apply to face, leave for 15 minutes, rinse with lukewarm water.",
    benefit: "Improves skin glow",
  },
  {
    name: "Sandalwood Paste for Skin Glow",
    type: "skin",
    ingredients: "Sandalwood powder, Rose water",
    steps: "Mix sandalwood powder with rose water to form paste. Apply to face, leave until dry, rinse off.",
    benefit: "Enhances skin glow",
  },
  {
    name: "Clove Oil for Toothache",
    type: "dental",
    ingredients: "Clove oil, Cotton ball",
    steps: "Dab a cotton ball in clove oil and apply to the aching tooth for instant pain relief.",
    benefit: "Relieves toothache pain",
  },
  {
    name: "Salt Water Rinse for Gums",
    type: "dental",
    ingredients: "Warm water, Salt (1/2 tsp)",
    steps: "Dissolve salt in warm water. Rinse mouth thoroughly for 30 seconds. Repeat 2-3 times daily.",
    benefit: "Improves gum health",
  },
  {
    name: "Neem Twig for Oral Health",
    type: "dental",
    ingredients: "Fresh neem twig",
    steps: "Chew the end of a neem twig until soft. Use as a natural toothbrush to clean teeth and gums.",
    benefit: "Promotes oral health",
  },
  {
    name: "Honey + Ginger for Respiratory",
    type: "respiratory",
    ingredients: "Honey (1 tbsp), Ginger juice (1 tsp)",
    steps: "Mix honey and fresh ginger juice. Take once daily to strengthen lungs.",
    benefit: "Strengthens respiratory system",
  },
  {
    name: "Mulethi Tea for Cough",
    type: "respiratory",
    ingredients: "Mulethi (licorice) root, Water, Honey",
    steps: "Boil mulethi root in water for 10 minutes. Strain, add honey, drink warm for cough relief.",
    benefit: "Relieves cough",
  },
  {
    name: "Black Pepper-Honey Syrup",
    type: "respiratory",
    ingredients: "Black pepper powder (1/4 tsp), Honey (1 tbsp)",
    steps: "Mix black pepper in honey. Take once daily for respiratory health and clearing phlegm.",
    benefit: "Clears phlegm and improves respiratory health",
  },
  {
    name: "Tulsi-Ginger Kadha",
    type: "respiratory",
    ingredients: "Tulsi leaves, Ginger, Black pepper, Cloves, Water, Jaggery",
    steps: "Boil all ingredients in water for 15 minutes. Strain, add jaggery. Drink warm twice daily.",
    benefit: "Boosts respiratory health",
  },
  {
    name: "Giloy Juice for Immunity",
    type: "immunity",
    ingredients: "Giloy stem, Water",
    steps: "Boil giloy stem in water, strain, and drink regularly to purify blood and boost immunity.",
    benefit: "Boosts immunity",
  },
  {
    name: "Amla Juice Morning Tonic",
    type: "immunity",
    ingredients: "Fresh amla juice (2 tbsp), Water, Honey",
    steps: "Mix amla juice with water and honey. Drink on empty stomach for vitamin C boost.",
    benefit: "Provides vitamin C and boosts immunity",
  },
  {
    name: "Chyawanprash Daily Dose",
    type: "immunity",
    ingredients: "Chyawanprash (1 tbsp), Warm milk",
    steps: "Take chyawanprash with warm milk daily in winter to boost overall immunity.",
    benefit: "Enhances overall immunity",
  },
  {
    name: "Haldi-Adrak Shot",
    type: "immunity",
    ingredients: "Fresh turmeric juice (1 tsp), Ginger juice (1 tsp), Lemon juice, Honey",
    steps: "Mix all ingredients. Take as a shot every morning for immune support.",
    benefit: "Supports immune system",
  },
];

// Function to seed data
async function seedData() {
  try {
    // Insert doctors
    await Doctor.insertMany(doctorsData);
    console.log("Doctors data inserted successfully");

    // Insert remedies
    await Remedy.insertMany(remediesData);
    console.log("Remedies data inserted successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
}

// Run the seed function
seedData();