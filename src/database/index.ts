import PocketBase from "pocketbase";
import { LegalDocument } from "./models";

const pocketbase = new PocketBase("https://pocketbase.vsus.app/");

export const getDocument = async (
  id: string
): Promise<LegalDocument | null> => {
  return await pocketbase.collection("documents").getOne(id);
};

export const getDocumentID = async (
  readable_id: string
): Promise<string | null> => {
  return (
    (
      await pocketbase
        .collection("documents")
        .getFullList({ filter: `readable_id = "${readable_id}"` })
    )[0]?.id || null
  );
};
