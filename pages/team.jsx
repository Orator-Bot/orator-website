export default function Partners() {
  return (
    <>
      <div className="w-full my-10">
        <div className="flex w-full justify-center">
          <img width="400" src="/img/bck4.png" />
        </div>
        <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
          <i className="fal fa-stars text-amber-400 mr-2" />
          Team
        </h1>
      </div>

      <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://discord.com/users/712601857473773611">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://images-ext-2.discordapp.net/external/11NrKkl4WmsrJ2QrUUC_pFC4BWUiDeasktXBMCZhFcw/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/712601857473773611/a69db2dbb6500729a3e6aace61340dc8.webp"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  RK
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Bot Owner</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://discord.com/users/842620032960823327">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://arijit.site/cdn/arijit.png"
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
          <a href="https://discord.com/users/775387817085108235">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://arijit.site/cdn/frezz1ck.jpeg"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  Frezziax
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
