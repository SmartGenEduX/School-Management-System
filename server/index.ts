import express from "express";
import { registerRoutes } from "./routes";

const app = express();
const port = parseInt(process.env.PORT || "5000");

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Set proper MIME types for ES modules
app.use((req, res, next) => {
  if (req.url.endsWith('.js') || req.url.endsWith('.jsx')) {
    res.setHeader('Content-Type', 'application/javascript');
  } else if (req.url.endsWith('.ts') || req.url.endsWith('.tsx')) {
    res.setHeader('Content-Type', 'application/javascript');
  } else if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css');
  }
  next();
});

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Routes
registerRoutes(app).then((server: any) => {
  server.listen(port, "0.0.0.0", () => {
    console.log(`[express] serving on port ${port}`);
  });
}).catch((error: any) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

export default app;