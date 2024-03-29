import { SocialIcon } from 'react-social-icons';

export default function Partners() {
  return (
    <>
      <div className="w-full my-10">
        <div className="flex w-full justify-center">
          <img width="400" src="/img/bck4.png"/>
        </div>
        <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
          <i className="fal fa-headphones text-blue-400 mr-2" />
          Crew
        </h1>
      </div>

      <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://discord.com/users/712601857473773611">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://images-ext-2.discordapp.net/external/1QrWriPmxd2RUBf7pMRUaDIsKSq_fakhSMAWvpfnmWg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/712601857473773611/a_a69db2dbb6500729a3e6aace61340dc8.gif"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  RK
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Owner</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://arijit.site/">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://cdn.discordapp.com/avatars/842620032960823327/a_19ffa4a4f6cd263a55c957d56a7dba1a.gif"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  Arijit
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Lead Developer</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://naz-portfolio.vercel.app">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://media.tenor.com/nmeWhPzpjCUAAAAM/tokyo-ghoul-anime.gif"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  Frezzick
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Side Developer</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://discord.com/users/782128271876816906">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://wallpapers-clan.com/wp-content/uploads/2022/12/hunter-%C3%97-hunter-killua-gif-pfp-1.gif"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  RKN
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Side Developer</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="py-10"></div>
    </>
  );
}
