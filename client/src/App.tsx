import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TheVenue from "./pages/TheVenue";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Guestbook from "./pages/Guestbook";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/venue"} component={TheVenue} />
          <Route path={"/gallery"} component={Gallery} />
          <Route path={"/schedule"} component={Schedule} />
          <Route path={"/pricing"} component={Pricing} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/guestbook"} component={Guestbook} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
