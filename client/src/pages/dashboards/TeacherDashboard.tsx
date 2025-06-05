import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, Calendar, FileText, PlusCircle, ExternalLink, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { UserRole } from "@/../../shared/auth-schema";

export default function TeacherDashboard() {
  const { user } = useAuth();
  const isClassTeacher = user?.role === UserRole.CLASS_TEACHER;
  const isNonClassTeacher = user?.role === UserRole.NON_CLASS_TEACHER;

  // Google Forms URLs for teacher submissions
  const googleFormsUrls = {
    questionPaperSubmission: "https://forms.gle/questionPaperSubmissionForm123", // Replace with actual URL
    leaveRequest: "https://forms.gle/teacherLeaveRequestForm456", // Replace with actual URL
    substituteRequest: "https://forms.gle/substituteRequestForm789", // Replace with actual URL
    eventProposal: "https://forms.gle/eventProposalForm012" // Replace with actual URL
  };

  const teacherStats = {
    totalClasses: isClassTeacher ? 6 : 8,
    todayClasses: isClassTeacher ? 4 : 5,
    studentsAssigned: isClassTeacher ? 45 : 0,
    pendingAssignments: 12,
    completedLessons: 18,
    upcomingEvents: 3
  };

  const todaySchedule = [
    { time: "09:00 AM", subject: "Mathematics", class: "10-A", room: "Room 201", status: "upcoming" },
    { time: "10:30 AM", subject: "Physics", class: "11-B", room: "Lab 1", status: "upcoming" },
    { time: "12:00 PM", subject: "Mathematics", class: "9-C", room: "Room 203", status: "completed" },
    { time: "02:00 PM", subject: "Algebra", class: "10-B", room: "Room 201", status: "upcoming" },
    { time: "03:30 PM", subject: "Study Hall", class: "10-A", room: "Library", status: "upcoming" }
  ];

  const pendingTasks = [
    { task: "Submit Question Paper - Mathematics Grade 10", deadline: "Dec 10, 2024", priority: "high" },
    { task: "Grade Assignment - Physics Grade 11", deadline: "Dec 8, 2024", priority: "medium" },
    { task: "Prepare Lesson Plan - Week 15", deadline: "Dec 12, 2024", priority: "low" },
    { task: "Parent Meeting - Rahul Sharma", deadline: "Dec 9, 2024", priority: "high" }
  ];

  const studentPerformance = [
    { name: "Priya Patel", class: "10-A", subject: "Mathematics", score: 92, trend: "up" },
    { name: "Rahul Singh", class: "10-A", subject: "Mathematics", score: 78, trend: "down" },
    { name: "Anjali Gupta", class: "10-A", subject: "Mathematics", score: 88, trend: "up" },
    { name: "Vikram Kumar", class: "10-A", subject: "Mathematics", score: 85, trend: "stable" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {isClassTeacher ? "Class Teacher Dashboard" : "Subject Teacher Dashboard"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {isClassTeacher ? 
              `Manage your class responsibilities and students` : 
              `Manage your subject teaching responsibilities`
            }
          </p>
        </div>
        <Badge variant="outline">
          {user?.name}
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Classes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacherStats.todayClasses}</div>
            <p className="text-xs text-muted-foreground">of {teacherStats.totalClasses} total</p>
          </CardContent>
        </Card>

        {isClassTeacher && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Class Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teacherStats.studentsAssigned}</div>
              <p className="text-xs text-muted-foreground">in your class</p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacherStats.pendingAssignments}</div>
            <p className="text-xs text-muted-foreground">assignments to review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacherStats.completedLessons}</div>
            <p className="text-xs text-muted-foreground">lessons this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Google Forms Integration */}
      <Card>
        <CardHeader>
          <CardTitle>Teacher Forms & Submissions</CardTitle>
          <CardDescription>Google Forms integration for teacher submissions and requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center"
              onClick={() => window.open(googleFormsUrls.questionPaperSubmission, '_blank')}
            >
              <FileText className="w-6 h-6 mb-2 text-blue-600" />
              <span className="text-sm text-center">Submit Question Paper</span>
              <ExternalLink className="w-3 h-3 mt-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center"
              onClick={() => window.open(googleFormsUrls.leaveRequest, '_blank')}
            >
              <Calendar className="w-6 h-6 mb-2 text-green-600" />
              <span className="text-sm text-center">Leave Request</span>
              <ExternalLink className="w-3 h-3 mt-1" />
            </Button>

            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center"
              onClick={() => window.open(googleFormsUrls.substituteRequest, '_blank')}
            >
              <Users className="w-6 h-6 mb-2 text-purple-600" />
              <span className="text-sm text-center">Substitute Request</span>
              <ExternalLink className="w-3 h-3 mt-1" />
            </Button>

            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center"
              onClick={() => window.open(googleFormsUrls.eventProposal, '_blank')}
            >
              <PlusCircle className="w-6 h-6 mb-2 text-orange-600" />
              <span className="text-sm text-center">Event Proposal</span>
              <ExternalLink className="w-3 h-3 mt-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="schedule" className="space-y-4">
        <TabsList>
          <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
          <TabsTrigger value="tasks">Pending Tasks</TabsTrigger>
          {isClassTeacher && <TabsTrigger value="students">Student Performance</TabsTrigger>}
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Today's Class Schedule</CardTitle>
              <CardDescription>Your teaching schedule for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySchedule.map((class_item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        class_item.status === 'completed' ? 'bg-green-100 dark:bg-green-900' : 'bg-blue-100 dark:bg-blue-900'
                      }`}>
                        {class_item.status === 'completed' ? 
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" /> :
                          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        }
                      </div>
                      <div>
                        <h3 className="font-semibold">{class_item.subject}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {class_item.class} • {class_item.room}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{class_item.time}</p>
                      <Badge variant={class_item.status === 'completed' ? 'default' : 'secondary'}>
                        {class_item.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Tasks requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold">{task.task}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Due: {task.deadline}</p>
                      </div>
                    </div>
                    <Badge variant={
                      task.priority === 'high' ? 'destructive' :
                      task.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {task.priority} priority
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {isClassTeacher && (
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Student Performance Overview</CardTitle>
                <CardDescription>Recent performance of your class students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentPerformance.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {student.class} • {student.subject}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-semibold text-lg">{student.score}%</p>
                          <Badge variant={
                            student.trend === 'up' ? 'default' :
                            student.trend === 'down' ? 'destructive' : 'secondary'
                          }>
                            {student.trend === 'up' ? '↗ Improving' :
                             student.trend === 'down' ? '↘ Declining' : '→ Stable'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Teaching Resources</CardTitle>
              <CardDescription>Access teaching materials and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <BookOpen className="w-6 h-6 mb-2 text-blue-600" />
                  <span>Lesson Plans</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <FileText className="w-6 h-6 mb-2 text-green-600" />
                  <span>Assignment Bank</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <Users className="w-6 h-6 mb-2 text-purple-600" />
                  <span>Student Records</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}