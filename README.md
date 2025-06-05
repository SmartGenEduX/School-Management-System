# SmartGenEduX - Complete Deployment Package

## Quick Deployment Instructions

### 1. GitHub Setup
1. Create new repository on GitHub
2. Upload all files from this package
3. Commit with message: "SmartGenEduX Hierarchical Authentication System"

### 2. Vercel Deployment
1. Connect GitHub repo to Vercel
2. Framework: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist/public`
5. Add Environment Variable: `DATABASE_URL=your_postgresql_url`

### 3. Login Credentials

**Super Admin (Platform Overview)**
- ID: SUPERADMIN001
- Passcode: SA2024@EduX

**Chief Account (Fee Control)**
- ID: CHFACC001  
- Passcode: CA2024@EduX

**Principal (Full Monitoring)**
- ID: PRIN001
- Passcode: PR2024@EduX

**Vice Principal (Configuration)**
- ID: VPRIN001
- Passcode: VP2024@EduX

**Class Teacher**
- ID: CLSTCH001
- Passcode: CT2024@EduX

**Subject Teacher**
- ID: NCLSTCH001
- Passcode: NCT2024@EduX

### 4. Google Forms Integration
Replace placeholder URLs in dashboard files with actual Google Form links:
- Question Paper Submission
- Teacher Leave Requests
- Fee Remission Forms
- Scholarship Applications

### 5. MSME Registration
UDYAM-TN-34-0088173 (Already configured)

## System Features
- Hierarchical role-based authentication
- 8 distinct user roles with specific access controls
- Role-specific dashboards
- Google Forms integration
- Complete fee management system
- AI VIPU module integration
- School branding customization

## Ready for Production Deployment