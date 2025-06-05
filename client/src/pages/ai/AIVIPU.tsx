import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  UserCheck,
  BookOpen,
  Star,
  Target
} from 'lucide-react';

export default function AIVIPU() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI VIPU - Very Important Person Understanding</h1>
            <p className="text-gray-600 mt-2">Advanced AI system for identifying and nurturing high-potential students with personalized development paths</p>
          </div>
          <Button className="gap-2">
            <Brain className="h-4 w-4" />
            Analyze Students
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">VIPU Students</CardTitle>
              <Star className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">High-potential identified</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
              <Brain className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.8%</div>
              <p className="text-xs text-muted-foreground">Prediction accuracy</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Improvement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">Students improved</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interventions</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">Active plans</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="identification" className="space-y-4">
          <TabsList>
            <TabsTrigger value="identification">AI Identification</TabsTrigger>
            <TabsTrigger value="analysis">Student Analysis</TabsTrigger>
            <TabsTrigger value="development">Development Plans</TabsTrigger>
            <TabsTrigger value="tracking">Progress Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="identification" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI-Powered Student Identification System
                </CardTitle>
                <CardDescription>
                  Advanced machine learning algorithms to identify high-potential students across multiple dimensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900">Academic Excellence</h4>
                      <div className="text-2xl font-bold text-purple-600 mt-1">45</div>
                      <p className="text-sm text-purple-700">Top performers</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Creative Potential</h4>
                      <div className="text-2xl font-bold text-blue-600 mt-1">32</div>
                      <p className="text-sm text-blue-700">Innovation minded</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900">Leadership Traits</h4>
                      <div className="text-2xl font-bold text-green-600 mt-1">50</div>
                      <p className="text-sm text-green-700">Natural leaders</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="p-4 border-b bg-gray-50">
                      <h4 className="font-medium">Recently Identified VIPU Students</h4>
                    </div>
                    <div className="divide-y">
                      {[
                        { 
                          name: "Arjun Sharma", 
                          class: "10-A", 
                          category: "Academic Excellence", 
                          score: 94.8,
                          strengths: ["Mathematics", "Physics", "Problem Solving"],
                          identified: "2 days ago"
                        },
                        { 
                          name: "Priya Patel", 
                          class: "9-B", 
                          category: "Creative Potential", 
                          score: 91.2,
                          strengths: ["Art", "Writing", "Innovation"],
                          identified: "3 days ago"
                        },
                        { 
                          name: "Karan Singh", 
                          class: "11-C", 
                          category: "Leadership", 
                          score: 88.9,
                          strengths: ["Communication", "Team Building", "Decision Making"],
                          identified: "5 days ago"
                        },
                      ].map((student, index) => (
                        <div key={index} className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Star className="h-5 w-5 text-yellow-600" />
                              </div>
                              <div>
                                <p className="font-medium">{student.name}</p>
                                <p className="text-sm text-gray-600">{student.class} • {student.category}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-lg font-bold text-yellow-600">{student.score}%</p>
                                <p className="text-xs text-gray-500">AI Score</p>
                              </div>
                              <div className="text-right">
                                <Badge className="bg-yellow-100 text-yellow-800">VIPU</Badge>
                                <p className="text-xs text-gray-500 mt-1">{student.identified}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex gap-2">
                            {student.strengths.map((strength, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Dimensional Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { dimension: "Academic Performance", score: 92, trend: "improving" },
                      { dimension: "Critical Thinking", score: 88, trend: "stable" },
                      { dimension: "Creativity Index", score: 95, trend: "improving" },
                      { dimension: "Social Intelligence", score: 84, trend: "improving" },
                      { dimension: "Emotional Quotient", score: 91, trend: "stable" },
                    ].map((analysis, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{analysis.dimension}</span>
                          <span className="text-sm">{analysis.score}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              analysis.trend === "improving" ? "bg-green-600" : 
                              analysis.trend === "stable" ? "bg-blue-600" : "bg-yellow-600"
                            }`}
                            style={{ width: `${analysis.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Insights & Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        type: "Strength", 
                        insight: "Exceptional mathematical reasoning abilities",
                        action: "Enroll in advanced mathematics program",
                        priority: "High"
                      },
                      { 
                        type: "Opportunity", 
                        insight: "Strong leadership potential in group activities",
                        action: "Assign class representative role",
                        priority: "Medium"
                      },
                      { 
                        type: "Development", 
                        insight: "Creative writing skills emerging",
                        action: "Encourage participation in writing competitions",
                        priority: "Medium"
                      },
                    ].map((insight, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant={
                            insight.type === "Strength" ? "default" :
                            insight.type === "Opportunity" ? "secondary" : "outline"
                          }>
                            {insight.type}
                          </Badge>
                          <Badge variant={insight.priority === "High" ? "destructive" : "secondary"}>
                            {insight.priority}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium mb-1">{insight.insight}</p>
                        <p className="text-xs text-gray-600">{insight.action}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="development" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Development Plans</CardTitle>
                <CardDescription>
                  AI-generated individual development roadmaps for each VIPU student
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Academic Acceleration</h4>
                      <div className="text-2xl font-bold text-blue-600">67</div>
                      <p className="text-sm text-gray-600">Students enrolled</p>
                      <Button size="sm" className="mt-2 w-full">Manage Plans</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Leadership Development</h4>
                      <div className="text-2xl font-bold text-green-600">45</div>
                      <p className="text-sm text-gray-600">Active participants</p>
                      <Button size="sm" className="mt-2 w-full">View Programs</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Creative Enhancement</h4>
                      <div className="text-2xl font-bold text-purple-600">38</div>
                      <p className="text-sm text-gray-600">Creative tracks</p>
                      <Button size="sm" className="mt-2 w-full">Explore Options</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="p-4 border-b bg-gray-50">
                      <h4 className="font-medium">Sample Development Milestones</h4>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        {[
                          { milestone: "Complete Advanced Mathematics Module", deadline: "Dec 30, 2024", status: "In Progress" },
                          { milestone: "Lead School Science Fair Committee", deadline: "Jan 15, 2025", status: "Assigned" },
                          { milestone: "Participate in Inter-School Debate", deadline: "Feb 5, 2025", status: "Planned" },
                          { milestone: "Mentor Junior Students Program", deadline: "Mar 1, 2025", status: "Planned" },
                        ].map((milestone, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{milestone.milestone}</p>
                              <p className="text-sm text-gray-600">Target: {milestone.deadline}</p>
                            </div>
                            <Badge variant={
                              milestone.status === "In Progress" ? "default" :
                              milestone.status === "Assigned" ? "secondary" : "outline"
                            }>
                              {milestone.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Progress Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { student: "Arjun Sharma", progress: 85, goals: 3, completed: 2 },
                      { student: "Priya Patel", progress: 92, goals: 4, completed: 4 },
                      { student: "Karan Singh", progress: 78, goals: 5, completed: 3 },
                      { student: "Sneha Gupta", progress: 96, goals: 3, completed: 3 },
                    ].map((student, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{student.student}</span>
                          <span className="text-sm">{student.progress}% ({student.completed}/{student.goals})</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-green-600 rounded-full"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Success Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">87%</div>
                        <p className="text-sm text-gray-600">Achievement Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">94%</div>
                        <p className="text-sm text-gray-600">Engagement Level</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-3">Recent Achievements</h4>
                      <div className="space-y-2">
                        {[
                          "State Science Olympiad Winner - Arjun Sharma",
                          "Creative Writing Competition 1st Place - Priya Patel",
                          "Student Council President Elected - Karan Singh",
                        ].map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}