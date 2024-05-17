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
import { getDocument, getDocumentID } from "./database";
import { LegalDocument } from "./database/models";
import Docs from "./pages/Docs/MainMenu";
import { Error404 } from "./pages/Errors/404";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Document from "./pages/Docs/Document";

export default function App() {
  const [loadedDocuments, setLoadedDocuments] = useState<LegalDocument[]>([]);

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

            if (!readable_id) return { document: null };

            try {
              if (
                loadedDocuments
                  .map((doc) => doc.readable_id)
                  .includes(readable_id)
              ) {
                const document = loadedDocuments.find(
                  (doc) => doc.readable_id === readable_id
                );
                return { document: document };
              } // pseudo-memoize

              const documentID = await getDocumentID(readable_id);
              if (!documentID) return { document: null };

              const document = await getDocument(documentID);
              if (!document) return { document: null };

              setLoadedDocuments([...loadedDocuments, document]);

              return { document: document };
            } catch (error) {
              return { document: null };
            }
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
