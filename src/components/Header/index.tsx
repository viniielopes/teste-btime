"use client";

import { startTransition } from "react";
import { ButtonChangeTheme } from "@/components/ButtonChangeTheme";
import { usePathname, useRouter } from "next-intl/client";
import { useLocale } from "next-intl";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLocale = (locale: "en" | "pt") => {
    startTransition(() => {
      router.replace(pathname, { locale: locale });
    });
  };

  return (
    <div className="bg-primary flex w-full items-center justify-center">
      <div className="w-16">
        {locale === "pt" ? (
          <span
            className="cursor-pointer text-2xl"
            onClick={() => changeLocale("en")}
          >
            🇺🇸
          </span>
        ) : (
          <span
            className="cursor-pointer text-2xl"
            onClick={() => changeLocale("pt")}
          >
            🇧🇷
          </span>
        )}
      </div>
      <h1 className="py-6 text-4xl font-bold text-text-primary dark:text-white">
        Kanban <span className="text-feedback-warning">Board</span>
      </h1>
      <div className="w-16 pl-8">
        <ButtonChangeTheme />
      </div>
    </div>
  );
};
export default Header;
