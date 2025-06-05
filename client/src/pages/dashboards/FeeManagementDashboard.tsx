import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Users, TrendingUp, AlertCircle, CheckCircle, Edit, Eye, ExternalLink, FileText, Calendar } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Permissions } from "@/../../shared/auth-schema";

export default function FeeManagementDashboard() {
  const { user, hasPermission } = useAuth();
  const canEdit = hasPermission(Permissions.EDIT_FEE_MANAGEMENT);
  const canApprove = hasPermission(Permissions.APPROVE_FEE_TRANSACTIONS);

  const feeStats = {
    totalCollected: "₹18,45,000",
    pendingAmount: "₹2,15,000",
    totalStudents: 850,
    paidStudents: 785,
    defaulters: 65,
    collectionRate: 92.4
  };

  const recentTransactions = [
    { id: "TXN001", student: "Rahul Sharma", class: "10-A", amount: "₹15,000", status: "Paid", date: "2024-12-06", method: "UPI" },
    { id: "TXN002", student: "Priya Patel", class: "9-B", amount: "₹12,500", status: "Pending", date: "2024-12-05", method: "Bank Transfer" },
    { id: "TXN003", student: "Amit Kumar", class: "11-C", amount: "₹18,000", status: "Paid", date: "2024-12-04", method: "Cash" },
    { id: "TXN004", student: "Sneha Singh", class: "8-A", amount: "₹10,000", status: "Overdue", date: "2024-11-28", method: "Cheque" }
  ];

  const defaultersList = [
    { name: "Rajesh Gupta", class: "10-B", amount: "₹15,000", daysOverdue: 15, lastReminder: "2024-11-25" },
    { name: "Sunita Devi", class: "9-A", amount: "₹12,500", daysOverdue: 8, lastReminder: "2024-11-30" },
    { name: "Vikram Singh", class: "11-A", amount: "₹18,000", daysOverdue: 22, lastReminder: "2024-11-20" }
  ];

  // Google Forms URLs for integration
  const googleFormsUrls = {
    feeRemissionRequest: "https://forms.gle/feeRemissionRequestForm123", // Replace with actual Google Form URL
    scholarshipApplication: "https://forms.gle/scholarshipApplicationForm456", // Replace with actual Google Form URL
    feeInstallmentRequest: "https://forms.gle/feeInstallmentRequestForm789" // Replace with actual Google Form URL
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Fee Management Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {canEdit ? "Full access - Manage all fee operations" : "View-only access - Monitor fee collections"}
          </p>
        </div>
        <Badge variant={canEdit ? "default" : "secondary"}>
          {user?.role === "chief_account" ? "Chief Account" : user?.role === "hr_manager" ? "HR Manager" : "Accountant"}
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{feeStats.totalCollected}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{feeStats.pendingAmount}</div>
            <p className="text-xs text-muted-foreground">{feeStats.defaulters} defaulters</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feeStats.collectionRate}%</div>
            <p className="text-xs text-muted-foreground">{feeStats.paidStudents}/{feeStats.totalStudents} students</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹4,25,000</div>
            <p className="text-xs text-muted-foreground">Target: ₹5,00,000</p>
          </CardContent>
        </Card>
      </div>

      {/* Google Forms Integration */}
      <Card>
        <CardHeader>
          <CardTitle>Fee Request Forms</CardTitle>
          <CardDescription>Google Forms integration for fee-related requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center"
              onClick={() => window.open(googleFormsUrls.feeRemissionRequest, '_blank')}
            >
              <FileText className="w-6 h-6 mb-2 text-blue-600" />
              <span>Fee Remission Request</span>
              <ExternalLink className="w-3 h-3 mt-1" />
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center"
              onClick={() => window.open(googleFormsUrls.scholarshipApplication, '_blank')}
            >
              <Users className="w-6 h-6 mb-2 text-green-600" />
              <span>Scholarship Application</span>
              <ExternalLink className="w-3 h-3 mt-1" />
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center"
              onClick={() => window.open(googleFormsUrls.feeInstallmentRequest, '_blank')}
            >
              <Calendar className="w-6 h-6 mb-2 text-purple-600" />
              <span>Installment Request</span>
              <ExternalLink className="w-3 h-3 mt-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="defaulters">Defaulters</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Fee Transactions</CardTitle>
              <CardDescription>Latest fee payments and collections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{transaction.student}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {transaction.class} • {transaction.method}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold">{transaction.amount}</p>
                        <Badge 
                          variant={
                            transaction.status === "Paid" ? "default" : 
                            transaction.status === "Pending" ? "secondary" : "destructive"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {canEdit && (
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="defaulters">
          <Card>
            <CardHeader>
              <CardTitle>Fee Defaulters</CardTitle>
              <CardDescription>Students with overdue fee payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {defaultersList.map((defaulter, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{defaulter.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {defaulter.class} • {defaulter.daysOverdue} days overdue
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-red-600">{defaulter.amount}</p>
                        <p className="text-xs text-gray-500">Last reminder: {defaulter.lastReminder}</p>
                      </div>
                      {canEdit && (
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Send Reminder
                          </Button>
                          <Button variant="outline" size="sm">
                            Call Parent
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Fee Reports & Analytics</CardTitle>
              <CardDescription>Generate and download fee collection reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <FileText className="w-6 h-6 mb-2 text-blue-600" />
                  <span>Monthly Collection Report</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <TrendingUp className="w-6 h-6 mb-2 text-green-600" />
                  <span>Defaulter Analysis</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <CreditCard className="w-6 h-6 mb-2 text-purple-600" />
                  <span>Payment Method Report</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}