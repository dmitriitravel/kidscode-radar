import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

/** Содержимое приложения без HelmetProvider — переиспользуется на сервере. */
export const AppShell = () => (
  <TooltipProvider delayDuration={200}>
    <Index />
    <Sonner />
  </TooltipProvider>
);

const App = () => (
  <HelmetProvider>
    <AppShell />
  </HelmetProvider>
);

export default App;
