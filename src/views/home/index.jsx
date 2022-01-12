import Head from "next/head";
import React from "react";
import { UnderDevelopment } from "./components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Next MUI - a base project setup with next and mui with custom theming
          and theme toggling.
        </title>
        <meta
          name="description"
          content="a base project setup with next and mui with custom theming and theme toggling."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UnderDevelopment />
    </div>
  );
}
