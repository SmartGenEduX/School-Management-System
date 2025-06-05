import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  UserCheck, 
  Calendar, 
  Clock, 
  Users, 
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download
} from 'lucide-react';

export default function InvigilationDuty() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Invigilation Duty Management</h1>
            <p className="text-gray-600 mt-2">Intelligent teacher assignment based on availability and workload distribution</p>
          </div>
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Auto-Assign Duties
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Teachers</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85</div>
              <p className="text-xs text-muted-foreground">Ready for assignment</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Duties Assigned</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72</div>
              <p className="text-xs text-muted-foreground">Confirmed assignments</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Assignment</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">13</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Workload Balance</CardTitle>
              <UserCheck className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">Optimal distribution</p>
            </CardContent>
          </Card>
        </div>

        {/* Assignment Algorithm Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Intelligent Assignment Algorithm
            </CardTitle>
            <CardDescription>
              AI-powered duty allocation considering teacher availability, subject expertise, and workload balance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">Availability Check</h4>
                  <p className="text-sm text-blue-700 mt-1">Analyzes teacher schedules and leave requests</p>
                  <div className="mt-2">
                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">Workload Balance</h4>
                  <p className="text-sm text-green-700 mt-1">Ensures fair distribution of invigilation duties</p>
                  <div className="mt-2">
                    <Badge className="bg-green-100 text-green-800">Optimized</Badge>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900">Subject Expertise</h4>
                  <p className="text-sm text-purple-700 mt-1">Matches teachers with relevant subject knowledge</p>
                  <div className="mt-2">
                    <Badge className="bg-purple-100 text-purple-800">Enhanced</Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Run Complete Assignment Algorithm
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Assignments */}
        <Card>
          <CardHeader>
            <CardTitle>Current Duty Assignments</CardTitle>
            <CardDescription>
              View and manage upcoming invigilation schedules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Input placeholder="Search by teacher name or exam..." className="max-w-sm" />
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Schedule
                </Button>
              </div>
              
              <div className="border rounded-lg">
                <div className="p-4 border-b bg-gray-50">
                  <h4 className="font-medium">Upcoming Assignments</h4>
                </div>
                <div className="divide-y">
                  {[
                    { 
                      teacher: "Dr. Priya Sharma", 
                      department: "Mathematics", 
                      exam: "Class 10 Mathematics", 
                      date: "Dec 15, 2024", 
                      time: "9:00 AM - 12:00 PM", 
                      hall: "Hall A1", 
                      workload: "Light",
                      status: "Confirmed"
                    },
                    { 
                      teacher: "Mr. Rajesh Kumar", 
                      department: "Science", 
                      exam: "Class 9 Physics", 
                      date: "Dec 16, 2024", 
                      time: "9:00 AM - 11:00 AM", 
                      hall: "Hall B2", 
                      workload: "Medium",
                      status: "Confirmed"
                    },
                    { 
                      teacher: "Ms. Meera Patel", 
                      department: "English", 
                      exam: "Class 8 English", 
                      date: "Dec 17, 2024", 
                      time: "9:00 AM - 11:00 AM", 
                      hall: "Hall C1", 
                      workload: "Light",
                      status: "Pending"
                    },
                    { 
                      teacher: "Dr. Suresh Gupta", 
                      department: "Social Studies", 
                      exam: "Class 11 History", 
                      date: "Dec 18, 2024", 
                      time: "2:00 PM - 5:00 PM", 
                      hall: "Hall A3", 
                      workload: "Heavy",
                      status: "Confirmed"
                    },
                  ].map((assignment, index) => (
                    <div key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <UserCheck className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{assignment.teacher}</p>
                            <p className="text-sm text-gray-600">{assignment.department} Department</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div>
                            <p className="font-medium">{assignment.exam}</p>
                            <p className="text-sm text-gray-600">{assignment.hall}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{assignment.date}</p>
                            <p className="text-sm text-gray-600">{assignment.time}</p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Badge variant={assignment.status === "Confirmed" ? "default" : "secondary"}>
                              {assignment.status}
                            </Badge>
                            <Badge variant={
                              assignment.workload === "Light" ? "default" : 
                              assignment.workload === "Medium" ? "secondary" : "destructive"
                            }>
                              {assignment.workload}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Teacher Workload Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Teacher Workload Analysis</CardTitle>
            <CardDescription>
              Monitor duty distribution to ensure fair allocation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">High Workload Teachers</h4>
                  {[
                    { name: "Dr. Suresh Gupta", duties: 8, maxRecommended: 6 },
                    { name: "Ms. Anjali Singh", duties: 7, maxRecommended: 6 },
                    { name: "Mr. Vikram Rao", duties: 7, maxRecommended: 6 },
                  ].map((teacher, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium text-red-900">{teacher.name}</p>
                        <p className="text-sm text-red-700">{teacher.duties} duties assigned</p>
                      </div>
                      <Badge variant="destructive">Overloaded</Badge>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Available for More Duties</h4>
                  {[
                    { name: "Dr. Kavita Sharma", duties: 2, maxRecommended: 6 },
                    { name: "Mr. Amit Verma", duties: 3, maxRecommended: 6 },
                    { name: "Ms. Pooja Jain", duties: 4, maxRecommended: 6 },
                  ].map((teacher, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-900">{teacher.name}</p>
                        <p className="text-sm text-green-700">{teacher.duties} duties assigned</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Rebalance Workload Distribution
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}