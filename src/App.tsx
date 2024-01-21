import { MantineProvider } from "@mantine/core";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
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
        element: <Document title="privacy" />,
      },
      {
        path: "/tos",
        element: <Document title="tos" />,
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
        fontFamily: "Readex Pro, sans-serif",
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
