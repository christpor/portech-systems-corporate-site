/** Cobalt Signal Architecture: the root holds a persistent navigation shell and a command-like global search across all corporate routes. */
import { useCallback, useState } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { SiteShell } from "./components/SiteShell";
import { SearchOverlay } from "./components/SearchOverlay";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import CaseStudies from "./pages/CaseStudies";
import InvestorsPress from "./pages/InvestorsPress";
import NotFound from "./pages/NotFound";
function Router() { return <Switch><Route path="/" component={Home} /><Route path="/products" component={Products} /><Route path="/industries" component={Industries} /><Route path="/insights" component={Insights} /><Route path="/case-studies" component={CaseStudies} /><Route path="/investors-press" component={InvestorsPress} /><Route component={NotFound} /></Switch>; }
export default function App() { const [searchOpen, setSearchOpen] = useState(false); const openSearch = useCallback(() => setSearchOpen(true), []); return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><SiteShell onOpenSearch={openSearch}><Router /></SiteShell><SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} /><Toaster /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
