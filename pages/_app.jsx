import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Static/Header.jsx";
import Footer from "../components/Static/Footer.jsx";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import { ThemeProvider } from 'next-themes'

export default function AwardApp({ Component, pageProps }) {
 
  const NavItems = [
    {
      link: true,
      name: "Home",
      icon: "fa fa-home",
      activeIcon: "fa fa-home",
      href: "/",
    },
    {
      link: true,
      name: "Premium",
      icon: "fa fa-list-alt",
      activeIcon: "fa fa-list-alt",
      href: "/premium",
    },
    {
      link: true,
      name: "Team",
      icon: "fal fa-handshake",
      activeIcon: "fa fa-handshake",
      href: "/team",
    },
    {
      link: true,
      name: "Support",
      icon: "fab fa-discord",
      activeIcon: "fab fa-discord",
      href: "https://discord.gg/TeS3haQ4tT",
    },
    {
      link: true,
      name: "Panel",
      icon: "fal fa-robot",
      activeIcon: "fab fa-robot",
      href: "/",
    },
  ]

  return (
    <ThemeProvider defaultTheme='blue'>
    <div className="h-screen relative border-t-2 border-blue-600">
      <div
        className="bg-gradient-to-b z-10 opacity-[25%] absolute top-0 w-full from-blue-600 to-transparent"
        style={{ height: "500px" }}
      />
      <Head>
        <title>
          Orator | Discord bot
        </title>
      </Head>
      <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
        <Header NavItems={NavItems} />
        <div className="block px-5 md:px-0">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
      <div>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
        <script src="/js/main.js?i=2" />
      </div>
    </div>
    </ThemeProvider>
  );
}
