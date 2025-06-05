import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  FileText, 
  Download, 
  Eye, 
  Plus,
  Calendar,
  TrendingUp,
  Users,
  BookOpen,
  PieChart,
  BarChart3
} from 'lucide-react';

export default function ReportTracker() {
  const schoolConfig = useSchoolConfig();

  const reportStats = [
    { title: "Total Reports", value: "1,247", icon: FileText, change: "+15.2%", color: "text-blue-600" },
    { title: "This Month", value: "89", icon: Calendar, change: "+8.7%", color: "text-green-600" },
    { title: "Academic Reports", value: "456", icon: BookOpen, change: "+12.1%", color: "text-purple-600" },
    { title: "Behavioral Reports", value: "67", icon: Users, change: "-5.3%", color: "text-orange-600" }
  ];

  const recentReports = [
    { id: "RPT001", title: "Monthly Academic Performance", type: "Academic", class: "All Classes", generated: "2024-12-06", status: "Ready" },
    { id: "RPT002", title: "Fee Collection Summary", type: "Financial", class: "All Classes", generated: "2024-12-05", status: "Ready" },
    { id: "RPT003", title: "Attendance Analysis", type: "Attendance", class: "10-A", generated: "2024-12-05", status: "Processing" },
    { id: "RPT004", title: "Behavioral Incidents", type: "Behavioral", class: "9-B", generated: "2024-12-04", status: "Ready" },
    { id: "RPT005", title: "Exam Results Summary", type: "Academic", class: "12th Grade", generated: "2024-12-03", status: "Ready" }
  ];

  const reportTemplates = [
    { name: "Academic Performance Report", description: "Comprehensive academic analysis", category: "Academic" },
    { name: "Attendance Summary", description: "Student attendance patterns", category: "Attendance" },
    { name: "Fee Collection Report", description: "Financial collection analysis", category: "Financial" },
    { name: "Behavioral Analysis", description: "Student behavior tracking", category: "Behavioral" },
    { name: "Teacher Performance", description: "Teaching effectiveness metrics", category: "Staff" },
    { name: "Parent Engagement", description: "Parent involvement analysis", category: "Community" }
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
              <h1 className="text-3xl font-bold text-gray-900">Report Tracker</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Comprehensive Analytics & Reporting</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export All
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reportStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`text-xs flex items-center ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="reports" className="space-y-4">
          <TabsList>
            <TabsTrigger value="reports">Recent Reports</TabsTrigger>
            <TabsTrigger value="templates">Report Templates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Latest generated reports and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{report.title}</p>
                          <p className="text-sm text-gray-600">{report.type} • {report.class} • {report.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Generated</p>
                          <p className="font-medium">{report.generated}</p>
                        </div>
                        <Badge variant={report.status === 'Ready' ? 'default' : 'secondary'}>
                          {report.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" disabled={report.status !== 'Ready'}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Report Templates</CardTitle>
                <CardDescription>Pre-configured report templates for quick generation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {reportTemplates.map((template, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-600" />
                        </div>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <h3 className="font-medium mb-2">{template.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                      <Button size="sm" className="w-full">Generate Report</Button>
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
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Report Distribution
                  </CardTitle>
                  <CardDescription>Reports generated by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Academic Reports</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-14 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">36%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Attendance Reports</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-10 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Financial Reports</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-8 h-2 bg-purple-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Behavioral Reports</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-6 h-2 bg-orange-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">15%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Other Reports</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">4%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Monthly Trends
                  </CardTitle>
                  <CardDescription>Report generation trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">89</div>
                        <p className="text-sm text-blue-700">This Month</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">76</div>
                        <p className="text-sm text-green-700">Last Month</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">+17%</div>
                        <p className="text-sm text-purple-700">Growth</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-900 mb-2">AI-Powered Insights</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Peak report generation on Fridays (32% of weekly reports)</li>
                        <li>• Academic reports show 15% increase in complexity</li>
                        <li>• Attendance reports generated most frequently</li>
                        <li>• Behavioral tracking improving student outcomes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
                <CardDescription>Automated report generation schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="default">Weekly</Badge>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <h4 className="font-medium mb-2">Attendance Summary</h4>
                      <p className="text-sm text-gray-600 mb-3">Every Friday at 5:00 PM</p>
                      <p className="text-xs text-gray-500">Next: Dec 8, 2024</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">Monthly</Badge>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <h4 className="font-medium mb-2">Academic Performance</h4>
                      <p className="text-sm text-gray-600 mb-3">Last day of month at 6:00 PM</p>
                      <p className="text-xs text-gray-500">Next: Dec 31, 2024</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">Daily</Badge>
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <h4 className="font-medium mb-2">Fee Collection</h4>
                      <p className="text-sm text-gray-600 mb-3">Every day at 7:00 AM</p>
                      <p className="text-xs text-gray-500">Next: Dec 7, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline">Add Schedule</Button>
                    <Button variant="outline">Manage Schedules</Button>
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