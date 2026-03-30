import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Assessment from "@/pages/Assessment";
import AssessmentIntro from "@/pages/AssessmentIntro";
import AssessmentQuestion from "@/pages/AssessmentQuestion";
import AssessmentResults from "@/pages/AssessmentResults";
import Chat from "@/pages/Chat";
import Resources from "@/pages/Resources";
import Profile from "@/pages/Profile";
import AuthPage from "@/pages/auth-page";
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";

function AppRoutes() {
  const { user } = useAuth();
  
  return (
    <>
      {user && <Navigation />}
      <main className={user ? "pt-16 pb-16 md:pb-0" : ""}>
        <Switch>
          <Route path="/">
            <Redirect to="/auth" />
          </Route>
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/assessment" component={Assessment} />
          <ProtectedRoute path="/assessment/intro" component={AssessmentIntro} />
          <ProtectedRoute path="/assessment/question/:id" component={AssessmentQuestion} />
          <ProtectedRoute path="/assessment/results" component={AssessmentResults} />
          <ProtectedRoute path="/chat" component={Chat} />
          <ProtectedRoute path="/resources" component={Resources} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/auth" component={AuthPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {user && <MobileNavigation />}
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-gray-50">
            <AppRoutes />
          </div>
          <Toaster />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
