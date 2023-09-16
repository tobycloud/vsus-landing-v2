import { MantineProvider } from "@mantine/core";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Content from "./components/Content";
import Error404 from "./pages/404/Error404";
import PrivacyPolicy from "./pages/Documents/PrivacyPolicy";
import TermsOfService from "./pages/Documents/TermsOfService";
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
        element: <PrivacyPolicy />,
      },
      {
        path: "/tos",
        element: <TermsOfService />,
      },
      {
        path: '/discord',
        handle: () => {
          redirect("https://discord.gg/3KdcudZvgH");
        }
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
