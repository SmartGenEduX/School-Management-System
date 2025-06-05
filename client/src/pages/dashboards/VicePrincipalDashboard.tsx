import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Users, Calendar, FileText, School, Cog, BookOpen, Clock, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function VicePrincipalDashboard() {
  const { user } = useAuth();

  const configurationStats = {
    totalSystems: 12,
    activeConfigurations: 11,
    pendingUpdates: 3,
    lastBackup: "2 hours ago",
    systemHealth: 98.5,
    automatedProcesses: 15
  };

  const systemModules = [
    { name: "Timetable Management", status: "active", lastUpdate: "Dec 5, 2024", health: 100 },
    { name: "Fee Management", status: "active", lastUpdate: "Dec 6, 2024", health: 98 },
    { name: "Attendance System", status: "active", lastUpdate: "Dec 4, 2024", health: 99 },
    { name: "Exam Management", status: "maintenance", lastUpdate: "Dec 3, 2024", health: 85 },
    { name: "Report Generator", status: "active", lastUpdate: "Dec 6, 2024", health: 97 },
    { name: "WhatsApp Integration", status: "active", lastUpdate: "Dec 5, 2024", health: 95 }
  ];

  const configurationTasks = [
    { task: "Update Academic Calendar 2024-25", priority: "high", deadline: "Dec 10, 2024", status: "pending" },
    { task: "Configure New Semester Settings", priority: "medium", deadline: "Dec 15, 2024", status: "in-progress" },
    { task: "Setup Parent Portal Access", priority: "high", deadline: "Dec 8, 2024", status: "pending" },
    { task: "Review Security Protocols", priority: "low", deadline: "Dec 20, 2024", status: "completed" }
  ];

  const automatedProcesses = [
    { process: "Daily Attendance Backup", status: "running", nextRun: "Tomorrow 6:00 AM", frequency: "Daily" },
    { process: "Fee Reminder Notifications", status: "running", nextRun: "Every Monday 9:00 AM", frequency: "Weekly" },
    { process: "Report Generation", status: "running", nextRun: "End of Month", frequency: "Monthly" },
    { process: "System Health Check", status: "running", nextRun: "Every 2 Hours", frequency: "Continuous" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Vice Principal Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Complete system configuration and setup management</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Full Configuration Access
        </Badge>
      </div>

      {/* System Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{configurationStats.systemHealth}%</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Modules</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{configurationStats.activeConfigurations}</div>
            <p className="text-xs text-muted-foreground">of {configurationStats.totalSystems} total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Updates</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{configurationStats.pendingUpdates}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automated Processes</CardTitle>
            <Cog className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{configurationStats.automatedProcesses}</div>
            <p className="text-xs text-muted-foreground">Running smoothly</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="modules" className="space-y-4">
        <TabsList>
          <TabsTrigger value="modules">System Modules</TabsTrigger>
          <TabsTrigger value="configuration">Configuration Tasks</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="settings">School Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="modules">
          <Card>
            <CardHeader>
              <CardTitle>System Module Status</CardTitle>
              <CardDescription>Monitor and configure all school management modules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemModules.map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        module.status === 'active' ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'
                      }`}>
                        <Settings className={`w-5 h-5 ${
                          module.status === 'active' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{module.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Last updated: {module.lastUpdate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold">{module.health}%</p>
                        <Badge variant={module.status === 'active' ? 'default' : 'secondary'}>
                          {module.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="configuration">
          <Card>
            <CardHeader>
              <CardTitle>Configuration Tasks</CardTitle>
              <CardDescription>Pending configuration and setup tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {configurationTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold">{task.task}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Due: {task.deadline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={
                        task.status === 'completed' ? 'default' :
                        task.status === 'in-progress' ? 'secondary' : 'outline'
                      }>
                        {task.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {task.status === 'completed' ? 'Review' : 'Configure'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation">
          <Card>
            <CardHeader>
              <CardTitle>Automated Processes</CardTitle>
              <CardDescription>Monitor and manage automated school processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automatedProcesses.map((process, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <Cog className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{process.process}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {process.frequency} • Next: {process.nextRun}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {process.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
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
              <CardTitle>School Settings & Configuration</CardTitle>
              <CardDescription>Manage global school settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <School className="w-6 h-6 mb-2 text-blue-600" />
                  <span>School Profile</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <Calendar className="w-6 h-6 mb-2 text-green-600" />
                  <span>Academic Calendar</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <Users className="w-6 h-6 mb-2 text-purple-600" />
                  <span>User Permissions</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <FileText className="w-6 h-6 mb-2 text-orange-600" />
                  <span>Report Templates</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <Settings className="w-6 h-6 mb-2 text-red-600" />
                  <span>System Preferences</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <BookOpen className="w-6 h-6 mb-2 text-indigo-600" />
                  <span>Curriculum Setup</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}