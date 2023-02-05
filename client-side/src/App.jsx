import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast";
import "font-awesome/css/font-awesome.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AppRoutes />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
