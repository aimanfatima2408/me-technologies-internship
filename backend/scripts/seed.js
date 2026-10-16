require("dotenv").config();

const connectDB = require("../config/db");
const mongoose = require("mongoose");

const Service = require("../models/Service");
const Course = require("../models/Course");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// Six engineering services
const services = [
  {
    title: "Electrical Engineering",
    slug: "electrical-engineering",
    icon: "zap",
    shortText: "Electrical engineering design and consultancy services.",
    description:
      "ME Technologies provides electrical engineering solutions for building and industrial projects, including electrical system design and technical documentation.",
    order: 1,
  },
  {
    title: "Solar PV Design",
    slug: "solar-pv",
    icon: "sun",
    shortText: "Solar PV design, layouts, and system planning.",
    description:
      "Solar PV services include system design, performance planning, and 2D and 3D layouts and drawings to support solar energy projects.",
    order: 2,
  },
  {
    title: "Battery Energy Storage Systems",
    slug: "battery-energy-storage",
    icon: "battery-charging",
    shortText: "Battery energy storage design and planning.",
    description:
      "Battery Energy Storage System (BESS) services support energy storage planning and the integration of storage solutions into electrical systems.",
    order: 3,
  },
  {
    title: "EV Charging",
    slug: "ev-charging",
    icon: "plug",
    shortText: "Electric vehicle charging system solutions.",
    description:
      "EV charging services support the planning and design of charging infrastructure for electric vehicles.",
    order: 4,
  },
  {
    title: "Architecture and Building Design",
    slug: "architecture-building-design",
    icon: "building-2",
    shortText: "Architectural planning and building design.",
    description:
      "Architecture and building design services cover building layouts, design development, and supporting drawings for construction projects.",
    order: 5,
  },
  {
    title: "Civil and Structural Engineering",
    slug: "civil-structural-engineering",
    icon: "landmark",
    shortText: "Civil and structural engineering solutions.",
    description:
      "Civil and structural engineering services support building and infrastructure projects through structural planning, design, and technical documentation.",
    order: 6,
  },
];

// Solar Design Training course
const courses = [
  {
    title: "Solar Design Training",
    slug: "solar-design-training",
    tools: ["PVsyst", "SketchUp"],
    duration: "To be announced",
    fee: 0,
    outline: [
      "Solar PV system design fundamentals",
      "PVsyst system simulation and performance analysis",
      "SketchUp 3D modeling",
      "Solar structure design",
    ],
    image: "",
  },
];

async function seedData() {
  try {
    await connectDB();

    // Create or update the development admin account
    const adminEmail = "admin@metechnologies.com";

    
const adminPassword = process.env.ADMIN_PASSWORD;

if (!adminPassword) {
  throw new Error("ADMIN_PASSWORD is missing from .env");
}

const passwordHash = await bcrypt.hash(adminPassword, 10);


    await Admin.findOneAndUpdate(
      { email: adminEmail },
      {
        name: "ME Technologies Admin",
        email: adminEmail,
        passwordHash,
        role: "admin",
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    console.log(
      "Admin account created or updated successfully!"
    );

    // Seed the six engineering services
    for (const service of services) {
      await Service.findOneAndUpdate(
        { slug: service.slug },
        service,
        {
          upsert: true,
          new: true,
          runValidators: true,
          setDefaultsOnInsert: true,
        }
      );
    }

    console.log("Six services seeded successfully!");

    // Seed the Solar Design Training course
    for (const course of courses) {
      await Course.findOneAndUpdate(
        { slug: course.slug },
        course,
        {
          upsert: true,
          new: true,
          runValidators: true,
          setDefaultsOnInsert: true,
        }
      );
    }

    console.log("Solar Design course seeded successfully!");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedData();
