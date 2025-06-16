import { PostEntryRequest } from "@/types/ApiRequest";

export const postEntry = async (request: PostEntryRequest) => {
  const result = await window.ipc.postEntry(request);

  if (!result.success) {
    console.error("IPC 에러:", result.error);
    throw new Error(result.error);
  }
  console.log("IPC 성공:", result.data);
  return result.data;
};
