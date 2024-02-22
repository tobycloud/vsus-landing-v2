import { MantineProvider } from "@mantine/core";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Content from "./components/Content";
import Error404 from "./pages/404/Error404";
import Document from "./pages/Documents/Document";
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
      {
        path: "/privacy",
        element: <Document id="cc62zlogyvcywte" />,
      },
      {
        path: "/tos",
        element: <Document id="u8rco7fc6upbulf" />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        colors: {
          dark: [
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
            "#1a1b1e",
          ],
        },
        fontFamily: "Readex Pro, sans-serif",
        headings: {
          fontFamily: "Readex Pro, sans-serif",
        },
        breakpoints: {
          minplans: "80rem",
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
