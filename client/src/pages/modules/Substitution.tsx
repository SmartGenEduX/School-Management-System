import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSchoolConfig } from '@/components/SchoolBranding';

export default function Substitution() {
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
              <h1 className="text-3xl font-bold text-gray-900">Substitution Management</h1>
              <p className="text-gray-600">{schoolConfig.schoolName} • Smart Teacher Replacement System</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="today" className="space-y-4">
          <TabsList>
            <TabsTrigger value="today">Today's Substitutions</TabsTrigger>
            <TabsTrigger value="requests">Leave Requests</TabsTrigger>
            <TabsTrigger value="automatic">Auto Assignment</TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <Card>
              <CardHeader>
                <CardTitle>Today's Substitution Schedule</CardTitle>
                <CardDescription>Current teacher substitutions for {new Date().toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">Today's substitution data will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle>Leave Requests</CardTitle>
                <CardDescription>Pending and approved teacher leave applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">Leave requests will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automatic">
            <Card>
              <CardHeader>
                <CardTitle>Automatic Assignment</CardTitle>
                <CardDescription>AI-powered intelligent substitute teacher assignment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">Auto assignment features will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}