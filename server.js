import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request body
app.use(express.json());

// Insurance data
// import { insuranceOptions } from "./data/company-data.js";

const insuranceOptions = [
  {
    id: 1,
    company: "SafeHealth",
    cover: "Basic Cover",
    basePremium: 200,
    salaryRange: [3000, 6000],
  },
  {
    id: 2,
    company: "HealthFirst",
    cover: "Standard Cover",
    basePremium: 350,
    salaryRange: [5000, 10000],
  },
  {
    id: 3,
    company: "MedSecure",
    cover: "Premium Cover",
    basePremium: 500,
    salaryRange: [8000, 15000],
  },
  {
    id: 4,
    company: "LifeCare",
    cover: "Premium Plus",
    basePremium: 700,
    salaryRange: [12000, 20000],
  },
  // Add more options...
  {
    id: 5,
    company: "WellGuard",
    cover: "Comprehensive Cover",
    basePremium: 600,
    salaryRange: [10000, 18000],
  },
  {
    id: 6,
    company: "SecureShield",
    cover: "Executive Cover",
    basePremium: 800,
    salaryRange: [15000, 25000],
  },
  {
    id: 7,
    company: "HealthPlus",
    cover: "Gold Cover",
    basePremium: 900,
    salaryRange: [12000, 22000],
  },
  {
    id: 8,
    company: "LifeGuardian",
    cover: "Family Cover",
    basePremium: 1000,
    salaryRange: [20000, 30000],
  },
  {
    id: 9,
    company: "TotalCare",
    cover: "Ultimate Cover",
    basePremium: 1200,
    salaryRange: [25000, 40000],
  },
  {
    id: 10,
    company: "EcoHealth",
    cover: "Green Cover",
    basePremium: 300,
    salaryRange: [4000, 8000],
  },
  {
    id: 11,
    company: "SecureLife",
    cover: "Secure Cover",
    basePremium: 450,
    salaryRange: [6000, 12000],
  },
  {
    id: 12,
    company: "PrimeHealth",
    cover: "Prime Cover",
    basePremium: 550,
    salaryRange: [9000, 16000],
  },
  {
    id: 13,
    company: "CareFirst",
    cover: "Care Cover",
    basePremium: 750,
    salaryRange: [14000, 22000],
  },
  {
    id: 14,
    company: "GuardianLife",
    cover: "Guardian Cover",
    basePremium: 850,
    salaryRange: [18000, 28000],
  },
  {
    id: 15,
    company: "EliteCare",
    cover: "Elite Cover",
    basePremium: 1100,
    salaryRange: [22000, 35000],
  },
  {
    id: 16,
    company: "SafeShield",
    cover: "Shield Cover",
    basePremium: 950,
    salaryRange: [17000, 27000],
  },
  {
    id: 17,
    company: "WellnessPlus",
    cover: "Wellness Cover",
    basePremium: 1050,
    salaryRange: [19000, 30000],
  },
  {
    id: 18,
    company: "PremiumHealth",
    cover: "Premium Cover",
    basePremium: 1250,
    salaryRange: [26000, 40000],
  },
  {
    id: 19,
    company: "FamilyCare",
    cover: "Family Cover",
    basePremium: 1500,
    salaryRange: [30000, 45000],
  },
  {
    id: 20,
    company: "SecureFuture",
    cover: "Future Cover",
    basePremium: 1350,
    salaryRange: [28000, 42000],
  },
  {
    id: 21,
    company: "LifeSaver",
    cover: "Saver Cover",
    basePremium: 800,
    salaryRange: [15000, 25000],
  },
  {
    id: 22,
    company: "CompleteCare",
    cover: "Complete Cover",
    basePremium: 1150,
    salaryRange: [23000, 38000],
  },
  {
    id: 23,
    company: "GoldHealth",
    cover: "Gold Cover",
    basePremium: 1400,
    salaryRange: [28000, 45000],
  },
  {
    id: 24,
    company: "SilverShield",
    cover: "Silver Cover",
    basePremium: 1000,
    salaryRange: [20000, 32000],
  },
  {
    id: 25,
    company: "SuperLife",
    cover: "Super Cover",
    basePremium: 1600,
    salaryRange: [35000, 50000],
  },
  {
    id: 26,
    company: "SecureCare",
    cover: "Secure Cover",
    basePremium: 1300,
    salaryRange: [26000, 42000],
  },
  {
    id: 27,
    company: "PrimeGuard",
    cover: "Prime Cover",
    basePremium: 1750,
    salaryRange: [32000, 50000],
  },
  {
    id: 28,
    company: "LifeProtect",
    cover: "Protect Cover",
    basePremium: 1850,
    salaryRange: [36000, 55000],
  },
  {
    id: 29,
    company: "HealthEssential",
    cover: "Essential Cover",
    basePremium: 1950,
    salaryRange: [38000, 60000],
  },
  {
    id: 30,
    company: "SecurePlus",
    cover: "Plus Cover",
    basePremium: 2100,
    salaryRange: [40000, 65000],
  },
];

// Age group premium multipliers
const agePremiumRates = {
  "0-12": 0.5, // 50% of base premium
  "13-24": 0.75, // 75% of base premium
  "25-40": 1.0, // 100% (full base premium)
  "41-60": 1.5, // 150% (higher risk)
};

// Function to determine age group
const getAgeGroup = (age) => {
  if (age >= 0 && age <= 12) return "0-12";
  if (age >= 13 && age <= 24) return "13-24";
  if (age >= 25 && age <= 40) return "25-40";
  if (age >= 41 && age <= 60) return "41-60";
  return null; // If age is out of range
};

// API endpoint
app.post("/api/insurance-options", (req, res) => {
  const { salary, people } = req.body;

  console.log("Received request:", { salary, people });

  // Validate salary input
  if (!salary || isNaN(salary)) {
    return res.status(400).json({ error: "Invalid salary" });
  }

  // Filter plans based on salary range
  const eligibleOptions = insuranceOptions.filter(
    (option) =>
      salary >= option.salaryRange[0] && salary <= option.salaryRange[1]
  );

  if (eligibleOptions.length === 0) {
    return res
      .status(404)
      .json({ error: "No insurance plans available for this salary range" });
  }

  // Calculate total premium based on people added
  const peopleDetails = people
    .map((person) => {
      const ageGroup = getAgeGroup(person.age);
      if (!ageGroup) return null;
      return {
        ...person,
        ageGroup,
        premiumMultiplier: agePremiumRates[ageGroup],
      };
    })
    .filter(Boolean); // Remove any invalid ages

  // Calculate the final monthly premium for each plan
  const finalOptions = eligibleOptions.map((option) => {
    let totalPremium = option.basePremium; // Start with base premium

    peopleDetails.forEach((person) => {
      totalPremium += option.basePremium * person.premiumMultiplier;
    });

    return {
      ...option,
      totalPremium: Math.round(totalPremium * 100) / 100, // Round to 2 decimal places
      peopleAdded: peopleDetails,
    };
  });

  // Sort by the lowest total premium and return the top 3
  const topOptions = finalOptions
    .sort((a, b) => a.totalPremium - b.totalPremium)
    .slice(0, 3);

  console.log("Sending response:", topOptions);
  res.json(topOptions);
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
