import { Router, Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/../../shared/auth-schema';

// Auth pages
import Login from '@/pages/Login';

// Role-specific dashboards
import SuperAdminDashboard from '@/pages/dashboards/SuperAdminDashboard';
import FeeManagementDashboard from '@/pages/dashboards/FeeManagementDashboard';
import PrincipalDashboard from '@/pages/dashboards/PrincipalDashboard';
import VicePrincipalDashboard from '@/pages/dashboards/VicePrincipalDashboard';
import TeacherDashboard from '@/pages/dashboards/TeacherDashboard';

// Main pages
import Dashboard from '@/pages/Dashboard';

// Module pages
import FeeManagement from '@/pages/modules/FeeManagement';
import ReportTracker from '@/pages/modules/ReportTracker';
import ExamManagement from '@/pages/modules/ExamManagement';
import InvigilationDuty from '@/pages/modules/exam/InvigilationDuty';
import StudentDistribution from '@/pages/modules/exam/StudentDistribution';
import Timetable from '@/pages/modules/Timetable';
import Substitution from '@/pages/modules/Substitution';
import BehavioralTracker from '@/pages/modules/BehavioralTracker';
import AttendanceMarking from '@/pages/modules/AttendanceMarking';
import QuestionPaperGeneration from '@/pages/modules/QuestionPaperGeneration';
import WhatsAppIntegration from '@/pages/modules/WhatsAppIntegration';

// AI pages
import PowerBIAnalytics from '@/pages/ai/PowerBIAnalytics';
import InvitationCreation from '@/pages/ai/InvitationCreation';
import AIVIPU from '@/pages/ai/AIVIPU';

// Settings pages
import Settings from '@/pages/Settings';
import Profile from '@/pages/Profile';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function AuthenticatedRouter() {
  const { user } = useAuth();

  // Role-based dashboard routing
  const getDashboardComponent = () => {
    switch (user?.role) {
      case UserRole.SUPER_ADMIN:
        return SuperAdminDashboard;
      case UserRole.CHIEF_ACCOUNT:
      case UserRole.HR_MANAGER:
      case UserRole.ACCOUNTANT:
        return FeeManagementDashboard;
      case UserRole.PRINCIPAL:
        return PrincipalDashboard;
      case UserRole.VICE_PRINCIPAL:
        return VicePrincipalDashboard;
      case UserRole.CLASS_TEACHER:
      case UserRole.NON_CLASS_TEACHER:
        return TeacherDashboard;
      default:
        return SuperAdminDashboard;
    }
  };

  const DashboardComponent = getDashboardComponent();

  return (
    <Router>
      <Switch>
        <Route path="/" component={DashboardComponent} />
        
        {/* Module Routes */}
        <Route path="/modules/fee-management" component={FeeManagement} />
        <Route path="/modules/report-tracker" component={ReportTracker} />
        <Route path="/modules/exam-management" component={ExamManagement} />
        <Route path="/modules/exam/invigilation" component={InvigilationDuty} />
        <Route path="/modules/exam/student-distribution" component={StudentDistribution} />
        <Route path="/modules/timetable" component={Timetable} />
        <Route path="/modules/substitution" component={Substitution} />
        <Route path="/modules/behavioral-tracker" component={BehavioralTracker} />
        <Route path="/modules/attendance" component={AttendanceMarking} />
        <Route path="/modules/question-papers" component={QuestionPaperGeneration} />
        <Route path="/modules/whatsapp" component={WhatsAppIntegration} />
        
        {/* AI Routes */}
        <Route path="/ai/analytics" component={PowerBIAnalytics} />
        <Route path="/ai/invitations" component={InvitationCreation} />
        <Route path="/ai/vipu" component={AIVIPU} />
        
        {/* Settings Routes */}
        <Route path="/settings" component={Settings} />
        <Route path="/profile" component={Profile} />
        
        <Route component={() => <div>404 - Page Not Found</div>} />
      </Switch>
    </Router>
  );
}

function AppRouter() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return <AuthenticatedRouter />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="smartgenedux-theme">
        <AppRouter />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;