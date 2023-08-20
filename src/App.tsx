import { MantineProvider } from "@mantine/core";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Content from "./components/Content";
import Overview from "./pages/Overview/Overview";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark", fontFamily: "Readex Pro, sans-serif" }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
