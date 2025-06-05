import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { defaultUsers } from "../shared/auth-schema";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Development: serve from client directory, Production: serve from dist
  if (process.env.NODE_ENV === "development") {
    const clientPath = path.join(__dirname, "..", "client");
    app.use(express.static(clientPath));
  } else {
    app.use(express.static(path.join(__dirname, "../dist/public")));
  }

  // Authentication Routes
  app.post("/api/auth/login", (req, res) => {
    const { uniqueId, passcode } = req.body;
    
    const user = defaultUsers.find(u => u.uniqueId === uniqueId && u.passcode === passcode);
    
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    // Return user without passcode
    const { passcode: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  });

  // API Routes for School Management
  
  // School Configuration
  app.get("/api/school-config", (req, res) => {
    res.json({
      success: true,
      config: {
        schoolName: "SmartGenEduX Demo School",
        logoUrl: "",
        primaryColor: "#3b82f6",
        secondaryColor: "#1e40af",
        motto: "Excellence in Education",
        address: "123 Education Street, Academic City, State - 123456",
        phone: "+91 98765 43210",
        email: "admin@smartgenedux.com",
        website: "www.smartgenedux.com",
        principalName: "Dr. Principal Singh",
        establishedYear: "1995",
        msmeNumber: "UDYAM-TN-34-0088173",
        affiliationBoard: "CBSE"
      }
    });
  });

  app.post("/api/school-config", (req, res) => {
    const config = req.body;
    // In production, save to database
    res.json({ success: true, message: "School configuration updated successfully" });
  });

  // Dashboard Statistics
  app.get("/api/dashboard/stats", (req, res) => {
    res.json({
      totalStudents: 5247,
      totalTeachers: 187,
      totalClasses: 156,
      pendingFees: "₹12,45,890",
      monthlyCollection: "₹45,67,230",
      attendanceRate: 94.5,
      examScheduled: 23,
      substitutionsToday: 8
    });
  });

  // Authentication Routes
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    
    // Demo credentials for different roles
    const users = {
      "principal@smartgenedux.com": { role: "principal", name: "Dr. Principal Singh" },
      "admin@smartgenedux.com": { role: "admin", name: "Admin User" },
      "teacher@smartgenedux.com": { role: "teacher", name: "Teacher User" },
      "accountant@smartgenedux.com": { role: "accountant", name: "Accountant User" }
    };

    if (users[email as keyof typeof users] && password === "password123") {
      const user = users[email as keyof typeof users];
      res.json({
        success: true,
        user: { email, ...user },
        token: "demo-token-" + Date.now()
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
  });

  // Fee Management Routes
  app.get("/api/fees/overview", (req, res) => {
    res.json({
      totalCollected: "₹45,67,230",
      totalPending: "₹12,45,890",
      monthlyTarget: "₹50,00,000",
      collectionRate: 91.3,
      recentPayments: [
        { id: 1, studentName: "Arjun Sharma", amount: "₹15,000", class: "10-A", date: "2024-12-06" },
        { id: 2, studentName: "Priya Patel", amount: "₹12,500", class: "9-B", date: "2024-12-06" },
        { id: 3, studentName: "Karan Singh", amount: "₹18,000", class: "11-C", date: "2024-12-05" }
      ]
    });
  });

  // Student Management Routes
  app.get("/api/students", (req, res) => {
    res.json({
      students: [
        { id: 1, name: "Arjun Sharma", class: "10-A", rollNo: "001", feeStatus: "Paid" },
        { id: 2, name: "Priya Patel", class: "9-B", rollNo: "002", feeStatus: "Pending" },
        { id: 3, name: "Karan Singh", class: "11-C", rollNo: "003", feeStatus: "Paid" }
      ]
    });
  });

  // AI VIPU Routes
  app.get("/api/ai/vipu/stats", (req, res) => {
    res.json({
      vipuStudents: 127,
      aiAccuracy: 94.8,
      improvementRate: 87,
      activeInterventions: 342
    });
  });

  app.get("/api/ai/vipu/students", (req, res) => {
    res.json({
      students: [
        {
          name: "Arjun Sharma",
          class: "10-A",
          category: "Academic Excellence",
          score: 94.8,
          strengths: ["Mathematics", "Physics", "Problem Solving"],
          identified: "2 days ago"
        },
        {
          name: "Priya Patel",
          class: "9-B",
          category: "Creative Potential",
          score: 91.2,
          strengths: ["Art", "Writing", "Innovation"],
          identified: "3 days ago"
        },
        {
          name: "Karan Singh",
          class: "11-C",
          category: "Leadership",
          score: 88.9,
          strengths: ["Communication", "Team Building", "Decision Making"],
          identified: "5 days ago"
        }
      ]
    });
  });

  // Timetable Routes
  app.get("/api/timetable", (req, res) => {
    res.json({
      schedule: {
        "Monday": [
          { period: 1, subject: "Mathematics", teacher: "Mr. Kumar", class: "10-A", time: "9:00-9:45" },
          { period: 2, subject: "Physics", teacher: "Dr. Sharma", class: "10-A", time: "9:45-10:30" }
        ]
      }
    });
  });

  // Exam Management Routes
  app.get("/api/exams", (req, res) => {
    res.json({
      upcoming: [
        { id: 1, subject: "Mathematics", class: "10-A", date: "2024-12-15", time: "10:00 AM" },
        { id: 2, subject: "Physics", class: "10-B", date: "2024-12-16", time: "2:00 PM" }
      ]
    });
  });

  // WhatsApp Integration Routes
  app.get("/api/whatsapp/status", (req, res) => {
    res.json({
      connected: true,
      messagesSent: 1247,
      deliveryRate: 98.5
    });
  });

  app.post("/api/whatsapp/send", (req, res) => {
    const { phone, message, type } = req.body;
    // In production, integrate with WhatsApp Business API
    res.json({
      success: true,
      messageId: "msg_" + Date.now(),
      status: "sent"
    });
  });

  // Report Generation Routes
  app.get("/api/reports/academic", (req, res) => {
    res.json({
      reports: [
        { id: 1, title: "Monthly Academic Report", generated: "2024-12-06", status: "Ready" },
        { id: 2, title: "Fee Collection Report", generated: "2024-12-05", status: "Ready" }
      ]
    });
  });

  // Attendance Routes
  app.get("/api/attendance/today", (req, res) => {
    res.json({
      totalStudents: 850,
      present: 803,
      absent: 47,
      attendanceRate: 94.5
    });
  });

  // Behavioral Tracking Routes
  app.get("/api/behavior/overview", (req, res) => {
    res.json({
      totalIncidents: 23,
      resolved: 18,
      pending: 5,
      improvement: 12.5
    });
  });

  // Question Paper Generation Routes
  app.post("/api/question-papers/generate", (req, res) => {
    const { subject, class: className, difficulty, questionCount } = req.body;
    res.json({
      success: true,
      paperId: "qp_" + Date.now(),
      downloadUrl: "/api/question-papers/download/qp_" + Date.now()
    });
  });

  // Substitution Management Routes
  app.get("/api/substitutions/today", (req, res) => {
    res.json({
      substitutions: [
        { teacher: "Mr. Kumar", substitute: "Dr. Sharma", period: 3, class: "10-A", subject: "Mathematics" },
        { teacher: "Ms. Patel", substitute: "Mr. Singh", period: 5, class: "9-B", subject: "English" }
      ]
    });
  });

  // PowerBI Analytics Routes
  app.get("/api/analytics/dashboard", (req, res) => {
    res.json({
      performance: {
        academicPerformance: 87.5,
        attendanceRate: 94.5,
        feeCollection: 91.3,
        teacherEfficiency: 89.2
      },
      trends: {
        studentGrowth: 5.2,
        examResults: 12.8,
        parentSatisfaction: 94.7
      }
    });
  });

  // File upload endpoint for logos
  app.post("/api/upload/logo", (req, res) => {
    // In production, handle file upload to cloud storage
    res.json({
      success: true,
      url: "/uploads/logo_" + Date.now() + ".png"
    });
  });

  // Catch-all handler: send back React's index.html file for client-side routing
  app.get("*", (req, res) => {
    if (process.env.NODE_ENV === "development") {
      res.sendFile(path.join(__dirname, "../index.html"));
    } else {
      res.sendFile(path.join(__dirname, "../dist/public/index.html"));
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}