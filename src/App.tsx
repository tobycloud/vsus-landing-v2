import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Content from "./components/Content";
import { PBDocument } from "./database/models";
import Document from "./pages/Docs/Document";
import Docs from "./pages/Docs/MainMenu";
import { Error404 } from "./pages/Errors/404";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { documentLoader } from "./utils";

export default function App() {
  const [loadedDocuments, setLoadedDocuments] = useState<PBDocument[]>([]);

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
        {
          path: "/docs",
          element: <Docs />,
        },
        {
          path: "/docs/:readable_id",
          element: <Document />,
          loader: async ({ params }) => {
            const { readable_id } = params;
            return documentLoader(
              loadedDocuments,
              setLoadedDocuments,
              readable_id
            );
          },
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        colors: {
          dark: [
            "#ffffff",
            "#606060",
            "#535353",
            "#464646",
            "#393939",
            "#2d2d2d",
            "#202020",
            "#111111",
            "#060606",
            "#000000",
          ],
        },
        fontFamily: "Inter, sans-serif",
        headings: {
          fontFamily: "Inter, sans-serif",
        },
        spacing: {
          xs: "0.625rem",
          sm: "0.75rem",
          md: "1rem",
          lg: "1.25rem",
          lg3: "3.75rem",
          xl: "2rem",
          xl2: "4rem",
          xl3: "6rem",
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
