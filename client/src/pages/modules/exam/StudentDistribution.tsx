import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MapPin, 
  Grid, 
  AlertTriangle,
  CheckCircle,
  Shuffle,
  Download
} from 'lucide-react';

export default function StudentDistribution() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Student Distribution System</h1>
            <p className="text-gray-600 mt-2">Optimize hall allocation and seating arrangements for examinations</p>
          </div>
          <Button className="gap-2">
            <Shuffle className="h-4 w-4" />
            Auto-Distribute Students
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-muted-foreground">Exam registered</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students Allocated</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,180</div>
              <p className="text-xs text-muted-foreground">Successfully assigned</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Allocation</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hall Utilization</CardTitle>
              <Grid className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">Optimal usage</p>
            </CardContent>
          </Card>
        </div>

        {/* Hall Capacity Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Hall Capacity Management
            </CardTitle>
            <CardDescription>
              Monitor room availability and capacity utilization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { 
                  hall: "Hall A Complex", 
                  rooms: ["A1", "A2", "A3"], 
                  capacity: 150, 
                  allocated: 120, 
                  status: "Available" 
                },
                { 
                  hall: "Hall B Complex", 
                  rooms: ["B1", "B2", "B3"], 
                  capacity: 150, 
                  allocated: 145, 
                  status: "Near Full" 
                },
                { 
                  hall: "Hall C Complex", 
                  rooms: ["C1", "C2"], 
                  capacity: 100, 
                  allocated: 100, 
                  status: "Full" 
                }
              ].map((complex, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{complex.hall}</h4>
                    <Badge variant={
                      complex.status === "Available" ? "default" : 
                      complex.status === "Near Full" ? "secondary" : "destructive"
                    }>
                      {complex.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Rooms:</span>
                      <span>{complex.rooms.join(", ")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Capacity:</span>
                      <span>{complex.capacity} students</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Allocated:</span>
                      <span>{complex.allocated} students</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          complex.allocated / complex.capacity > 0.9 ? 'bg-red-600' :
                          complex.allocated / complex.capacity > 0.7 ? 'bg-yellow-600' : 'bg-green-600'
                        }`}
                        style={{ width: `${(complex.allocated / complex.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Distribution Algorithm */}
        <Card>
          <CardHeader>
            <CardTitle>Intelligent Distribution Algorithm</CardTitle>
            <CardDescription>
              Automated seating arrangement considering class mixing and fair distribution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">Class Mixing</h4>
                  <p className="text-sm text-blue-700 mt-1">Ensures students from same class are separated</p>
                  <div className="mt-2">
                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">Fair Distribution</h4>
                  <p className="text-sm text-green-700 mt-1">Balanced allocation across all halls</p>
                  <div className="mt-2">
                    <Badge className="bg-green-100 text-green-800">Optimized</Badge>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900">Roll Number Sequence</h4>
                  <p className="text-sm text-purple-700 mt-1">Strategic seating based on roll numbers</p>
                  <div className="mt-2">
                    <Badge className="bg-purple-100 text-purple-800">Enhanced</Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Generate Complete Seating Arrangement
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Current Distribution Status</CardTitle>
            <CardDescription>
              View and manage student allocations by class and hall
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Input placeholder="Search by class, hall, or student ID..." className="max-w-sm" />
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Seating Plan
                </Button>
              </div>
              
              <div className="border rounded-lg">
                <div className="p-4 border-b bg-gray-50">
                  <h4 className="font-medium">Distribution by Class</h4>
                </div>
                <div className="divide-y">
                  {[
                    { 
                      class: "Class 10-A", 
                      students: 42, 
                      allocated: 42, 
                      halls: ["A1: 15", "B1: 14", "C1: 13"], 
                      status: "Complete" 
                    },
                    { 
                      class: "Class 10-B", 
                      students: 40, 
                      allocated: 40, 
                      halls: ["A2: 14", "B2: 13", "C2: 13"], 
                      status: "Complete" 
                    },
                    { 
                      class: "Class 9-A", 
                      students: 45, 
                      allocated: 38, 
                      halls: ["A3: 15", "B3: 12", "Pending: 7"], 
                      status: "Partial" 
                    },
                    { 
                      class: "Class 9-B", 
                      students: 43, 
                      allocated: 43, 
                      halls: ["A1: 14", "B1: 15", "C1: 14"], 
                      status: "Complete" 
                    },
                  ].map((distribution, index) => (
                    <div key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">{distribution.class}</p>
                            <p className="text-sm text-gray-600">
                              {distribution.allocated}/{distribution.students} students allocated
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div>
                            <p className="text-sm font-medium">Hall Distribution:</p>
                            <p className="text-sm text-gray-600">{distribution.halls.join(" • ")}</p>
                          </div>
                          <Badge variant={distribution.status === "Complete" ? "default" : "secondary"}>
                            {distribution.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seating Arrangement Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Seating Arrangement Preview</CardTitle>
            <CardDescription>
              Visual representation of student placement in examination halls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-3">Hall A1 - Layout</h4>
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 30 }, (_, index) => (
                      <div 
                        key={index} 
                        className={`w-6 h-6 rounded border text-xs flex items-center justify-center ${
                          index < 15 ? 'bg-blue-100 text-blue-800' :
                          index < 29 ? 'bg-green-100 text-green-800' : 'bg-gray-100'
                        }`}
                      >
                        {index < 29 ? (index + 1) : ''}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-sm">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-100 rounded"></div>
                        <span>Class 10-A</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-100 rounded"></div>
                        <span>Class 9-B</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-3">Distribution Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Seats Used:</span>
                      <span className="text-sm font-medium">290/400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Optimal Spacing:</span>
                      <span className="text-sm font-medium text-green-600">Achieved</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Class Mixing:</span>
                      <span className="text-sm font-medium text-blue-600">Maximum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Distribution Efficiency:</span>
                      <span className="text-sm font-medium text-purple-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                View Complete Hall Layouts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}