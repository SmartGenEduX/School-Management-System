import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ImageIcon, 
  Palette, 
  Download, 
  Upload, 
  Wand2,
  Eye,
  Share,
  Plus
} from 'lucide-react';

export default function InvitationCreation() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Invitation Creation</h1>
            <p className="text-gray-600 mt-2">Professional invitation design with AI-powered templates and customization</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Invitation
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Invitations Created</CardTitle>
              <ImageIcon className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">This academic year</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Templates Available</CardTitle>
              <Palette className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">AI-generated designs</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events Covered</CardTitle>
              <Eye className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Different event types</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Design Quality</CardTitle>
              <Wand2 className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96%</div>
              <p className="text-xs text-muted-foreground">Satisfaction rate</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="creator" className="space-y-4">
          <TabsList>
            <TabsTrigger value="creator">AI Creator</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="gallery">Event Gallery</TabsTrigger>
            <TabsTrigger value="library">Design Library</TabsTrigger>
          </TabsList>

          <TabsContent value="creator" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5" />
                  AI-Powered Invitation Creator
                </CardTitle>
                <CardDescription>
                  Generate professional invitations with intelligent design recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Event Type</label>
                        <select className="w-full p-2 border rounded-lg">
                          <option>Annual Function</option>
                          <option>Sports Day</option>
                          <option>Parent-Teacher Meeting</option>
                          <option>Graduation Ceremony</option>
                          <option>Science Fair</option>
                          <option>Cultural Program</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Event Title</label>
                        <Input placeholder="e.g., Annual Sports Day 2024" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Date & Time</label>
                        <div className="grid grid-cols-2 gap-2">
                          <Input type="date" />
                          <Input type="time" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Venue</label>
                        <Input placeholder="School Auditorium" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Target Audience</label>
                        <select className="w-full p-2 border rounded-lg">
                          <option>Parents & Students</option>
                          <option>Teachers & Staff</option>
                          <option>Students Only</option>
                          <option>Community Members</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Design Theme</label>
                        <select className="w-full p-2 border rounded-lg">
                          <option>Modern Professional</option>
                          <option>Colorful & Fun</option>
                          <option>Classic Elegant</option>
                          <option>Sports Theme</option>
                          <option>Academic Theme</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Color Scheme</label>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="w-12 h-12 bg-blue-500 rounded-lg cursor-pointer border-2 border-blue-600"></div>
                          <div className="w-12 h-12 bg-green-500 rounded-lg cursor-pointer"></div>
                          <div className="w-12 h-12 bg-purple-500 rounded-lg cursor-pointer"></div>
                          <div className="w-12 h-12 bg-orange-500 rounded-lg cursor-pointer"></div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Additional Details</label>
                        <textarea 
                          className="w-full p-2 border rounded-lg h-20" 
                          placeholder="Any special instructions or additional information..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-3">AI Enhancement Options</h4>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <label className="text-sm text-purple-800">Smart Layout Optimization</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <label className="text-sm text-purple-800">Auto Color Coordination</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <label className="text-sm text-purple-800">Typography Enhancement</label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Generate AI Invitation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Professional Templates</CardTitle>
                <CardDescription>
                  Pre-designed templates for various school events and occasions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Search templates by event type or style..." className="max-w-sm" />
                    <div className="flex gap-2">
                      <Button variant="outline" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Template
                      </Button>
                      <Button className="gap-2">
                        <Wand2 className="h-4 w-4" />
                        Generate New
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      { 
                        name: "Annual Function Elegant", 
                        category: "Formal Events", 
                        theme: "Classic Blue",
                        usage: 12,
                        rating: 4.8
                      },
                      { 
                        name: "Sports Day Dynamic", 
                        category: "Sports Events", 
                        theme: "Energetic Orange",
                        usage: 8,
                        rating: 4.9
                      },
                      { 
                        name: "Science Fair Modern", 
                        category: "Academic Events", 
                        theme: "Tech Purple",
                        usage: 5,
                        rating: 4.7
                      },
                      { 
                        name: "Cultural Program Vibrant", 
                        category: "Cultural Events", 
                        theme: "Rainbow Multi",
                        usage: 15,
                        rating: 4.9
                      },
                      { 
                        name: "Graduation Ceremony", 
                        category: "Milestone Events", 
                        theme: "Golden Elegance",
                        usage: 6,
                        rating: 4.8
                      },
                      { 
                        name: "Parent Meeting Simple", 
                        category: "Meetings", 
                        theme: "Clean Professional",
                        usage: 22,
                        rating: 4.6
                      },
                    ].map((template, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <ImageIcon className="h-12 w-12 text-white" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium mb-2">{template.name}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Category:</span>
                              <Badge variant="outline">{template.category}</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Theme:</span>
                              <span className="font-medium">{template.theme}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Used:</span>
                              <span className="font-medium">{template.usage} times</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Rating:</span>
                              <span className="font-medium">⭐ {template.rating}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Eye className="h-3 w-3 mr-1" />
                              Preview
                            </Button>
                            <Button size="sm" className="flex-1">
                              Use Template
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Event Gallery</CardTitle>
                <CardDescription>
                  Showcase of invitations created for various school events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg">
                    <div className="p-4 border-b bg-gray-50">
                      <h4 className="font-medium">Recent Events</h4>
                    </div>
                    <div className="divide-y">
                      {[
                        { 
                          event: "Annual Sports Day 2024", 
                          date: "Dec 20, 2024", 
                          template: "Sports Day Dynamic",
                          audience: "Parents & Students",
                          response: "245 attendees",
                          status: "Completed"
                        },
                        { 
                          event: "Science Exhibition", 
                          date: "Dec 18, 2024", 
                          template: "Science Fair Modern",
                          audience: "Community",
                          response: "180 visitors",
                          status: "Completed"
                        },
                        { 
                          event: "Winter Concert", 
                          date: "Dec 22, 2024", 
                          template: "Cultural Program Vibrant",
                          audience: "Parents & Students",
                          response: "156 confirmed",
                          status: "Upcoming"
                        },
                      ].map((event, index) => (
                        <div key={index} className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                                <ImageIcon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-medium">{event.event}</p>
                                <p className="text-sm text-gray-600">{event.date} • {event.audience}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-sm font-medium">{event.response}</p>
                                <p className="text-xs text-gray-500">{event.template}</p>
                              </div>
                              <Badge variant={event.status === "Completed" ? "default" : "secondary"}>
                                {event.status}
                              </Badge>
                              <Button variant="outline" size="sm" className="gap-1">
                                <Share className="h-3 w-3" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="library" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-3 border rounded-lg text-center">
                        <ImageIcon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <div className="text-sm font-medium">School Logos</div>
                        <div className="text-xs text-gray-600">25 variations</div>
                      </div>
                      <div className="p-3 border rounded-lg text-center">
                        <Palette className="h-8 w-8 mx-auto mb-2 text-green-600" />
                        <div className="text-sm font-medium">Color Palettes</div>
                        <div className="text-xs text-gray-600">18 schemes</div>
                      </div>
                      <div className="p-3 border rounded-lg text-center">
                        <ImageIcon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                        <div className="text-sm font-medium">Background Images</div>
                        <div className="text-xs text-gray-600">45 images</div>
                      </div>
                      <div className="p-3 border rounded-lg text-center">
                        <Wand2 className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                        <div className="text-sm font-medium">Icons & Graphics</div>
                        <div className="text-xs text-gray-600">120 elements</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Manage Assets
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Annual Functions", count: 12, percentage: 25 },
                      { category: "Sports Events", count: 8, percentage: 17 },
                      { category: "Parent Meetings", count: 22, percentage: 46 },
                      { category: "Cultural Programs", count: 6, percentage: 12 },
                    ].map((usage, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{usage.category}</span>
                          <span className="text-sm">{usage.count} invitations</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: `${usage.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Total Invitations:</span>
                        <span className="font-bold">48</span>
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