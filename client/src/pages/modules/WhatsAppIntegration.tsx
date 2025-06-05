import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  MessageCircle, 
  Send, 
  Users, 
  CheckCircle,
  Clock,
  Plus,
  Settings
} from 'lucide-react';

export default function WhatsAppIntegration() {
  const schoolConfig = useSchoolConfig();

  const messageStats = [
    { title: "Messages Sent", value: "1,245", icon: Send, color: "text-green-600" },
    { title: "Delivered", value: "1,198", icon: CheckCircle, color: "text-blue-600" },
    { title: "Active Contacts", value: "850", icon: Users, color: "text-purple-600" },
    { title: "Response Rate", value: "94.2%", icon: MessageCircle, color: "text-orange-600" }
  ];

  const recentMessages = [
    { 
      type: "Fee Reminder", 
      recipient: "Class 10-A Parents", 
      count: 35, 
      status: "Delivered", 
      time: "2 hours ago",
      template: "Monthly Fee Due"
    },
    { 
      type: "Event Notification", 
      recipient: "All Parents", 
      count: 850, 
      status: "Sending", 
      time: "30 minutes ago",
      template: "Annual Sports Day"
    },
    { 
      type: "Exam Schedule", 
      recipient: "Class 12 Parents", 
      count: 62, 
      status: "Delivered", 
      time: "1 hour ago",
      template: "Board Exam Timetable"
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
              <h1 className="text-3xl font-bold text-gray-900">WhatsApp Integration</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Automated Communication System</p>
            </div>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Send Message
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {messageStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Message Dashboard</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="contacts">Contact Groups</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Message Campaigns</CardTitle>
                <CardDescription>Latest WhatsApp messages sent to parents and students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((message, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{message.type}</p>
                          <p className="text-sm text-gray-600">{message.recipient} • {message.count} recipients</p>
                          <p className="text-sm text-gray-500">Template: {message.template}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge variant={message.status === 'Delivered' ? 'default' : 'secondary'}>
                            {message.status}
                          </Badge>
                          <p className="text-sm text-gray-600 mt-1">{message.time}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
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
                <CardTitle className="flex items-center justify-between">
                  <span>Message Templates</span>
                  <Button variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create Template
                  </Button>
                </CardTitle>
                <CardDescription>Pre-configured message templates for different scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Fee Reminder", category: "Finance", usage: 156, status: "Active" },
                    { name: "Exam Schedule", category: "Academic", usage: 89, status: "Active" },
                    { name: "Holiday Notice", category: "General", usage: 34, status: "Active" },
                    { name: "Parent Meeting", category: "Events", usage: 67, status: "Active" },
                    { name: "Result Declaration", category: "Academic", usage: 45, status: "Active" },
                    { name: "Emergency Alert", category: "Urgent", usage: 12, status: "Active" }
                  ].map((template, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">{template.name}</h3>
                        <Badge variant="outline">{template.status}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Category:</span>
                          <span>{template.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Usage:</span>
                          <span>{template.usage} times</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="flex-1">Use Template</Button>
                          <Button size="sm" variant="outline">Edit</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Groups</CardTitle>
                <CardDescription>Manage parent and student contact groups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "All Parents", count: 850, verified: 823, type: "General" },
                    { name: "Class 10 Parents", count: 73, verified: 71, type: "Class" },
                    { name: "Class 12 Parents", count: 62, verified: 60, type: "Class" },
                    { name: "Fee Defaulters", count: 28, verified: 25, type: "Finance" },
                    { name: "Sports Team Parents", count: 45, verified: 44, type: "Activity" },
                    { name: "PTA Members", count: 35, verified: 35, type: "Committee" },
                    { name: "Emergency Contacts", count: 120, verified: 118, type: "Emergency" },
                    { name: "Alumni Parents", count: 156, verified: 142, type: "Alumni" }
                  ].map((group, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">{group.name}</h3>
                        <Badge variant="outline">{group.type}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total:</span>
                          <span>{group.count}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Verified:</span>
                          <span className="text-green-600">{group.verified}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="h-2 bg-green-600 rounded-full"
                            style={{ width: `${(group.verified / group.count) * 100}%` }}
                          ></div>
                        </div>
                        <Button size="sm" className="w-full mt-3">
                          Send Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Automated Messaging</CardTitle>
                <CardDescription>Set up automated WhatsApp messages for various scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-3">Fee Reminders</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Auto-send:</span>
                          <Badge variant="default">Enabled</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span>7 days before due</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last sent:</span>
                          <span>2 hours ago</span>
                        </div>
                        <Button size="sm" className="w-full mt-3">Configure</Button>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-3">Attendance Alerts</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Auto-send:</span>
                          <Badge variant="default">Enabled</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Trigger:</span>
                          <span>3+ absences</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last sent:</span>
                          <span>Yesterday</span>
                        </div>
                        <Button size="sm" className="w-full mt-3">Configure</Button>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-3">Exam Notifications</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Auto-send:</span>
                          <Badge variant="default">Enabled</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Timing:</span>
                          <span>1 week before</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last sent:</span>
                          <span>3 days ago</span>
                        </div>
                        <Button size="sm" className="w-full mt-3">Configure</Button>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-medium text-orange-900 mb-3">Event Updates</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Auto-send:</span>
                          <Badge variant="secondary">Disabled</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Trigger:</span>
                          <span>Manual only</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last sent:</span>
                          <span>1 week ago</span>
                        </div>
                        <Button size="sm" className="w-full mt-3">Configure</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Message Performance</CardTitle>
                  <CardDescription>WhatsApp message delivery and engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Delivery Rate</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-19 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">96.2%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Read Rate</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-17 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">89.4%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Response Rate</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-purple-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">62.8%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Statistics</CardTitle>
                  <CardDescription>Monthly WhatsApp integration usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">1,245</div>
                      <p className="text-sm text-green-700">Messages Sent</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">850</div>
                      <p className="text-sm text-blue-700">Active Contacts</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">45</div>
                      <p className="text-sm text-purple-700">Templates Used</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">23</div>
                      <p className="text-sm text-orange-700">Campaigns</p>
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