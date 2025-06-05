import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  Eye, 
  AlertTriangle, 
  TrendingDown, 
  Users, 
  Plus,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function BehavioralTracker() {
  const schoolConfig = useSchoolConfig();

  const behaviorStats = [
    { title: "Total Incidents", value: "23", icon: AlertTriangle, change: "-15%", color: "text-orange-600" },
    { title: "Resolved Cases", value: "18", icon: CheckCircle, change: "+25%", color: "text-green-600" },
    { title: "Active Monitoring", value: "12", icon: Eye, change: "-8%", color: "text-blue-600" },
    { title: "Improvement Rate", value: "87%", icon: TrendingDown, change: "+12%", color: "text-purple-600" }
  ];

  const recentIncidents = [
    { 
      id: "BH001", 
      student: "Karan Singh", 
      class: "10-B", 
      type: "Disruption", 
      severity: "Medium", 
      date: "2024-12-06", 
      status: "Resolved",
      description: "Talking during class"
    },
    { 
      id: "BH002", 
      student: "Priya Sharma", 
      class: "9-A", 
      type: "Academic", 
      severity: "Low", 
      date: "2024-12-05", 
      status: "Monitoring",
      description: "Late submission of assignments"
    },
    { 
      id: "BH003", 
      student: "Rahul Patel", 
      class: "11-C", 
      type: "Social", 
      severity: "High", 
      date: "2024-12-04", 
      status: "Active",
      description: "Conflict with classmate"
    }
  ];

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
              <h1 className="text-3xl font-bold text-gray-900">Behavioral Tracker</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Student Behavior Management</p>
            </div>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Report Incident
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {behaviorStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`text-xs flex items-center ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  <Clock className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="incidents" className="space-y-4">
          <TabsList>
            <TabsTrigger value="incidents">Recent Incidents</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="interventions">Interventions</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="incidents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Behavioral Incidents</CardTitle>
                <CardDescription>Latest reported behavioral concerns and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentIncidents.map((incident, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          incident.severity === 'High' ? 'bg-red-100' :
                          incident.severity === 'Medium' ? 'bg-yellow-100' : 'bg-green-100'
                        }`}>
                          <AlertTriangle className={`h-5 w-5 ${
                            incident.severity === 'High' ? 'text-red-600' :
                            incident.severity === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium">{incident.student}</p>
                          <p className="text-sm text-gray-600">{incident.class} • {incident.type} • {incident.id}</p>
                          <p className="text-sm text-gray-500">{incident.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge variant={
                            incident.severity === 'High' ? 'destructive' :
                            incident.severity === 'Medium' ? 'secondary' : 'outline'
                          }>
                            {incident.severity}
                          </Badge>
                          <p className="text-sm text-gray-600 mt-1">{incident.date}</p>
                        </div>
                        <Badge variant={
                          incident.status === 'Resolved' ? 'default' :
                          incident.status === 'Active' ? 'destructive' : 'secondary'
                        }>
                          {incident.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Behavior Trends</CardTitle>
                  <CardDescription>Monthly behavior pattern analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">5</div>
                        <p className="text-sm text-red-700">High Priority</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">8</div>
                        <p className="text-sm text-yellow-700">Medium Priority</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">10</div>
                        <p className="text-sm text-green-700">Low Priority</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Intervention Success</CardTitle>
                  <CardDescription>Effectiveness of behavioral interventions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Counseling Sessions</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Parent Meetings</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-14 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">75%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Peer Mediation</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-18 h-2 bg-purple-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">92%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="interventions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Interventions</CardTitle>
                <CardDescription>Ongoing behavioral intervention programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { program: "Anger Management", students: 5, sessions: 8, completion: 65 },
                    { program: "Social Skills Training", students: 12, sessions: 6, completion: 80 },
                    { program: "Conflict Resolution", students: 8, sessions: 4, completion: 95 },
                    { program: "Academic Support", students: 15, sessions: 10, completion: 45 },
                    { program: "Peer Mentoring", students: 20, sessions: 12, completion: 70 },
                    { program: "Family Counseling", students: 6, sessions: 5, completion: 60 }
                  ].map((program, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">{program.program}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Students:</span>
                          <span>{program.students}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sessions:</span>
                          <span>{program.sessions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Completion:</span>
                          <span>{program.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: `${program.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Behavioral Reports</CardTitle>
                <CardDescription>Generate comprehensive behavioral analysis reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Monthly Summary</h4>
                    <p className="text-sm text-gray-600 mb-3">Overall behavioral trends and statistics</p>
                    <Button size="sm" className="w-full">Generate Report</Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Individual Student</h4>
                    <p className="text-sm text-gray-600 mb-3">Detailed student behavioral history</p>
                    <Button size="sm" className="w-full">Generate Report</Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Class Analysis</h4>
                    <p className="text-sm text-gray-600 mb-3">Class-wise behavioral patterns</p>
                    <Button size="sm" className="w-full">Generate Report</Button>
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