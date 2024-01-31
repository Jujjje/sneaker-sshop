import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Catalog} from "src/pages/catalog/index";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog />,
  },
]);

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
