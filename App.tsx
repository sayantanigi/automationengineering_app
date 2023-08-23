import { QueryClient, QueryClientProvider } from "react-query";
import RootNavigation from "./navigation/RootNavigation";

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
}

