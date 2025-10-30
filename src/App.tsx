import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

import Home from "./pages/Home";
import Reference from "./pages/Reference";
import TeachingInfantToddler from "./pages/curriculum/TeachingInfantToddler";
import PlayEnvironments from "./pages/curriculum/PlayEnvironments";
import PromotingDevelopment from "./pages/curriculum/PromotingDevelopment";
import CognitiveDevelopment from "./pages/curriculum/CognitiveDevelopment";
import SocialDevelopment from "./pages/curriculum/SocialDevelopment";
import EmotionalDevelopment from "./pages/curriculum/EmotionalDevelopment";
import LanguageLiteracy from "./pages/curriculum/LanguageLiteracy";
import PerceptualDevelopment from "./pages/curriculum/PerceptualDevelopment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="infant-toddler-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reference" element={<Reference />} />
                <Route path="/curriculum/teaching-infant-and-toddler-education" element={<TeachingInfantToddler />} />
                <Route path="/curriculum/infant-and-toddler-play-environments" element={<PlayEnvironments />} />
                <Route path="/curriculum/promoting-infant-and-toddler-development-learning-and-wellbeing" element={<PromotingDevelopment />} />
                <Route path="/curriculum/supporting-cognitive-development" element={<CognitiveDevelopment />} />
                <Route path="/curriculum/fostering-social-development" element={<SocialDevelopment />} />
                <Route path="/curriculum/fostering-emotional-development" element={<EmotionalDevelopment />} />
                <Route path="/curriculum/facilitating-language-and-literacy-development" element={<LanguageLiteracy />} />
                <Route path="/curriculum/perceptual-development-and-the-five-senses" element={<PerceptualDevelopment />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
