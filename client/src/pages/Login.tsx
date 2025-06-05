import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, School, Shield, Users, GraduationCap } from "lucide-react";
import { loginSchema, type LoginForm } from "@/../../shared/auth-schema";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      uniqueId: "",
      passcode: ""
    }
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      
      return response.json();
    },
    onSuccess: (user) => {
      login(user);
      setError("");
    },
    onError: (error: any) => {
      setError(error.message || "Invalid credentials. Please check your ID and passcode.");
    }
  });

  const onSubmit = (data: LoginForm) => {
    setError("");
    loginMutation.mutate(data);
  };

  const demoCredentials = [
    { role: "Super Admin", id: "SUPERADMIN001", passcode: "SA2024@EduX", icon: Shield, desc: "Monitor all onboarded schools" },
    { role: "Chief Account", id: "CHFACC001", passcode: "CA2024@EduX", icon: Users, desc: "Full fee management control" },
    { role: "Principal", id: "PRIN001", passcode: "PR2024@EduX", icon: GraduationCap, desc: "Full monitoring dashboard" },
    { role: "Vice Principal", id: "VPRIN001", passcode: "VP2024@EduX", icon: School, desc: "Full configuration dashboard" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <Card className="w-full max-w-md mx-auto shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <School className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">SmartGenEduX</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Educational Management Platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="uniqueId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unique ID</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your unique ID" 
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passcode</FormLabel>
                      <FormControl>
                        <Input 
                          type="password"
                          placeholder="Enter your passcode" 
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Demo Access</h2>
            <p className="text-gray-600 dark:text-gray-300">Try different role-based dashboards</p>
          </div>
          
          <div className="grid gap-4">
            {demoCredentials.map((cred, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      form.setValue("uniqueId", cred.id);
                      form.setValue("passcode", cred.passcode);
                    }}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <cred.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{cred.role}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cred.desc}</p>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        ID: {cred.id}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Additional Roles Available:</h3>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <div>• HR Manager: HRMGR001</div>
              <div>• Class Teacher: CLSTCH001</div>
              <div>• Non-Class Teacher: NCLSTCH001</div>
              <div>• School Accountant: ACC001</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}