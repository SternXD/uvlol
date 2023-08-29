import React from "react";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import { discord } from "../consts";
import Obfuscate from "../components/obfuscate.jsx";
import { useTranslation } from 'react-i18next';

function Support() {
  const { t } = useTranslation("support");

  return (
    <>
      <Head defaultTitle="support"></Head>
      <Nav />
      <div className="itemscontainer">
        <div className="itemsection">
          <Obfuscate>{t("faq")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("questions.0.title")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>{t("questions.0.answer")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("questions.1.title")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>{t("questions.1.answer")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("questions.2.title")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>{t("questions.2.answer")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("questions.3.title")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>{t("questions.3.answer")}</Obfuscate>
        </div>
        <div className="itemsection">
          <Obfuscate>{t("contact")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("email")}</Obfuscate>
        </div>
        <a className="link" href="mailto:nebelung@mailfence.com">
          <div className="itemtext">
            <Obfuscate>nebelung@mailfence.com</Obfuscate>
          </div>
        </a>
        <div className="itemtitle">
          <Obfuscate>Discord</Obfuscate>
        </div>
        <a className="link" href={discord}>
          <div className="itemtext">
            <Obfuscate>{discord}</Obfuscate>
          </div>
        </a>
      </div>
    </>
  );
}

export default Support;
