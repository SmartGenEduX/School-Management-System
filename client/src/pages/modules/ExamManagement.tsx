import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  ClipboardList, 
  Calendar, 
  Users, 
  Plus,
  Settings,
  Download,
  Eye,
  Clock,
  MapPin,
  CheckCircle
} from 'lucide-react';

export default function ExamManagement() {
  const schoolConfig = useSchoolConfig();

  const examStats = [
    { title: "Scheduled Exams", value: "23", icon: ClipboardList, color: "text-blue-600" },
    { title: "Active Exams", value: "5", icon: Clock, color: "text-green-600" },
    { title: "Exam Halls", value: "12", icon: MapPin, color: "text-purple-600" },
    { title: "Invigilators", value: "45", icon: Users, color: "text-orange-600" }
  ];

  const upcomingExams = [
    { 
      id: "EX001", 
      subject: "Mathematics", 
      class: "10-A", 
      date: "2024-12-15", 
      time: "10:00 AM - 1:00 PM", 
      hall: "Hall A", 
      students: 32,
      invigilator: "Mr. Kumar",
      status: "Scheduled"
    },
    { 
      id: "EX002", 
      subject: "Physics", 
      class: "12-B", 
      date: "2024-12-16", 
      time: "2:00 PM - 5:00 PM", 
      hall: "Hall B", 
      students: 28,
      invigilator: "Dr. Sharma",
      status: "Scheduled"
    },
    { 
      id: "EX003", 
      subject: "English", 
      class: "9-C", 
      date: "2024-12-17", 
      time: "9:00 AM - 12:00 PM", 
      hall: "Hall C", 
      students: 35,
      invigilator: "Ms. Patel",
      status: "Scheduled"
    }
  ];

  const examHalls = [
    { name: "Hall A", capacity: 40, occupied: 32, examId: "EX001", subject: "Mathematics" },
    { name: "Hall B", capacity: 35, occupied: 28, examId: "EX002", subject: "Physics" },
    { name: "Hall C", capacity: 45, occupied: 35, examId: "EX003", subject: "English" },
    { name: "Hall D", capacity: 50, occupied: 0, examId: null, subject: "Available" }
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header with School Branding */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {schoolConfig.logoUrl && (
              <div className="w-12 h-12 border rounded-lg overflow-hidden bg-white p-1">
                <img 
                  src={schoolConfig.logoUrl} 
                  alt={schoolConfig.schoolName}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exam Management</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Complete Examination System</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              Invigilation Duty
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Schedule Exam
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {examStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
            <TabsTrigger value="halls">Exam Halls</TabsTrigger>
            <TabsTrigger value="invigilation">Invigilation</TabsTrigger>
            <TabsTrigger value="seating">Seating Plan</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Examinations</CardTitle>
                <CardDescription>Scheduled exams for the current term</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingExams.map((exam, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <ClipboardList className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{exam.subject}</p>
                          <p className="text-sm text-gray-600">{exam.class} • {exam.students} students</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{exam.date}</p>
                          <p className="text-sm text-gray-600">{exam.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{exam.hall}</p>
                          <p className="text-sm text-gray-600">{exam.invigilator}</p>
                        </div>
                        <Badge variant="default">{exam.status}</Badge>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="halls" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Examination Halls</CardTitle>
                <CardDescription>Current status of all examination halls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {examHalls.map((hall, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">{hall.name}</h3>
                        <div className={`w-3 h-3 rounded-full ${
                          hall.occupied > 0 ? 'bg-red-500' : 'bg-green-500'
                        }`}></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Capacity:</span>
                          <span>{hall.capacity}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Occupied:</span>
                          <span>{hall.occupied}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              hall.occupied > 0 ? 'bg-red-600' : 'bg-green-600'
                            }`}
                            style={{ width: `${(hall.occupied / hall.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-gray-600">
                            {hall.examId ? `Exam: ${hall.subject}` : 'Available for booking'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invigilation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Invigilation Duty Assignment</span>
                  <Button variant="outline" className="gap-2">
                    <Settings className="h-4 w-4" />
                    Auto Assign
                  </Button>
                </CardTitle>
                <CardDescription>Manage teacher assignments for exam invigilation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Available Teachers</h4>
                      <div className="text-2xl font-bold text-blue-600 mt-1">23</div>
                      <p className="text-sm text-blue-700">Ready for assignment</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900">Assigned Teachers</h4>
                      <div className="text-2xl font-bold text-green-600 mt-1">15</div>
                      <p className="text-sm text-green-700">Currently on duty</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-medium text-orange-900">Pending Assignments</h4>
                      <div className="text-2xl font-bold text-orange-600 mt-1">8</div>
                      <p className="text-sm text-orange-700">Need assignment</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="p-4 border-b bg-gray-50">
                      <h4 className="font-medium">Today's Invigilation Schedule</h4>
                    </div>
                    <div className="divide-y">
                      {[
                        { time: "10:00 AM - 1:00 PM", exam: "Mathematics", teacher: "Mr. Kumar", hall: "Hall A" },
                        { time: "2:00 PM - 5:00 PM", exam: "Physics", teacher: "Dr. Sharma", hall: "Hall B" },
                        { time: "9:00 AM - 12:00 PM", exam: "English", teacher: "Ms. Patel", hall: "Hall C" },
                      ].map((duty, index) => (
                        <div key={index} className="p-4 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">{duty.exam}</p>
                              <p className="text-sm text-gray-600">{duty.time}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{duty.teacher}</p>
                            <p className="text-sm text-gray-600">{duty.hall}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seating" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Student Seating Arrangement</span>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Plan
                  </Button>
                </CardTitle>
                <CardDescription>Automated seating distribution for examinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg text-center">
                      <h4 className="font-medium mb-2">Hall A - Mathematics</h4>
                      <div className="text-2xl font-bold text-blue-600">32</div>
                      <p className="text-sm text-gray-600">Students assigned</p>
                      <Button size="sm" className="mt-2 w-full">View Layout</Button>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <h4 className="font-medium mb-2">Hall B - Physics</h4>
                      <div className="text-2xl font-bold text-green-600">28</div>
                      <p className="text-sm text-gray-600">Students assigned</p>
                      <Button size="sm" className="mt-2 w-full">View Layout</Button>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <h4 className="font-medium mb-2">Hall C - English</h4>
                      <div className="text-2xl font-bold text-purple-600">35</div>
                      <p className="text-sm text-gray-600">Students assigned</p>
                      <Button size="sm" className="mt-2 w-full">View Layout</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Smart Seating Algorithm</h4>
                    <p className="text-sm text-blue-700">
                      Our AI-powered seating system automatically distributes students to minimize cheating 
                      opportunities while ensuring fair distribution across halls and maintaining social distancing norms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Examination Results</CardTitle>
                <CardDescription>Recent exam results and analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">87.5%</div>
                      <p className="text-sm text-gray-600">Average Score</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">94.2%</div>
                      <p className="text-sm text-gray-600">Pass Rate</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">23</div>
                      <p className="text-sm text-gray-600">Top Scorers</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">156</div>
                      <p className="text-sm text-gray-600">Total Students</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline">Generate Report Cards</Button>
                    <Button variant="outline">Analytics Dashboard</Button>
                    <Button variant="outline">Parent Notifications</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}