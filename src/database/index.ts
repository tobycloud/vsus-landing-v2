import PocketBase from "pocketbase";
import { PBDocument } from "./models";

const pocketbase = new PocketBase("https://pocketbase.vsus.app/");

export const getDocument = async (id: string): Promise<PBDocument | null> => {
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
