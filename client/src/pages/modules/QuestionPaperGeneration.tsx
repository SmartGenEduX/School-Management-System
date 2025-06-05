import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  BookOpen, 
  Brain, 
  Plus,
  Download,
  Settings,
  FileText,
  Zap
} from 'lucide-react';

export default function QuestionPaperGeneration() {
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
              <h1 className="text-3xl font-bold text-gray-900">Question Paper Generation</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • AI-Powered Question Creation</p>
            </div>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Generate Paper
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Papers Generated</CardTitle>
              <FileText className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">This academic year</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
              <Brain className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">97.2%</div>
              <p className="text-xs text-purple-600">Question quality score</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subjects Covered</CardTitle>
              <BookOpen className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-green-600">Active subjects</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              <Zap className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-orange-600">Preparation time</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="generate" className="space-y-4">
          <TabsList>
            <TabsTrigger value="generate">Generate Paper</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="history">Generation History</TabsTrigger>
            <TabsTrigger value="settings">AI Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Question Paper Generator
                </CardTitle>
                <CardDescription>Create customized question papers using advanced AI algorithms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>English</option>
                        <option>Hindi</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Class</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>Class 9</option>
                        <option>Class 10</option>
                        <option>Class 11</option>
                        <option>Class 12</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Exam Type</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>Unit Test</option>
                        <option>Mid Term</option>
                        <option>Final Exam</option>
                        <option>Practice Test</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Duration (Minutes)</label>
                      <input type="number" className="w-full mt-1 p-2 border rounded" defaultValue="180" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Total Marks</label>
                      <input type="number" className="w-full mt-1 p-2 border rounded" defaultValue="100" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Difficulty Level</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>Easy (30%) - Medium (50%) - Hard (20%)</option>
                        <option>Easy (20%) - Medium (60%) - Hard (20%)</option>
                        <option>Easy (40%) - Medium (40%) - Hard (20%)</option>
                        <option>Custom Distribution</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Question Types</label>
                      <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Multiple Choice Questions</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Short Answer Questions</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Long Answer Questions</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-sm">Fill in the Blanks</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">AI Generation Features</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Curriculum-aligned question generation</li>
                    <li>• Bloom's taxonomy level distribution</li>
                    <li>• Previous year pattern analysis</li>
                    <li>• Automatic marking scheme creation</li>
                    <li>• Multiple paper variations</li>
                  </ul>
                </div>
                
                <div className="mt-6 flex gap-4">
                  <Button className="gap-2">
                    <Brain className="h-4 w-4" />
                    Generate Question Paper
                  </Button>
                  <Button variant="outline">Preview Settings</Button>
                  <Button variant="outline">Save as Template</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <Card>
              <CardHeader>
                <CardTitle>Question Paper Templates</CardTitle>
                <CardDescription>Pre-configured templates for quick paper generation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Class 10 Mathematics - Board Pattern", subject: "Mathematics", class: "10", type: "Final Exam" },
                    { name: "Class 12 Physics - Unit Test", subject: "Physics", class: "12", type: "Unit Test" },
                    { name: "Class 9 English - Mid Term", subject: "English", class: "9", type: "Mid Term" },
                    { name: "Class 11 Chemistry - Practice", subject: "Chemistry", class: "11", type: "Practice Test" },
                    { name: "Class 10 Biology - Final", subject: "Biology", class: "10", type: "Final Exam" },
                    { name: "Class 12 Hindi - Board Pattern", subject: "Hindi", class: "12", type: "Final Exam" }
                  ].map((template, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">{template.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-3">
                        <p>Subject: {template.subject}</p>
                        <p>Class: {template.class}</p>
                        <p>Type: {template.type}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">Use Template</Button>
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Generation History</CardTitle>
                <CardDescription>Recently generated question papers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "QP001", subject: "Mathematics", class: "10-A", date: "2024-12-06", status: "Ready", marks: 100 },
                    { id: "QP002", subject: "Physics", class: "12-B", date: "2024-12-05", status: "Ready", marks: 70 },
                    { id: "QP003", subject: "English", class: "9-C", date: "2024-12-04", status: "Ready", marks: 80 },
                    { id: "QP004", subject: "Chemistry", class: "11-A", date: "2024-12-03", status: "Ready", marks: 100 }
                  ].map((paper, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">{paper.subject} - {paper.class}</p>
                          <p className="text-sm text-gray-600">{paper.id} • {paper.marks} marks</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Generated</p>
                          <p className="font-medium">{paper.date}</p>
                        </div>
                        <Badge variant="default">{paper.status}</Badge>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
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

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>AI Generation Settings</CardTitle>
                <CardDescription>Configure AI parameters for question generation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium">AI Model Version</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>GPT-4o (Latest)</option>
                        <option>GPT-4 (Stable)</option>
                        <option>Custom Model</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Question Quality Threshold</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>High (95%+)</option>
                        <option>Medium (90%+)</option>
                        <option>Standard (85%+)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Auto Answer Key Generation</label>
                        <p className="text-xs text-gray-600">Generate detailed answer keys automatically</p>
                      </div>
                      <input type="checkbox" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Plagiarism Check</label>
                        <p className="text-xs text-gray-600">Verify question originality</p>
                      </div>
                      <input type="checkbox" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Multiple Variations</label>
                        <p className="text-xs text-gray-600">Generate multiple versions of the same paper</p>
                      </div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  
                  <Button>Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}