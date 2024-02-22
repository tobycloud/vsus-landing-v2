import PocketBase from "pocketbase";
import { LegalDocument } from "./models";

const pocketbase = new PocketBase("https://pocketbase.vsus.app/");

export const getDocument = async (
  id: string
): Promise<LegalDocument | null> => {
  return await pocketbase
    .collection("documents")
    .getOne(id, { requestKey: null });
};
