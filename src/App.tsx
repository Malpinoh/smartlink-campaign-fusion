
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import CreateSmartLink from "./pages/CreateSmartLink";
import CreatePreSave from "./pages/CreatePreSave";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Convert to a proper function component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-smart-link" element={<CreateSmartLink />} />
            <Route path="/create-pre-save" element={<CreatePreSave />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
