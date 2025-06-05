import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { School, Users, TrendingUp, AlertCircle, CheckCircle, Clock, ExternalLink } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function SuperAdminDashboard() {
  const { user } = useAuth();

  const schoolStats = {
    totalSchools: 20,
    activeSchools: 18,
    onboardingSchools: 2,
    totalStudents: 89500,
    totalTeachers: 3200,
    totalRevenue: "₹2,45,00,000"
  };

  const onboardedSchools = [
    { name: "Delhi Public School", students: 4500, status: "Active", lastActive: "2 hours ago" },
    { name: "St. Mary's Convent", students: 3200, status: "Active", lastActive: "1 hour ago" },
    { name: "Modern International", students: 5000, status: "Active", lastActive: "30 mins ago" },
    { name: "Bright Future Academy", students: 2800, status: "Maintenance", lastActive: "1 day ago" },
    { name: "Green Valley School", students: 4200, status: "Active", lastActive: "3 hours ago" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Super Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Monitor all {schoolStats.totalSchools} onboarded schools across the platform</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Platform Overview
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.totalSchools}</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Schools</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.activeSchools}</div>
            <p className="text-xs text-muted-foreground">90% operational rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.totalStudents.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all schools</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.totalRevenue}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Schools Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Onboarded Schools Overview</CardTitle>
          <CardDescription>Real-time monitoring of all schools on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {onboardedSchools.map((school, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <School className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{school.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{school.students} students</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge 
                      variant={school.status === "Active" ? "default" : "secondary"}
                      className={school.status === "Active" ? "bg-green-100 text-green-800" : ""}
                    >
                      {school.status}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{school.lastActive}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Monitor
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Management Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Management</CardTitle>
          <CardDescription>Administrative actions and system management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <School className="w-6 h-6 mb-2 text-blue-600" />
              <span>Onboard New School</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <TrendingUp className="w-6 h-6 mb-2 text-green-600" />
              <span>Platform Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Users className="w-6 h-6 mb-2 text-purple-600" />
              <span>User Management</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}