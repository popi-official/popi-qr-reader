import { postEntry } from "@/api/HomeApi";
import { useMutation } from "@tanstack/react-query";

export const useEntryApi = () => {
  const mutation = useMutation({
    mutationFn: postEntry,
  });

  return { mutation };
};
