import React from "react";
import { NextIntlProvider } from "next-intl";
import "../src/app/globals.css";
import type { Preview } from "@storybook/react";
import { Poppins } from "next/font/google";

import messagesLocale from "../src/messages/pt.json";

const inter = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });
const locale = "pt";

const preview: Preview = {
  decorators: [
    (Story) => (
      <NextIntlProvider messages={messagesLocale} locale={locale}>
        <div className={inter.className}>
          <Story />
        </div>
      </NextIntlProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
