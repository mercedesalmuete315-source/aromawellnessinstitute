import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BirthdayFunnel from "./pages/Birthday.tsx";
import Florist from "./pages/Florist.tsx";
import Mercedes from "./pages/Mercedes.tsx";
import AutoRepair from "./pages/AutoRepair.tsx";
import Tesda from "./pages/Tesda.tsx";
import AromaSpa from "./pages/AromaSpa.tsx";
import LadyBoss from "./pages/LadyBoss.tsx";
import Challenge from "./pages/Challenge.tsx";
import SuccessChallenge from "./pages/SuccessChallenge.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LadyBoss />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/success-challenge" element={<SuccessChallenge />} />
          <Route path="/tesda" element={<Tesda />} />
          <Route path="/spa" element={<AromaSpa />} />
          <Route path="/auto-repair" element={<AutoRepair />} />
          <Route path="/mercedes" element={<Mercedes />} />
          <Route path="/florist" element={<Florist />} />
          <Route path="/birthday" element={<BirthdayFunnel />} />
          <Route path="/wedding" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
