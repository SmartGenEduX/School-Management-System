import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  CreditCard,
  Calendar,
  Send,
  Download,
  Eye,
  Plus,
  Filter
} from 'lucide-react';

export default function FeeManagement() {
  const schoolConfig = useSchoolConfig();

  const stats = [
    { title: "Total Collected", value: "₹45,67,230", icon: DollarSign, change: "+12.5%", color: "text-green-600" },
    { title: "Pending Fees", value: "₹12,45,890", icon: CreditCard, change: "-8.2%", color: "text-orange-600" },
    { title: "This Month", value: "₹8,75,340", icon: Calendar, change: "+15.3%", color: "text-blue-600" },
    { title: "Students", value: "5,247", icon: Users, change: "+2.1%", color: "text-purple-600" }
  ];

  const recentPayments = [
    { id: "TXN001", student: "Arjun Sharma", class: "10-A", amount: "₹15,000", status: "Paid", date: "2024-12-06", method: "UPI" },
    { id: "TXN002", student: "Priya Patel", class: "9-B", amount: "₹12,500", status: "Paid", date: "2024-12-06", method: "Card" },
    { id: "TXN003", student: "Karan Singh", class: "11-C", amount: "₹18,000", status: "Pending", date: "2024-12-05", method: "Cash" },
    { id: "TXN004", student: "Sneha Gupta", class: "8-A", amount: "₹10,500", status: "Paid", date: "2024-12-05", method: "Bank" },
    { id: "TXN005", student: "Rahul Kumar", class: "12-B", amount: "₹20,000", status: "Overdue", date: "2024-11-28", method: "UPI" }
  ];

  const pendingStudents = [
    { name: "Amit Verma", class: "10-C", amount: "₹15,000", dueDate: "2024-12-10", days: 4 },
    { name: "Pooja Singh", class: "9-A", amount: "₹12,500", dueDate: "2024-12-08", days: 2 },
    { name: "Rohit Sharma", class: "11-B", amount: "₹18,000", dueDate: "2024-12-05", days: -1 },
    { name: "Kavya Patel", class: "8-C", amount: "₹10,500", dueDate: "2024-12-12", days: 6 }
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
              <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Complete Fee Collection System</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Payment
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`text-xs flex items-center ${stat.color}`}>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="payments">Recent Payments</TabsTrigger>
            <TabsTrigger value="pending">Pending Fees</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Collection Summary</CardTitle>
                  <CardDescription>Monthly fee collection overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-900">Total Collected</p>
                        <p className="text-2xl font-bold text-green-600">₹45,67,230</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-700">91.3% of target</p>
                        <p className="text-sm text-green-600">₹50,00,000 target</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium text-orange-900">Pending Amount</p>
                        <p className="text-2xl font-bold text-orange-600">₹12,45,890</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-orange-700">247 students</p>
                        <p className="text-sm text-orange-600">4.7% of total</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Distribution of payment methods used</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">UPI</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Bank Transfer</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">30%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Cash</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-8 h-2 bg-yellow-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Card</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        </div>
                        <span className="text-sm">5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Latest fee payments received</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPayments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{payment.student}</p>
                          <p className="text-sm text-gray-600">{payment.class} • {payment.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{payment.amount}</p>
                          <p className="text-sm text-gray-600">{payment.method}</p>
                        </div>
                        <Badge variant={
                          payment.status === 'Paid' ? 'default' :
                          payment.status === 'Pending' ? 'secondary' : 'destructive'
                        }>
                          {payment.status}
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{payment.date}</p>
                        </div>
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

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Pending Fee Collection</span>
                  <Button variant="outline" className="gap-2">
                    <Send className="h-4 w-4" />
                    Send Reminders
                  </Button>
                </CardTitle>
                <CardDescription>Students with pending fee payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          student.days < 0 ? 'bg-red-100' : student.days <= 3 ? 'bg-yellow-100' : 'bg-green-100'
                        }`}>
                          <Users className={`h-5 w-5 ${
                            student.days < 0 ? 'text-red-600' : student.days <= 3 ? 'text-yellow-600' : 'text-green-600'
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.class}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{student.amount}</p>
                          <p className="text-sm text-gray-600">Due: {student.dueDate}</p>
                        </div>
                        <Badge variant={
                          student.days < 0 ? 'destructive' : 
                          student.days <= 3 ? 'secondary' : 'outline'
                        }>
                          {student.days < 0 ? `${Math.abs(student.days)} days overdue` : 
                           student.days <= 3 ? `${student.days} days left` : 'On time'}
                        </Badge>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Send className="h-4 w-4" />
                          Remind
                        </Button>
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
                <CardTitle>Fee Reports & Analytics</CardTitle>
                <CardDescription>Generate comprehensive fee collection reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Monthly Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Detailed monthly collection analysis</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Class-wise Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Fee collection by class and section</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium mb-2">Defaulters List</h4>
                    <p className="text-sm text-gray-600 mb-3">Students with overdue payments</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Fee Management Settings</CardTitle>
                <CardDescription>Configure fee structure and payment settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Integration Settings</h4>
                    <p className="text-sm text-blue-700">
                      Configure WhatsApp API, Payment Gateway, and Tally integration for automated fee management.
                    </p>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <Button variant="outline">Configure Fee Structure</Button>
                    <Button variant="outline">Payment Gateway Settings</Button>
                    <Button variant="outline">WhatsApp Integration</Button>
                    <Button variant="outline">Tally Sync Settings</Button>
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