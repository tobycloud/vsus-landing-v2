import { getDocument, getDocumentID } from "../database";
import { PBDocument } from "../database/models";
import { documentsList } from "../pages/Docs/documents_list";

export const monthsKey = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
} as const;

export const documentLoader = async (
  loadedDocuments: PBDocument[],
  setLoadedDocuments: (documents: PBDocument[]) => void,
  readable_id: string | undefined
) => {
  if (!readable_id) return { document: null };

  try {
    const fetchedDocument = loadedDocuments.find(
      (doc) => doc.readable_id === readable_id
    );

    // TODO: refactor
    const sectionTitle =
      documentsList.find((section) =>
        section.documents.some((doc) => doc.readable_id === readable_id)
      )?.title ?? "";

    if (fetchedDocument)
      return {
        document: fetchedDocument,
        sectionTitle: sectionTitle,
      };

    const documentID = await getDocumentID(readable_id);
    if (!documentID) return { document: null };

    const document = await getDocument(documentID);
    if (!document) return { document: null };

    setLoadedDocuments([...loadedDocuments, document]);

    return { document: document, sectionTitle: sectionTitle };
  } catch (error) {
    return { document: null };
  }
};
