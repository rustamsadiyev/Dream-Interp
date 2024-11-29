  import './App.css'
  import { routeTree } from './routeTree.gen'
  import {createRouter} from "@tanstack/react-router"
  import {RouterProvider} from "@tanstack/react-router"
  import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

  const queryClient = new QueryClient();

  const router = createRouter({routeTree});

  declare module "@tanstack/react-router" {
    interface Register {
      router: typeof router
    }
  }

  function App() {

    return (
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    )
  }

  export default App
