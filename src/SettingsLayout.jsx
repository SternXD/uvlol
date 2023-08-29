import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Head from "./components/head.jsx";
import Obfuscate from "./components/obfuscate.jsx";
import clsx from "clsx";
import { useTranslation } from 'react-i18next';

function Tab({ to, children }) {
  const location = useLocation();

  return (
    <Link to={to}>
      <div
        className={clsx(
          "settingssidecard",
          location.pathname === to && "settingssidecardsel"
        )}
      >
        <Obfuscate>{children}</Obfuscate>
      </div>
    </Link>
  );
}

export default function SettingsLayout({ children }) {
  const { t } = useTranslation("settings");

  return (
    <>
      <Head defaultTitle="settings"></Head>
      <Nav settings />
      <div className="settingssidebar">
        <div className="settingssidetitle">
          <Obfuscate>{t("title")}</Obfuscate>
        </div>
        <Tab to="/3/1.html">
          <Obfuscate>{t("sidebar.search")}</Obfuscate>
        </Tab>
        <Tab to="/3/2.html">
          <Obfuscate>{t("sidebar.tab")}</Obfuscate>
        </Tab>
        <Tab to="/3/3.html">
          <Obfuscate>{t("sidebar.appearance")}</Obfuscate>
        </Tab>
        <Tab to="/3/4.html">
          <Obfuscate>{t("sidebar.ui")}</Obfuscate>
        </Tab>
      </div>
      <div className="settingsapp">{children}</div>
    </>
  );
}
