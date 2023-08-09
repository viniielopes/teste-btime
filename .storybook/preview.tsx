import React from 'react';
import { NextIntlProvider } from "next-intl";
import "../src/app/globals.css";
import type { Preview } from "@storybook/react";

import messagesLocale from "../src/messages/pt.json";

const locale = "pt";

const preview: Preview = {
  decorators: [
    (Story) =>
      <NextIntlProvider messages={messagesLocale} locale={locale}>
        <Story />
      </NextIntlProvider>
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
