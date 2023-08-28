import { MantineProvider } from "@mantine/core";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Content from "./components/Content";
import Download from "./pages/Download/Download";
import Overview from "./pages/Overview/Overview";
import Pricing from "./pages/Pricing/Pricing";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/download",
        element: <Download />,
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
      theme={{
        colorScheme: "dark",
        fontFamily: "Readex Pro, sans-serif",
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
