import { postEntry } from "@/api/HomeApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useEntryApi = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: postEntry,
    onSuccess: (response) => {
      console.log(response);
      router.push("/success");
    },
    onError: (error) => {
      console.error("API 요청 실패:", error);
    },
  });

  return { mutation };
};
