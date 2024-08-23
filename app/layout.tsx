"use client";
import React, { useEffect, useState } from "react";

import { RiGithubFill } from "react-icons/ri";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { Logo } from "../components/logo";
import UserProfile from "../components/user-profile";
import metainfo from "../meta-info";
import "../styles/globals.scss";

const navigation: { path: string; title: string }[] = [
  { path: "#app", title: "Bonse App" },
  { path: "#features", title: "Features" },
  { path: "#seo-tools", title: "SEO tools" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      /* @ts-ignore */
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="/">
        <Logo />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-800 hover:text-gray-300"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicons/favicon-48x48.png"
        />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#fff" />
        <meta name="application-name" content="BONSE" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/favicons/apple-touch-icon-167x167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="1024x1024"
          href="/favicons/apple-touch-icon-1024x1024.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="BONSE" />
        <link
          rel="yandex-tableau-widget"
          href="/favicons/yandex-browser-manifest.json"
        />

        <meta property="og:title" content={metainfo.title} />
        <meta property="og:description" content={metainfo.description} />

        <meta name="twitter:title" content={metainfo.title} />
        <meta name="twitter:description" content={metainfo.description} />
      </head>
      <body>
        <header className="border-b border-gray-300 rounded-b-2xl">
          <Banner />
          <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
            <Brand />
          </div>
          <nav
            className={`md:text-sm ${
              state
                ? "absolute z-20 top-0 inset-x-0 bg-white border rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent p-5 pb-10 md:p-0"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="text-gray-500 hover:text-primary"
                      >
                        <a href={item.path} className="block">
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                  <li
                    className="text-gray-500 hover:text-primary"
                    key={navigation.length + 1}
                  >
                    <a href="https://github.com/cresteem" target="_blank">
                      <RiGithubFill size={30} />
                    </a>
                  </li>
                  <UserProfile />
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
