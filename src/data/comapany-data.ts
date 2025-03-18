import { Insurance } from "../types/insurance";

const insuranceOptions: Insurance[] = [
  {
    id: 1,
    company: "SafeHealth",
    cover: "Basic Cover",
    basePremium: 200,
    salaryRange: [3000, 6000],
    description:
      "This Basic Cover offers essential medical protection including consultations, diagnostic tests, and emergency services. It is tailored for individuals seeking affordable coverage with fundamental benefits.",
    coverageLimit: 50000, // Maximum amount covered per claim
    deductible: 500, // Amount to be paid out of pocket before insurance kicks in
    coPay: "10%", // Percentage the insured pays for each claim
    waitingPeriod: "30 days", // Time before non-emergency benefits become available
    additionalBenefits: [
      "Annual health check-up",
      "Telemedicine consultations",
      "Discounts on specialist visits",
    ],
    networkHospitals: [
      "City Hospital",
      "Community Medical Center",
      "Regional Health Clinic",
    ],
    claimProcess:
      "Claims can be submitted online or via authorized agents. Required documents include receipts and medical reports.",
    eligibilityCriteria:
      "Open to applicants aged 18-65 years with a monthly salary within the specified range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.2, // Average customer rating out of 5
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4,
        comment:
          "Affordable and straightforward coverage. The claim process was hassle-free.",
      },
      {
        reviewer: "Jane Smith",
        rating: 4.5,
        comment:
          "Reliable service and a good network of hospitals. Great for basic health needs.",
      },
    ],
  },
  {
    id: 2,
    company: "HealthFirst",
    cover: "Standard Cover",
    basePremium: 350,
    salaryRange: [5000, 10000],
    description:
      "HealthFirst Standard Cover offers balanced medical protection with a broader range of benefits, covering consultations, diagnostic tests, and hospital admissions. Ideal for individuals looking for comprehensive coverage without breaking the bank.",
    coverageLimit: 75000,
    deductible: 750,
    coPay: "15%",
    waitingPeriod: "45 days",
    additionalBenefits: [
      "Preventive care services",
      "Free annual health screening",
      "Telemedicine access",
    ],
    networkHospitals: [
      "Metro Hospital",
      "Central Clinic",
      "Downtown Medical Center",
    ],
    claimProcess:
      "Submit claims via the online portal with supporting documents. Approval typically takes 5-7 business days.",
    eligibilityCriteria:
      "Applicants between 18-65 years with a stable income and within the defined salary range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.3,
    reviews: [
      {
        reviewer: "Alice Johnson",
        rating: 4,
        comment: "Comprehensive and reasonably priced, great for families.",
      },
      {
        reviewer: "Bob Martin",
        rating: 4.5,
        comment: "Efficient claim process and good network coverage.",
      },
    ],
  },
  {
    id: 3,
    company: "MedSecure",
    cover: "Premium Cover",
    basePremium: 500,
    salaryRange: [8000, 15000],
    description:
      "MedSecure Premium Cover provides an extensive range of services including specialist consultations, advanced diagnostic tests, and extended hospital coverage. This plan is perfect for those who require enhanced medical care.",
    coverageLimit: 100000,
    deductible: 1000,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Specialist consultations without referrals",
      "Discounts on elective procedures",
      "Access to premium health networks",
    ],
    networkHospitals: [
      "Premium Medical Center",
      "Elite Hospital",
      "Advanced Care Clinic",
    ],
    claimProcess:
      "Claims can be filed online. Typical processing time is 3-5 business days.",
    eligibilityCriteria:
      "Suitable for individuals aged 25-65 with a mid to high income bracket.",
    policyTerm: "1-year renewable policy with multi-year discount options",
    customerRating: 4.5,
    reviews: [
      {
        reviewer: "Michael Brown",
        rating: 4.5,
        comment: "Excellent coverage and fast claim settlement process.",
      },
      {
        reviewer: "Sara Lee",
        rating: 4.6,
        comment: "The premium is justified by the range of benefits offered.",
      },
    ],
  },
  {
    id: 4,
    company: "LifeCare",
    cover: "Premium Plus",
    basePremium: 700,
    salaryRange: [12000, 20000],
    description:
      "LifeCare Premium Plus is designed for individuals seeking top-tier healthcare coverage, including critical illness benefits, advanced treatments, and superior hospital networks.",
    coverageLimit: 150000,
    deductible: 1500,
    coPay: "5%",
    waitingPeriod: "20 days",
    additionalBenefits: [
      "Critical illness cover",
      "Wellness programs",
      "Personal health advisor services",
    ],
    networkHospitals: [
      "Elite Health Center",
      "City Premier Hospital",
      "Advanced LifeCare Clinic",
    ],
    claimProcess:
      "Claims are processed swiftly online with priority service for Premium Plus members.",
    eligibilityCriteria:
      "For adults aged 30-65 with a proven track record of stable employment.",
    policyTerm: "1-year renewable policy with loyalty benefits",
    customerRating: 4.7,
    reviews: [
      {
        reviewer: "Emma Watson",
        rating: 4.8,
        comment: "Exceptional service and comprehensive coverage.",
      },
      {
        reviewer: "Liam Smith",
        rating: 4.6,
        comment:
          "Highly recommend for those who want premium healthcare benefits.",
      },
    ],
  },
  {
    id: 5,
    company: "WellGuard",
    cover: "Comprehensive Cover",
    basePremium: 600,
    salaryRange: [10000, 18000],
    description:
      "WellGuard Comprehensive Cover offers a robust range of benefits including regular health check-ups, specialist consultations, and emergency care services. This plan is designed for proactive individuals who prioritize long-term health.",
    coverageLimit: 80000,
    deductible: 800,
    coPay: "12%",
    waitingPeriod: "40 days",
    additionalBenefits: [
      "Routine health screenings",
      "Discount on wellness products",
      "24/7 helpline support",
    ],
    networkHospitals: [
      "Regional Health Center",
      "Community Hospital",
      "WellGuard Clinic",
    ],
    claimProcess:
      "Easy online claims submission with a turnaround time of 5-7 business days.",
    eligibilityCriteria:
      "Open to individuals aged 18-60 with an income within the specified range.",
    policyTerm: "1-year renewable policy with flexible options",
    customerRating: 4.4,
    reviews: [
      {
        reviewer: "Olivia Brown",
        rating: 4.5,
        comment: "The plan offers a great balance between cost and coverage.",
      },
      {
        reviewer: "Noah Davis",
        rating: 4.3,
        comment: "Solid benefits and reliable claim support.",
      },
    ],
  },
  {
    id: 6,
    company: "SecureShield",
    cover: "Executive Cover",
    basePremium: 800,
    salaryRange: [15000, 25000],
    description:
      "SecureShield Executive Cover delivers premium healthcare services tailored for executives. With priority access to top medical facilities and personalized services, this plan is ideal for high-level professionals.",
    coverageLimit: 120000,
    deductible: 1200,
    coPay: "10%",
    waitingPeriod: "35 days",
    additionalBenefits: [
      "Priority consultations",
      "Personalized health management",
      "Concierge medical services",
    ],
    networkHospitals: [
      "Executive Medical Center",
      "Capital Health Clinic",
      "Premium Executive Hospital",
    ],
    claimProcess:
      "Claims are managed through a dedicated service team to ensure fast and hassle-free processing.",
    eligibilityCriteria:
      "Targeted at professionals aged 30-65 with a high income bracket.",
    policyTerm: "1-year renewable policy with additional executive perks",
    customerRating: 4.6,
    reviews: [
      {
        reviewer: "Daniel Wilson",
        rating: 4.5,
        comment: "Efficient and premium service, worth the extra cost.",
      },
      {
        reviewer: "Sophia Martinez",
        rating: 4.7,
        comment: "Highly personalized and top-notch coverage.",
      },
    ],
  },
  {
    id: 7,
    company: "HealthPlus",
    cover: "Gold Cover",
    basePremium: 900,
    salaryRange: [12000, 22000],
    description:
      "HealthPlus Gold Cover offers extensive medical services with added benefits such as wellness programs, comprehensive diagnostics, and enhanced hospital coverage. It's a well-rounded plan for those seeking quality healthcare.",
    coverageLimit: 100000,
    deductible: 900,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Comprehensive diagnostic tests",
      "Wellness program discounts",
      "Access to premium labs",
    ],
    networkHospitals: [
      "Gold Health Hospital",
      "City Care Center",
      "Advanced Diagnostic Clinic",
    ],
    claimProcess: "Claims are processed online with real-time tracking.",
    eligibilityCriteria:
      "Suitable for individuals aged 25-65 with a moderate to high income.",
    policyTerm: "1-year renewable policy with loyalty rewards",
    customerRating: 4.5,
    reviews: [
      {
        reviewer: "Isabella Green",
        rating: 4.5,
        comment: "Great benefits and a smooth claim process.",
      },
      {
        reviewer: "Mason Clark",
        rating: 4.4,
        comment: "Reliable and thorough coverage.",
      },
    ],
  },
  {
    id: 8,
    company: "LifeGuardian",
    cover: "Family Cover",
    basePremium: 1000,
    salaryRange: [20000, 30000],
    description:
      "LifeGuardian Family Cover is designed to provide robust protection for families. This plan includes extensive benefits for multiple family members, ensuring comprehensive healthcare for all ages.",
    coverageLimit: 130000,
    deductible: 1000,
    coPay: "8%",
    waitingPeriod: "25 days",
    additionalBenefits: [
      "Family health check-ups",
      "Pediatric care services",
      "Discounted vaccination programs",
    ],
    networkHospitals: [
      "Family Care Hospital",
      "Community Health Center",
      "Regional Pediatric Clinic",
    ],
    claimProcess:
      "Claims can be submitted online, with expedited processing for family cover members.",
    eligibilityCriteria:
      "Suitable for families with children and adults between 18-65.",
    policyTerm: "1-year renewable policy with family discounts",
    customerRating: 4.6,
    reviews: [
      {
        reviewer: "Charlotte King",
        rating: 4.7,
        comment: "Perfect for our family's needs, highly recommended.",
      },
      {
        reviewer: "Benjamin Lee",
        rating: 4.5,
        comment:
          "A comprehensive plan that caters well to family requirements.",
      },
    ],
  },
  {
    id: 9,
    company: "TotalCare",
    cover: "Ultimate Cover",
    basePremium: 1200,
    salaryRange: [25000, 40000],
    description:
      "TotalCare Ultimate Cover provides extensive benefits, including advanced medical procedures, specialized treatments, and high-limit coverage. Ideal for those seeking a truly comprehensive insurance solution.",
    coverageLimit: 200000,
    deductible: 1500,
    coPay: "7%",
    waitingPeriod: "20 days",
    additionalBenefits: [
      "Access to exclusive medical networks",
      "Comprehensive surgical coverage",
      "Extended post-hospitalization benefits",
    ],
    networkHospitals: [
      "Ultimate Care Hospital",
      "Premier Medical Center",
      "Specialist Clinic",
    ],
    claimProcess:
      "Claims are processed with priority handling and dedicated support.",
    eligibilityCriteria:
      "For individuals aged 30-65 with a high-income bracket.",
    policyTerm: "1-year renewable policy with extensive benefits",
    customerRating: 4.7,
    reviews: [
      {
        reviewer: "Ethan Moore",
        rating: 4.8,
        comment: "Top-notch coverage with excellent support.",
      },
      {
        reviewer: "Ava Johnson",
        rating: 4.6,
        comment: "I feel very secure with this comprehensive plan.",
      },
    ],
  },
  {
    id: 10,
    company: "EcoHealth",
    cover: "Green Cover",
    basePremium: 300,
    salaryRange: [4000, 8000],
    description:
      "EcoHealth Green Cover is focused on sustainable and eco-friendly healthcare solutions. This plan covers basic healthcare needs while promoting preventive measures and environmentally conscious services.",
    coverageLimit: 40000,
    deductible: 300,
    coPay: "15%",
    waitingPeriod: "35 days",
    additionalBenefits: [
      "Eco-friendly health initiatives",
      "Discount on organic wellness products",
      "Preventive health workshops",
    ],
    networkHospitals: [
      "Green Life Clinic",
      "Eco Health Center",
      "Sustainable Care Hospital",
    ],
    claimProcess:
      "Online claim submission with a focus on quick turnaround times.",
    eligibilityCriteria:
      "For individuals aged 18-60 seeking eco-friendly healthcare options.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.3,
    reviews: [
      {
        reviewer: "Liam Brown",
        rating: 4.2,
        comment:
          "Great for eco-conscious individuals. Affordable and sustainable.",
      },
      {
        reviewer: "Mia Wilson",
        rating: 4.4,
        comment:
          "I appreciate the focus on preventive care and environmental responsibility.",
      },
    ],
  },
  {
    id: 11,
    company: "SecureLife",
    cover: "Secure Cover",
    basePremium: 450,
    salaryRange: [6000, 12000],
    description:
      "SecureLife Secure Cover offers reliable health insurance with a focus on essential services. This plan ensures access to quality healthcare and a straightforward claim process.",
    coverageLimit: 60000,
    deductible: 500,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Regular health check-ups",
      "Access to a broad network of clinics",
      "Wellness discounts",
    ],
    networkHospitals: [
      "SecureLife Hospital",
      "Community Health Center",
      "Primary Care Clinic",
    ],
    claimProcess:
      "Online claim filing with a typical response time of 5-7 business days.",
    eligibilityCriteria:
      "Open to applicants aged 18-65 with an income within the specified range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.4,
    reviews: [
      {
        reviewer: "Olivia Turner",
        rating: 4.4,
        comment:
          "Straightforward and dependable, with a seamless claim process.",
      },
      {
        reviewer: "Jack White",
        rating: 4.3,
        comment: "Great for basic coverage with no hidden costs.",
      },
    ],
  },
  {
    id: 12,
    company: "PrimeHealth",
    cover: "Prime Cover",
    basePremium: 550,
    salaryRange: [9000, 16000],
    description:
      "PrimeHealth Prime Cover provides a balanced mix of affordability and comprehensive care. It covers a wide range of services from general consultations to advanced diagnostics.",
    coverageLimit: 70000,
    deductible: 600,
    coPay: "12%",
    waitingPeriod: "40 days",
    additionalBenefits: [
      "Regular preventive screenings",
      "Discounted specialist consultations",
      "Wellness program access",
    ],
    networkHospitals: [
      "PrimeCare Hospital",
      "Downtown Medical Center",
      "Prime Health Clinic",
    ],
    claimProcess:
      "Claims can be submitted online with a processing time of 5-7 business days.",
    eligibilityCriteria:
      "Designed for individuals aged 18-65 with a stable income.",
    policyTerm: "1-year renewable policy with flexible coverage options",
    customerRating: 4.3,
    reviews: [
      {
        reviewer: "Emily Davis",
        rating: 4.3,
        comment: "A good balance of affordability and coverage, very reliable.",
      },
      {
        reviewer: "Christopher Moore",
        rating: 4.4,
        comment: "Excellent plan for those looking for consistent service.",
      },
    ],
  },
  {
    id: 13,
    company: "CareFirst",
    cover: "Care Cover",
    basePremium: 750,
    salaryRange: [14000, 22000],
    description:
      "CareFirst Care Cover offers a wide range of health services including regular check-ups, preventive care, and access to specialized treatments. It’s designed for individuals who value consistent and quality healthcare.",
    coverageLimit: 80000,
    deductible: 800,
    coPay: "10%",
    waitingPeriod: "35 days",
    additionalBenefits: [
      "Priority appointments",
      "Discounts on medications",
      "Access to wellness centers",
    ],
    networkHospitals: [
      "CareFirst Hospital",
      "Specialist Care Center",
      "Community Health Clinic",
    ],
    claimProcess: "Claims can be submitted online with quick turnaround times.",
    eligibilityCriteria:
      "Open to adults aged 18-65 with a monthly salary within the specified range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.5,
    reviews: [
      {
        reviewer: "Sophia Allen",
        rating: 4.5,
        comment: "Excellent service and comprehensive coverage.",
      },
      {
        reviewer: "Ethan Walker",
        rating: 4.4,
        comment: "Very reliable, with great preventive benefits.",
      },
    ],
  },
  {
    id: 14,
    company: "GuardianLife",
    cover: "Guardian Cover",
    basePremium: 850,
    salaryRange: [18000, 28000],
    description:
      "GuardianLife Guardian Cover provides robust medical coverage with a focus on protecting individuals from high-cost medical events. This plan includes a broad network of hospitals and specialized services.",
    coverageLimit: 90000,
    deductible: 850,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Emergency care",
      "Specialist consultations",
      "Preventive health programs",
    ],
    networkHospitals: [
      "Guardian Life Hospital",
      "Regional Medical Center",
      "City Health Clinic",
    ],
    claimProcess: "Claims are processed online with a dedicated support team.",
    eligibilityCriteria:
      "For individuals aged 25-65 with an adequate income level.",
    policyTerm: "1-year renewable policy with potential for upgrades",
    customerRating: 4.4,
    reviews: [
      {
        reviewer: "Lucas Scott",
        rating: 4.4,
        comment: "Good coverage with efficient claim processing.",
      },
      {
        reviewer: "Zoe Adams",
        rating: 4.3,
        comment: "The plan offers excellent protection and customer service.",
      },
    ],
  },
  {
    id: 15,
    company: "EliteCare",
    cover: "Elite Cover",
    basePremium: 1100,
    salaryRange: [22000, 35000],
    description:
      "EliteCare Elite Cover offers top-tier healthcare coverage with extensive benefits including access to premium hospitals, specialist treatments, and personalized health management services.",
    coverageLimit: 130000,
    deductible: 1100,
    coPay: "8%",
    waitingPeriod: "25 days",
    additionalBenefits: [
      "VIP access to premium hospitals",
      "Personal health concierge",
      "Exclusive health events",
    ],
    networkHospitals: [
      "Elite Medical Center",
      "Premier Health Hospital",
      "Advanced Care Clinic",
    ],
    claimProcess:
      "Claims are prioritized and handled through a dedicated executive service.",
    eligibilityCriteria:
      "For high-income individuals aged 30-65 seeking superior healthcare benefits.",
    policyTerm: "1-year renewable policy with premium enhancements",
    customerRating: 4.7,
    reviews: [
      {
        reviewer: "Alexander Green",
        rating: 4.8,
        comment: "Outstanding service and truly exceptional coverage.",
      },
      {
        reviewer: "Victoria Hall",
        rating: 4.7,
        comment: "The elite service makes all the difference.",
      },
    ],
  },
  {
    id: 16,
    company: "SafeShield",
    cover: "Shield Cover",
    basePremium: 950,
    salaryRange: [17000, 27000],
    description:
      "SafeShield Shield Cover provides reliable healthcare protection with a focus on essential services and prompt emergency support. This plan is designed to offer peace of mind with consistent benefits.",
    coverageLimit: 85000,
    deductible: 900,
    coPay: "12%",
    waitingPeriod: "35 days",
    additionalBenefits: [
      "24/7 emergency services",
      "Access to a large network of clinics",
      "Regular wellness check-ups",
    ],
    networkHospitals: [
      "SafeShield Hospital",
      "Community Care Center",
      "Downtown Clinic",
    ],
    claimProcess: "Claims can be filed online with a quick response time.",
    eligibilityCriteria:
      "Suitable for individuals aged 18-65 with an income matching the salary range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.3,
    reviews: [
      {
        reviewer: "Nathan Brooks",
        rating: 4.3,
        comment: "Affordable and reliable, a solid choice for basic coverage.",
      },
      {
        reviewer: "Madison Reed",
        rating: 4.4,
        comment: "Easy claim process and good overall benefits.",
      },
    ],
  },
  {
    id: 17,
    company: "WellnessPlus",
    cover: "Wellness Cover",
    basePremium: 1050,
    salaryRange: [19000, 30000],
    description:
      "WellnessPlus Wellness Cover is focused on promoting overall health and wellness through regular screenings, preventive care, and access to health programs. It is designed for individuals who prioritize a proactive approach to health.",
    coverageLimit: 75000,
    deductible: 700,
    coPay: "10%",
    waitingPeriod: "40 days",
    additionalBenefits: [
      "Comprehensive wellness programs",
      "Discounts on gym memberships",
      "Nutrition and lifestyle counseling",
    ],
    networkHospitals: [
      "WellnessPlus Clinic",
      "Health Center",
      "Regional Wellness Hospital",
    ],
    claimProcess:
      "Claims are managed online with a standard processing time of 5-7 days.",
    eligibilityCriteria:
      "Open to individuals aged 18-65 who are proactive about their health.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.4,
    reviews: [
      {
        reviewer: "Harper Turner",
        rating: 4.5,
        comment:
          "Encourages a healthy lifestyle with excellent preventive care.",
      },
      {
        reviewer: "Evelyn Carter",
        rating: 4.4,
        comment: "A well-rounded plan that supports long-term wellness.",
      },
    ],
  },
  {
    id: 18,
    company: "PremiumHealth",
    cover: "Premium Cover",
    basePremium: 1250,
    salaryRange: [26000, 40000],
    description:
      "PremiumHealth Premium Cover offers a wide range of high-quality healthcare services including advanced diagnostics, specialist consultations, and comprehensive hospital coverage. It is ideal for those seeking extensive and superior coverage.",
    coverageLimit: 110000,
    deductible: 1100,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Access to top-tier specialists",
      "Advanced diagnostic tests",
      "Priority hospital admissions",
    ],
    networkHospitals: [
      "Premium Health Hospital",
      "Elite Medical Center",
      "Advanced Diagnostics Clinic",
    ],
    claimProcess:
      "Claims are processed with a dedicated support team ensuring timely resolution.",
    eligibilityCriteria:
      "Designed for individuals aged 25-65 with a mid to high income.",
    policyTerm: "1-year renewable policy with multi-year discounts",
    customerRating: 4.5,
    reviews: [
      {
        reviewer: "Samuel King",
        rating: 4.5,
        comment: "Exceptional service and extensive coverage.",
      },
      {
        reviewer: "Abigail Scott",
        rating: 4.6,
        comment: "Worth every penny for the comprehensive benefits offered.",
      },
    ],
  },
  {
    id: 19,
    company: "FamilyCare",
    cover: "Family Cover",
    basePremium: 1500,
    salaryRange: [30000, 45000],
    description:
      "FamilyCare Family Cover is crafted to provide robust protection for every family member. This plan offers extensive benefits including routine check-ups, pediatric care, and preventive services to ensure the health of the entire family.",
    coverageLimit: 120000,
    deductible: 1300,
    coPay: "8%",
    waitingPeriod: "25 days",
    additionalBenefits: [
      "Comprehensive pediatric care",
      "Family health check-ups",
      "Vaccination programs",
    ],
    networkHospitals: [
      "FamilyCare Hospital",
      "Community Family Clinic",
      "Pediatric Care Center",
    ],
    claimProcess:
      "Claims can be submitted via the online portal, with expedited service for family plans.",
    eligibilityCriteria:
      "Ideal for families with children, aged 18-65 for adults and 0-17 for dependents.",
    policyTerm: "1-year renewable policy with family discounts",
    customerRating: 4.6,
    reviews: [
      {
        reviewer: "Grace Parker",
        rating: 4.7,
        comment:
          "Perfect for our family, with excellent benefits and a smooth claim process.",
      },
      {
        reviewer: "Ethan Lee",
        rating: 4.5,
        comment: "Covers all our needs and is very affordable.",
      },
    ],
  },
  {
    id: 20,
    company: "SecureFuture",
    cover: "Future Cover",
    basePremium: 1350,
    salaryRange: [28000, 42000],
    description:
      "SecureFuture Future Cover is tailored to meet the evolving healthcare needs of individuals looking towards the future. This plan offers a balance of affordability and extensive benefits to secure long-term health.",
    coverageLimit: 100000,
    deductible: 1000,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Long-term health planning",
      "Preventive care services",
      "Discounts on health supplements",
    ],
    networkHospitals: [
      "SecureFuture Hospital",
      "Modern Health Clinic",
      "Future Care Center",
    ],
    claimProcess:
      "Online claims processing with a commitment to swift resolution.",
    eligibilityCriteria:
      "For individuals aged 25-65 with a focus on future health security.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.4,
    reviews: [
      {
        reviewer: "Henry Wright",
        rating: 4.4,
        comment:
          "Innovative plan with a forward-thinking approach to healthcare.",
      },
      {
        reviewer: "Chloe Brown",
        rating: 4.3,
        comment: "A modern plan that adapts to your changing needs.",
      },
    ],
  },
  {
    id: 21,
    company: "LifeSaver",
    cover: "Saver Cover",
    basePremium: 800,
    salaryRange: [15000, 25000],
    description:
      "LifeSaver Saver Cover provides essential health coverage designed to secure basic healthcare needs. It offers reliable services and prompt claim processing for everyday medical expenses.",
    coverageLimit: 70000,
    deductible: 700,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Basic health check-ups",
      "Discounts on generic medications",
      "24/7 helpline",
    ],
    networkHospitals: [
      "LifeSaver Clinic",
      "City Health Center",
      "Primary Care Hospital",
    ],
    claimProcess: "Claims are processed online within 5-7 business days.",
    eligibilityCriteria:
      "Open to applicants aged 18-65 within the specified salary range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.3,
    reviews: [
      {
        reviewer: "Aiden Miller",
        rating: 4.3,
        comment: "Affordable and reliable, a good basic plan.",
      },
      {
        reviewer: "Zoe Walker",
        rating: 4.2,
        comment: "Meets all my basic healthcare needs without extra cost.",
      },
    ],
  },
  {
    id: 22,
    company: "CompleteCare",
    cover: "Complete Cover",
    basePremium: 1150,
    salaryRange: [23000, 38000],
    description:
      "CompleteCare Complete Cover offers comprehensive health insurance that covers a wide array of medical services from consultations and diagnostics to hospitalization and emergency care.",
    coverageLimit: 110000,
    deductible: 1100,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Full range of medical services",
      "Preventive care and regular screenings",
      "24/7 customer support",
    ],
    networkHospitals: [
      "CompleteCare Hospital",
      "Downtown Medical Center",
      "Community Health Clinic",
    ],
    claimProcess: "Claims can be submitted online with priority handling.",
    eligibilityCriteria:
      "Designed for individuals aged 18-65 with a consistent income.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.4,
    reviews: [
      {
        reviewer: "Lily Adams",
        rating: 4.4,
        comment: "Very comprehensive and dependable coverage.",
      },
      {
        reviewer: "Jacob Martinez",
        rating: 4.3,
        comment: "Covers everything I need and more.",
      },
    ],
  },
  {
    id: 23,
    company: "GoldHealth",
    cover: "Gold Cover",
    basePremium: 1400,
    salaryRange: [28000, 45000],
    description:
      "GoldHealth Gold Cover provides extensive and premium healthcare services including specialized treatments, comprehensive diagnostics, and high-limit coverage. This plan is designed for individuals seeking superior health protection.",
    coverageLimit: 130000,
    deductible: 1200,
    coPay: "8%",
    waitingPeriod: "25 days",
    additionalBenefits: [
      "Access to exclusive specialists",
      "Premium diagnostic services",
      "Personalized care coordination",
    ],
    networkHospitals: [
      "GoldHealth Medical Center",
      "Premier Hospital",
      "Advanced Diagnostic Clinic",
    ],
    claimProcess:
      "Claims are processed online with a dedicated service team ensuring fast turnaround.",
    eligibilityCriteria:
      "For individuals aged 25-65 with a mid to high income.",
    policyTerm: "1-year renewable policy with loyalty incentives",
    customerRating: 4.5,
    reviews: [
      {
        reviewer: "Megan Roberts",
        rating: 4.5,
        comment: "Exceptional coverage and personalized service.",
      },
      {
        reviewer: "Ryan Lee",
        rating: 4.4,
        comment: "The best plan I've ever had, highly recommend it.",
      },
    ],
  },
  {
    id: 24,
    company: "SilverShield",
    cover: "Silver Cover",
    basePremium: 1000,
    salaryRange: [20000, 32000],
    description:
      "SilverShield Silver Cover offers reliable health insurance with a focus on essential medical services. It provides a solid range of benefits for those looking for dependable and affordable coverage.",
    coverageLimit: 90000,
    deductible: 900,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Standard health check-ups",
      "Discounted specialist consultations",
      "24/7 support services",
    ],
    networkHospitals: [
      "SilverShield Hospital",
      "Community Medical Center",
      "Regional Clinic",
    ],
    claimProcess: "Claims are processed online with standard turnaround times.",
    eligibilityCriteria:
      "Ideal for individuals aged 18-65 within the defined salary range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.3,
    reviews: [
      {
        reviewer: "Ava Johnson",
        rating: 4.3,
        comment: "Solid coverage with dependable service.",
      },
      {
        reviewer: "William Brown",
        rating: 4.2,
        comment: "Good value for money and reliable claims process.",
      },
    ],
  },
  {
    id: 25,
    company: "SuperLife",
    cover: "Super Cover",
    basePremium: 1600,
    salaryRange: [35000, 50000],
    description:
      "SuperLife Super Cover offers a premium level of healthcare with extensive benefits, high coverage limits, and priority services. This plan is ideal for individuals who demand superior protection and top-tier services.",
    coverageLimit: 140000,
    deductible: 1300,
    coPay: "7%",
    waitingPeriod: "20 days",
    additionalBenefits: [
      "Priority access to specialists",
      "Advanced diagnostic services",
      "Exclusive wellness programs",
    ],
    networkHospitals: [
      "SuperLife Medical Center",
      "Premier Health Clinic",
      "Elite Hospital",
    ],
    claimProcess:
      "Claims are processed with priority handling and dedicated support.",
    eligibilityCriteria:
      "For individuals aged 30-65 with a high income bracket.",
    policyTerm: "1-year renewable policy with premium benefits",
    customerRating: 4.6,
    reviews: [
      {
        reviewer: "Isabella Martinez",
        rating: 4.6,
        comment: "Excellent service and superior benefits.",
      },
      {
        reviewer: "James Wilson",
        rating: 4.5,
        comment: "The plan truly lives up to its name.",
      },
    ],
  },
  {
    id: 26,
    company: "SecureCare",
    cover: "Secure Cover",
    basePremium: 1300,
    salaryRange: [26000, 42000],
    description:
      "SecureCare Secure Cover provides reliable health coverage with a focus on essential and emergency services. This plan is designed to offer peace of mind with a broad range of benefits and dependable claim support.",
    coverageLimit: 95000,
    deductible: 950,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Basic emergency services",
      "Access to a wide network of healthcare providers",
      "Regular health check-ups",
    ],
    networkHospitals: [
      "SecureCare Hospital",
      "City Health Clinic",
      "Primary Medical Center",
    ],
    claimProcess:
      "Claims can be submitted online with prompt processing times.",
    eligibilityCriteria:
      "Suitable for individuals aged 18-65 within the specified salary range.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.3,
    reviews: [
      {
        reviewer: "Michael Adams",
        rating: 4.3,
        comment: "Solid coverage at a reasonable price.",
      },
      {
        reviewer: "Emily Harris",
        rating: 4.2,
        comment: "A reliable plan with a straightforward claim process.",
      },
    ],
  },
  {
    id: 27,
    company: "PrimeGuard",
    cover: "Prime Cover",
    basePremium: 1750,
    salaryRange: [32000, 50000],
    description:
      "PrimeGuard Prime Cover offers premium healthcare services with a strong focus on preventive care, comprehensive diagnostics, and specialist treatments. This plan is designed for those who value thorough and proactive health management.",
    coverageLimit: 125000,
    deductible: 1500,
    coPay: "8%",
    waitingPeriod: "25 days",
    additionalBenefits: [
      "In-depth preventive care",
      "Regular health screenings",
      "Access to premium specialist networks",
    ],
    networkHospitals: [
      "PrimeGuard Medical Center",
      "Elite Health Clinic",
      "Downtown Diagnostic Center",
    ],
    claimProcess:
      "Claims are processed online with dedicated support for PrimeGuard members.",
    eligibilityCriteria:
      "For individuals aged 25-65 with a focus on proactive health management.",
    policyTerm:
      "1-year renewable policy with additional preventive care benefits",
    customerRating: 4.5,
    reviews: [
      {
        reviewer: "Daniel Carter",
        rating: 4.5,
        comment: "Thorough coverage and excellent preventive care services.",
      },
      {
        reviewer: "Ava Phillips",
        rating: 4.4,
        comment:
          "The plan encourages regular health monitoring, which is a big plus.",
      },
    ],
  },
  {
    id: 28,
    company: "LifeProtect",
    cover: "Protect Cover",
    basePremium: 1850,
    salaryRange: [36000, 55000],
    description:
      "LifeProtect Protect Cover provides high-level healthcare protection with extensive benefits tailored for high-risk individuals. This plan includes advanced treatments and high coverage limits, ensuring maximum security in critical situations.",
    coverageLimit: 140000,
    deductible: 1400,
    coPay: "8%",
    waitingPeriod: "25 days",
    additionalBenefits: [
      "Advanced critical illness coverage",
      "Priority treatment for emergencies",
      "Specialized care programs",
    ],
    networkHospitals: [
      "LifeProtect Hospital",
      "Premier Critical Care Center",
      "Advanced Treatment Clinic",
    ],
    claimProcess:
      "Claims are managed with a high priority to ensure quick and efficient processing.",
    eligibilityCriteria:
      "For individuals aged 30-65 with a focus on high-risk coverage.",
    policyTerm: "1-year renewable policy with enhanced benefits",
    customerRating: 4.6,
    reviews: [
      {
        reviewer: "Evelyn Mitchell",
        rating: 4.6,
        comment: "Provides robust protection in critical situations.",
      },
      {
        reviewer: "Logan Brown",
        rating: 4.5,
        comment: "A reliable plan for high-risk individuals.",
      },
    ],
  },
  {
    id: 29,
    company: "HealthEssential",
    cover: "Essential Cover",
    basePremium: 1950,
    salaryRange: [38000, 60000],
    description:
      "HealthEssential Essential Cover offers comprehensive health protection with a focus on essential medical services. This plan includes benefits that cover routine check-ups, diagnostic tests, and emergency care.",
    coverageLimit: 115000,
    deductible: 1200,
    coPay: "10%",
    waitingPeriod: "30 days",
    additionalBenefits: [
      "Routine health check-ups",
      "Discounts on medical tests",
      "24/7 customer support",
    ],
    networkHospitals: [
      "HealthEssential Hospital",
      "City Medical Center",
      "Regional Health Clinic",
    ],
    claimProcess:
      "Claims are processed online with a focus on customer service.",
    eligibilityCriteria: "Open to individuals aged 18-65 with a stable income.",
    policyTerm: "1-year renewable policy",
    customerRating: 4.4,
    reviews: [
      {
        reviewer: "Chloe Martin",
        rating: 4.4,
        comment: "Covers all my essential health needs effectively.",
      },
      {
        reviewer: "Elijah Robinson",
        rating: 4.3,
        comment: "A reliable plan with good overall coverage.",
      },
    ],
  },
  {
    id: 30,
    company: "SecurePlus",
    cover: "Plus Cover",
    basePremium: 2100,
    salaryRange: [40000, 65000],
    description:
      "SecurePlus Plus Cover provides an extensive range of benefits with high coverage limits and premium services. This plan is designed for those seeking superior healthcare protection and exclusive benefits.",
    coverageLimit: 150000,
    deductible: 1500,
    coPay: "7%",
    waitingPeriod: "20 days",
    additionalBenefits: [
      "Exclusive access to top hospitals",
      "Concierge health services",
      "Advanced diagnostic coverage",
    ],
    networkHospitals: [
      "SecurePlus Hospital",
      "Elite Medical Center",
      "Premier Health Clinic",
    ],
    claimProcess:
      "Claims are processed online with a dedicated executive service for priority handling.",
    eligibilityCriteria:
      "For high-income individuals aged 30-65 looking for premium benefits.",
    policyTerm: "1-year renewable policy with exclusive rewards",
    customerRating: 4.7,
    reviews: [
      {
        reviewer: "Madison Evans",
        rating: 4.7,
        comment: "Truly premium service with unmatched benefits.",
      },
      {
        reviewer: "Benjamin Parker",
        rating: 4.6,
        comment: "Excellent coverage and customer service.",
      },
    ],
  },
];

export { insuranceOptions };
