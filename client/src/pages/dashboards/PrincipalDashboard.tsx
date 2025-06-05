import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, GraduationCap, TrendingUp, AlertCircle, CheckCircle, Calendar, FileText, School, BookOpen } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function PrincipalDashboard() {
  const { user } = useAuth();

  const schoolStats = {
    totalStudents: 850,
    totalTeachers: 45,
    totalClasses: 24,
    attendanceRate: 94.5,
    feeCollectionRate: 92.4,
    academicPerformance: 88.2,
    disciplinaryIssues: 3,
    upcomingEvents: 5
  };

  const departmentPerformance = [
    { department: "Mathematics", teachers: 8, avgPerformance: 91.2, status: "excellent" },
    { department: "Science", teachers: 12, avgPerformance: 89.7, status: "excellent" },
    { department: "English", teachers: 6, avgPerformance: 87.4, status: "good" },
    { department: "Social Studies", teachers: 7, avgPerformance: 85.1, status: "good" },
    { department: "Physical Education", teachers: 4, avgPerformance: 92.8, status: "excellent" },
    { department: "Arts", teachers: 8, avgPerformance: 86.3, status: "good" }
  ];

  const recentAlerts = [
    { type: "urgent", message: "3 teachers on emergency leave today", time: "30 mins ago", category: "staffing" },
    { type: "warning", message: "Fee collection below target for December", time: "2 hours ago", category: "finance" },
    { type: "info", message: "Parent-teacher meeting scheduled for Dec 15", time: "4 hours ago", category: "events" },
    { type: "urgent", message: "Infrastructure maintenance required in Lab 2", time: "1 day ago", category: "infrastructure" }
  ];

  const upcomingEvents = [
    { event: "Annual Science Fair", date: "Dec 15, 2024", participants: 200, status: "confirmed" },
    { event: "Parent-Teacher Meeting", date: "Dec 18, 2024", participants: 400, status: "planning" },
    { event: "Winter Sports Day", date: "Dec 22, 2024", participants: 850, status: "confirmed" },
    { event: "Cultural Program", date: "Dec 28, 2024", participants: 600, status: "planning" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Principal Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Complete school monitoring and oversight</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Full Monitoring Access
        </Badge>
      </div>

      {/* Key School Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.totalStudents}</div>
            <p className="text-xs text-muted-foreground">Across all grades</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.attendanceRate}%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Collection</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.feeCollectionRate}%</div>
            <p className="text-xs text-muted-foreground">₹18,45,000 collected</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Academic Performance</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.academicPerformance}%</div>
            <p className="text-xs text-muted-foreground">Average across all subjects</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts & Notifications</CardTitle>
          <CardDescription>Important updates requiring principal attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    alert.type === 'urgent' ? 'bg-red-500' :
                    alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {alert.category} • {alert.time}
                    </p>
                  </div>
                </div>
                <Badge variant={
                  alert.type === 'urgent' ? 'destructive' :
                  alert.type === 'warning' ? 'default' : 'secondary'
                }>
                  {alert.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="departments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="management">School Management</TabsTrigger>
        </TabsList>

        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle>Department Performance Overview</CardTitle>
              <CardDescription>Academic department performance and teacher metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentPerformance.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{dept.department}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {dept.teachers} teachers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-lg">{dept.avgPerformance}%</p>
                        <Badge variant={
                          dept.status === 'excellent' ? 'default' :
                          dept.status === 'good' ? 'secondary' : 'destructive'
                        }>
                          {dept.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming School Events</CardTitle>
              <CardDescription>Events requiring principal oversight and approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.event}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {event.date} • {event.participants} participants
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                        {event.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Executive Reports</CardTitle>
              <CardDescription>Comprehensive school performance reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <FileText className="w-6 h-6 mb-2 text-blue-600" />
                  <span>Monthly Academic Report</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <TrendingUp className="w-6 h-6 mb-2 text-green-600" />
                  <span>Financial Performance</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <Users className="w-6 h-6 mb-2 text-purple-600" />
                  <span>Staff Performance</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <GraduationCap className="w-6 h-6 mb-2 text-orange-600" />
                  <span>Student Analytics</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <AlertCircle className="w-6 h-6 mb-2 text-red-600" />
                  <span>Incident Reports</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <School className="w-6 h-6 mb-2 text-indigo-600" />
                  <span>Infrastructure Status</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management">
          <Card>
            <CardHeader>
              <CardTitle>School Management Actions</CardTitle>
              <CardDescription>Administrative functions and school oversight</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <Users className="w-6 h-6 mb-2 text-blue-600" />
                  <span>Staff Management</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <GraduationCap className="w-6 h-6 mb-2 text-green-600" />
                  <span>Academic Oversight</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <TrendingUp className="w-6 h-6 mb-2 text-purple-600" />
                  <span>Performance Review</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <AlertCircle className="w-6 h-6 mb-2 text-orange-600" />
                  <span>Discipline Management</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <Calendar className="w-6 h-6 mb-2 text-red-600" />
                  <span>Event Approval</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <School className="w-6 h-6 mb-2 text-indigo-600" />
                  <span>Policy Management</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}