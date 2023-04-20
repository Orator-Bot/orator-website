import Link from "next/link";
import Image from "next/image";

export default function Index() {

  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-50 justify-center">
      <img width="160" src="/img/bck.png" className="relative bottom-5" />
      </div>
        <p className="animateHeader text-3xl font-extrabold text-center text-white">
          Orator Bot
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-6 text-md">
       Hi there, I'm a text to speech bot designed to make your discord experience more accessible and engaging. Whether your a gamer, 
       a student or just looking for a new way to communicate with friends and family, I'm here to help. My advanced voice recognition 
       technology allows me to convert any text message into clear, natural sounding speech in a matter of seconds. With my easy to use 
       commands, you can customize my voice, adjust the speed and volume, and even chose from a variety of languages I speak.
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=948637316145102868&permissions=2184535104&scope=applications.commands%20bot"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg rounded-xl py-4 font-medium bg-gradient-to-bl from-blue-700 to-blue-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite Orator
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://top.gg/bot/948637316145102868/vote"}>
  <a className={"flex items-center px-6 justify-center gap-x-2 shadow-lg rounded-xl py-4 font-medium bg-gradient-to-bl from-blue-700 to-blue-500 hover:opacity-80 transition duration-200 text-white " }>
Vote Orator</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Orator Bot" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Speak with our voice, we just need you to text..." }}/>
            <a href="https://discord.com/oauth2/authorize?client_id=948637316145102868&permissions=2184535104&scope=applications.commands%20bot" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-blue-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-blue-700 to-blue-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite Orator
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-blue-500`} /> Text to Speech</p>
                  <p className="text-gray-500 line-clamp-4">Powerful Text to Speech feature with 50+ languages.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-blue-500`} /> Custom Voice</p>
                  <p className="text-gray-500 line-clamp-4">Voices of famous personalities in our own Custom Voice system</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-blue-500`} /> Utilities</p>
                  <p className="text-gray-500 line-clamp-4">Many voice utility systems which empower the bot to t
                  next level.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-blue-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">With our best teammates, we provide the fastest response to anyone who needs help.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90  items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                 
                  <p className="text-3xl text-white font-semibold">Orator - Your Own Text to Speech Bot</p>
                  <p className="text-md text-white font-medium line-clamp-5">Are you ready to try out the systems?</p>
                </div>
                
              </>
      
        </div>

      </>
  )
}