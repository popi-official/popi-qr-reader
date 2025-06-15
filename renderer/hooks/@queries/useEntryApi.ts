import { postEntry } from "@/api/HomeApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useEntryApi = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: postEntry,
    onSuccess: () => {
      router.push("/success");
    },
    onError: (error) => {
      console.error("API 요청 실패:", error);
      // router.push('/error'); // 에러 페이지로 이동하고 싶다면
    },
  });

  return { mutation };
};
