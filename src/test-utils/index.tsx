import { RenderOptions, render } from "@testing-library/react";
import messages from "@/messages/pt.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextIntlProvider } from "next-intl";
import { ReactElement, ReactNode } from "react";

const locale = "pt";

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <NextIntlProvider messages={messages} locale={locale}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextIntlProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
