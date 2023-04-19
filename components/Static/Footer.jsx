import Link from "next/link";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <>
      <footer className="py-10">
        <div className="pt-10 mx-auto">
          <div className="lg:grid lg:grid-cols-6 gap-20">
            <div className="col-span-3">
              <div className="flex items-center space-x-5">
                <img src="/img/logo2.png" className="rounded-full w-12" />
                <p className="font-semibold text-xl text-white">Orator Bot</p>
              </div>
              <Menu as="div" className="relative mt-3 inline-block text-left">
              </Menu>
            </div>
            <div className="col-span-1">
              <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">
                Links
              </p>
              <div>
                <Link href="https://oratorbot.xyz/vote">
                  <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                    Vote Bot
                  </a>
                </Link>
              </div>
              <div>
                <a
                  href="https://oratorbot.xyz/support"
                  target="_blank"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  Support Server
                </a>
              </div>
              <div>
                <a
                  href=" https://oratorbot.xyz/invite"
                  target="_blank"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  Invite Bot
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">
                Social
              </p>
              <div>
                <Link href="https://oratorbot.xyz/support">
                  <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                    <i className={`fa-brands fa-discord`} /> Discord
                  </a>
                </Link>
              </div>
              <div>
                <Link href="https://github.com/Orator-Bot">
                  <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                    <i className={`fa-brands fa-github`} /> GitHub
                  </a>
                </Link>
              </div>
              <div>
                <Link href="https://oratorbot.xyz/orator2">
                  <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                    <i className={`fa-solid fa-headphones-simple`} /> Orator 2
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">
                Important
              </p>
              <div>
                <Link href="/tos">
                  <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                    Terms Of Service
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/privacy">
                  <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                    Privacy Policy
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <p className="text-white text-center sm:text-left text-opacity-50">
              {new Date().getFullYear()} &copy; Orator Bot
            </p>
            <div className="hidden md:flex items-center justify-center">
              <p className={"text-xs text-green-400"}>Team Orator</p>
            </div>
            <p className="text-white text-center sm:text-right text-opacity-50">
              {"Orator Bot ❤️"}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
