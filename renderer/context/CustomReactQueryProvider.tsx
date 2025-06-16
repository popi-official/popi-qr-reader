import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CustomReactQueryProvider({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
