import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="blk95u4t4" data-path="src/App.tsx">
    <TooltipProvider data-id="7nng2w2cw" data-path="src/App.tsx">
      <Toaster data-id="i2kn51nz7" data-path="src/App.tsx" />
      <BrowserRouter data-id="rgx685k1y" data-path="src/App.tsx">
        <Routes data-id="z43rx90i7" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="8vmgyqy65" data-path="src/App.tsx" />} data-id="15owdqjrf" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="dgv4n9qkk" data-path="src/App.tsx" />} data-id="wjql4joic" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;