import { PostEntryRequest } from "@/types/ApiRequest";
import { api } from "./config/Axios";
import { ApiResponse, NoResponse } from "@/types/ApiResponse";

export const postEntry = async (request: PostEntryRequest) => {
  const response = await api.post<ApiResponse<NoResponse>>(
    `/reservations/entrance?popupId=${request.popupId}`,
    {
      request,
    }
  );
  return response.data;
};
