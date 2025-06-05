import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Brain,
  Download,
  RefreshCw,
  Eye
} from 'lucide-react';

export default function PowerBIAnalytics() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Power BI Analytics</h1>
            <p className="text-gray-600 mt-2">Advanced analytics and business intelligence with predictive insights</p>
          </div>
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Points</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5M</div>
              <p className="text-xs text-muted-foreground">Real-time analytics</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Dashboards</CardTitle>
              <Eye className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Live monitoring</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Insights Accuracy</CardTitle>
              <Brain className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">AI predictions</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Analytics Overview</TabsTrigger>
            <TabsTrigger value="academic">Academic Analytics</TabsTrigger>
            <TabsTrigger value="financial">Financial Analytics</TabsTrigger>
            <TabsTrigger value="predictive">Predictive Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Key Performance Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metric: "Student Enrollment", value: "1,250", change: "+5.2%", trend: "up" },
                      { metric: "Teacher Retention", value: "94%", change: "+2.1%", trend: "up" },
                      { metric: "Academic Performance", value: "87%", change: "+3.5%", trend: "up" },
                      { metric: "Parent Satisfaction", value: "92%", change: "-1.2%", trend: "down" },
                    ].map((kpi, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{kpi.metric}</p>
                          <p className="text-2xl font-bold">{kpi.value}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={kpi.trend === "up" ? "default" : "destructive"}>
                            {kpi.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Real-time Data Streams</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { source: "Student Information System", status: "Connected", lastSync: "2 min ago" },
                      { source: "Fee Management System", status: "Connected", lastSync: "5 min ago" },
                      { source: "Attendance System", status: "Connected", lastSync: "1 min ago" },
                      { source: "WhatsApp API", status: "Connected", lastSync: "3 min ago" },
                    ].map((stream, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{stream.source}</p>
                          <p className="text-sm text-gray-600">Last sync: {stream.lastSync}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          {stream.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Interactive Performance Chart</p>
                        <p className="text-sm text-gray-400">Subject-wise performance over time</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">85%</div>
                        <p className="text-sm text-gray-600">Average Performance</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">+3.2%</div>
                        <p className="text-sm text-gray-600">Improvement Rate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subject-wise Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { subject: "Mathematics", average: 82, students: 250, trend: "improving" },
                      { subject: "Science", average: 79, students: 250, trend: "stable" },
                      { subject: "English", average: 85, students: 250, trend: "improving" },
                      { subject: "Social Studies", average: 77, students: 250, trend: "declining" },
                    ].map((subject, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{subject.subject}</span>
                          <span className="text-sm">{subject.average}% avg</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              subject.trend === "improving" ? "bg-green-600" :
                              subject.trend === "stable" ? "bg-blue-600" : "bg-red-600"
                            }`}
                            style={{ width: `${subject.average}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Revenue Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Revenue Trend Chart</p>
                        <p className="text-sm text-gray-400">Monthly collection patterns</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600">₹15.2L</div>
                        <p className="text-xs text-gray-600">This Month</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">₹48.7L</div>
                        <p className="text-xs text-gray-600">This Quarter</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-600">92%</div>
                        <p className="text-xs text-gray-600">Collection Rate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fee Collection Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Tuition Fees", collected: "₹12.5L", pending: "₹1.8L", rate: 87 },
                      { category: "Transport Fees", collected: "₹2.1L", pending: "₹0.3L", rate: 87 },
                      { category: "Activity Fees", collected: "₹0.6L", pending: "₹0.1L", rate: 86 },
                    ].map((fee, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{fee.category}</h4>
                          <Badge>{fee.rate}%</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Collected: </span>
                            <span className="font-medium text-green-600">{fee.collected}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Pending: </span>
                            <span className="font-medium text-red-600">{fee.pending}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictive" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI-Powered Predictive Insights
                </CardTitle>
                <CardDescription>
                  Machine learning predictions and recommendations for strategic decision making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-3">Enrollment Predictions</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-blue-700">Next Quarter:</span>
                          <span className="font-medium text-blue-800">+45 students</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-blue-700">Confidence:</span>
                          <span className="font-medium text-blue-800">89%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-3">Revenue Forecast</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-green-700">Next Month:</span>
                          <span className="font-medium text-green-800">₹16.8L</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-green-700">Growth:</span>
                          <span className="font-medium text-green-800">+8.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="p-4 border-b bg-gray-50">
                      <h4 className="font-medium">AI Recommendations</h4>
                    </div>
                    <div className="divide-y">
                      {[
                        { 
                          recommendation: "Implement early fee payment incentives", 
                          impact: "Potential 12% improvement in collection rate",
                          confidence: 92,
                          category: "Financial"
                        },
                        { 
                          recommendation: "Additional math support classes for Class 9", 
                          impact: "Expected 15% improvement in performance",
                          confidence: 87,
                          category: "Academic"
                        },
                        { 
                          recommendation: "Expand WhatsApp automation to include homework reminders", 
                          impact: "Predicted 25% increase in parent engagement",
                          confidence: 94,
                          category: "Communication"
                        },
                      ].map((rec, index) => (
                        <div key={index} className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="font-medium">{rec.recommendation}</p>
                              <p className="text-sm text-gray-600 mt-1">{rec.impact}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{rec.category}</Badge>
                              <div className="text-right">
                                <div className="text-sm font-medium">{rec.confidence}%</div>
                                <div className="text-xs text-gray-500">Confidence</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Export Insights Report
                    </Button>
                    <Button className="gap-2">
                      <Brain className="h-4 w-4" />
                      Generate New Predictions
                    </Button>
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