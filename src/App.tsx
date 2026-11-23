
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import HonorsAwards from "./pages/HonorsAwards";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Bibliography from "./pages/Bibliography";
import Motivation from "./pages/Motivation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/honors-awards" element={<HonorsAwards />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bibliography" element={<Bibliography />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
