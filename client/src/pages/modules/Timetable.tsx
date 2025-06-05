import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  Calendar, 
  Clock, 
  Plus,
  Download,
  Settings,
  Users,
  BookOpen,
  Edit
} from 'lucide-react';

export default function Timetable() {
  const schoolConfig = useSchoolConfig();

  const timeSlots = [
    "9:00 - 9:45",
    "9:45 - 10:30", 
    "10:30 - 11:15",
    "11:15 - 12:00",
    "12:00 - 12:45",
    "1:30 - 2:15",
    "2:15 - 3:00",
    "3:00 - 3:45"
  ];

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const sampleTimetable = {
    "Monday": [
      { subject: "Mathematics", teacher: "Mr. Kumar", class: "10-A" },
      { subject: "Physics", teacher: "Dr. Sharma", class: "10-A" },
      { subject: "English", teacher: "Ms. Patel", class: "10-A" },
      { subject: "Chemistry", teacher: "Dr. Singh", class: "10-A" },
      { subject: "Hindi", teacher: "Mrs. Gupta", class: "10-A" },
      { subject: "Biology", teacher: "Ms. Rao", class: "10-A" },
      { subject: "History", teacher: "Mr. Verma", class: "10-A" },
      { subject: "Geography", teacher: "Mrs. Jain", class: "10-A" }
    ]
  };

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
              <h1 className="text-3xl font-bold text-gray-900">Timetable Management</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Smart Schedule Generator</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Timetable
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Schedule
            </Button>
          </div>
        </div>

        <Tabs defaultValue="weekly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekly">Weekly View</TabsTrigger>
            <TabsTrigger value="teacher">Teacher Schedule</TabsTrigger>
            <TabsTrigger value="class">Class Schedule</TabsTrigger>
            <TabsTrigger value="generator">Auto Generator</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Class 10-A Weekly Timetable</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Schedule
                  </Button>
                </CardTitle>
                <CardDescription>Current academic week schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border p-3 bg-gray-50 text-left font-medium">Time</th>
                        {weekDays.map(day => (
                          <th key={day} className="border p-3 bg-gray-50 text-center font-medium min-w-32">
                            {day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map((time, index) => (
                        <tr key={time}>
                          <td className="border p-3 bg-gray-50 font-medium text-sm">{time}</td>
                          {weekDays.map(day => {
                            const period = day === "Monday" && sampleTimetable[day] 
                              ? sampleTimetable[day][index] 
                              : null;
                            
                            if (index === 4) {
                              return <td key={day} className="border p-3 bg-yellow-50 text-center text-sm font-medium">LUNCH BREAK</td>;
                            }
                            
                            return (
                              <td key={day} className="border p-3 text-center">
                                {period ? (
                                  <div className="p-2 bg-blue-50 rounded border border-blue-200">
                                    <div className="font-medium text-sm text-blue-900">{period.subject}</div>
                                    <div className="text-xs text-blue-700">{period.teacher}</div>
                                  </div>
                                ) : (
                                  <div className="p-2 text-gray-400 text-sm">Free</div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teacher" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Teacher Schedule Overview</CardTitle>
                <CardDescription>Individual teacher timetables and workload</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Mr. Kumar", subject: "Mathematics", periods: 24, classes: ["10-A", "10-B", "11-A"] },
                    { name: "Dr. Sharma", subject: "Physics", periods: 22, classes: ["10-A", "11-B", "12-A"] },
                    { name: "Ms. Patel", subject: "English", periods: 26, classes: ["9-A", "10-A", "11-A"] },
                    { name: "Dr. Singh", subject: "Chemistry", periods: 20, classes: ["11-A", "12-A", "12-B"] },
                    { name: "Mrs. Gupta", subject: "Hindi", periods: 18, classes: ["9-A", "9-B", "10-A"] },
                    { name: "Ms. Rao", subject: "Biology", periods: 21, classes: ["11-A", "12-A", "12-B"] }
                  ].map((teacher, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{teacher.name}</h3>
                          <p className="text-sm text-gray-600">{teacher.subject}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Weekly Periods:</span>
                          <Badge variant="outline">{teacher.periods}</Badge>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">Classes: </span>
                          {teacher.classes.join(", ")}
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-2">
                          View Schedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="class" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Class Schedule Management</CardTitle>
                <CardDescription>Individual class timetables and subject allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { class: "9-A", students: 35, subjects: 8, periods: 40 },
                    { class: "9-B", students: 32, subjects: 8, periods: 40 },
                    { class: "10-A", students: 38, subjects: 9, periods: 45 },
                    { class: "10-B", students: 36, subjects: 9, periods: 45 },
                    { class: "11-A", students: 30, subjects: 6, periods: 35 },
                    { class: "11-B", students: 28, subjects: 6, periods: 35 },
                    { class: "12-A", students: 25, subjects: 6, periods: 35 },
                    { class: "12-B", students: 27, subjects: 6, periods: 35 }
                  ].map((classInfo, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-lg">{classInfo.class}</h3>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Students:</span>
                          <span>{classInfo.students}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Subjects:</span>
                          <span>{classInfo.subjects}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weekly Periods:</span>
                          <span>{classInfo.periods}</span>
                        </div>
                        <Button size="sm" className="w-full mt-3">
                          View Timetable
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="generator" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Automated Timetable Generator
                </CardTitle>
                <CardDescription>AI-powered smart scheduling with conflict resolution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Smart Algorithm</h4>
                      <div className="text-2xl font-bold text-blue-600 mt-1">AI</div>
                      <p className="text-sm text-blue-700">Powered scheduling</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900">Conflict Detection</h4>
                      <div className="text-2xl font-bold text-green-600 mt-1">0</div>
                      <p className="text-sm text-green-700">Current conflicts</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900">Optimization</h4>
                      <div className="text-2xl font-bold text-purple-600 mt-1">97%</div>
                      <p className="text-sm text-purple-700">Efficiency score</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Generation Settings</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium">Academic Year</label>
                        <select className="w-full mt-1 p-2 border rounded">
                          <option>2024-25</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Term</label>
                        <select className="w-full mt-1 p-2 border rounded">
                          <option>Second Term</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Start Date</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded" defaultValue="2024-12-09" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">End Date</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded" defaultValue="2025-03-31" />
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Constraints & Preferences</h4>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Avoid consecutive periods for same teacher</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Balance workload across days</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Prioritize core subjects in morning slots</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span className="text-sm">Allow teacher preferences for time slots</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="gap-2">
                      <Settings className="h-4 w-4" />
                      Generate Timetable
                    </Button>
                    <Button variant="outline">Preview Changes</Button>
                    <Button variant="outline">Reset Settings</Button>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">AI Generation Features</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Automatic conflict detection and resolution</li>
                      <li>• Teacher workload optimization</li>
                      <li>• Subject distribution balancing</li>
                      <li>• Room allocation management</li>
                      <li>• Holiday and event consideration</li>
                    </ul>
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