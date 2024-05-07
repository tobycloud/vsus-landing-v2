import { MantineProvider } from "@mantine/core";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Content from "./components/Content";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
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
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
          ],
        },
        fontFamily: "Inter, sans-serif",
        headings: {
          fontFamily: "Inter, sans-serif",
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
