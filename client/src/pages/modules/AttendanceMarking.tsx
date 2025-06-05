import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  UserCheck, 
  Users, 
  CheckCircle, 
  XCircle,
  Calendar,
  Plus,
  Download
} from 'lucide-react';

export default function AttendanceMarking() {
  const schoolConfig = useSchoolConfig();

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
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
              <h1 className="text-3xl font-bold text-gray-900">Attendance Marking</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Student Attendance Management</p>
            </div>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Mark Attendance
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">850</div>
              <p className="text-xs text-muted-foreground">Enrolled students</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">803</div>
              <p className="text-xs text-green-600">94.5% attendance rate</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-red-600">5.5% absent</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes Marked</CardTitle>
              <UserCheck className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12/15</div>
              <p className="text-xs text-purple-600">80% completed</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="today" className="space-y-4">
          <TabsList>
            <TabsTrigger value="today">Today's Attendance</TabsTrigger>
            <TabsTrigger value="classwise">Class-wise</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <Card>
              <CardHeader>
                <CardTitle>Today's Attendance Overview</CardTitle>
                <CardDescription>Attendance status for {new Date().toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { class: "9-A", present: 32, total: 35, percentage: 91.4 },
                    { class: "9-B", present: 28, total: 32, percentage: 87.5 },
                    { class: "10-A", present: 36, total: 38, percentage: 94.7 },
                    { class: "10-B", present: 34, total: 36, percentage: 94.4 },
                    { class: "11-A", present: 29, total: 30, percentage: 96.7 },
                    { class: "11-B", present: 26, total: 28, percentage: 92.9 }
                  ].map((classData, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-lg">{classData.class}</h3>
                        <Badge variant={classData.percentage >= 95 ? 'default' : classData.percentage >= 90 ? 'secondary' : 'destructive'}>
                          {classData.percentage.toFixed(1)}%
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Present:</span>
                          <span className="text-green-600">{classData.present}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Absent:</span>
                          <span className="text-red-600">{classData.total - classData.present}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Total:</span>
                          <span>{classData.total}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-green-600 rounded-full"
                            style={{ width: `${classData.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classwise">
            <Card>
              <CardHeader>
                <CardTitle>Class-wise Attendance Management</CardTitle>
                <CardDescription>Mark and manage attendance for individual classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">Class-wise attendance interface will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Reports</CardTitle>
                <CardDescription>Generate comprehensive attendance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Daily Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Today's attendance summary</p>
                    <Button size="sm" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Monthly Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Complete monthly analysis</p>
                    <Button size="sm" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Student Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Individual student attendance</p>
                    <Button size="sm" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
                <CardDescription>Historical attendance patterns and analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">Attendance trends and analytics will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}