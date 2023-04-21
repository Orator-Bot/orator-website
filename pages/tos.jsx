import Footer from "../components/Static/Footer";

export default function Tos() {
  return (
    <div className="space-y-7 p-0 lg:p-6">
      <h2 className="mt-4 text-white font-bold text-2xl">Terms of Services</h2>
      <p className="text-lg text-gray-500 mb-1space-y-10">Created by Orator Team.</p>
      <div className="animateHeader text-white text-opacity-60 mt-5">
      <p className="text-lg text-gray-100 mb-1space-y-10">Personal Data</p>
      <div className="py-3"></div>
      <p>While using Orator, you accept that you're allowing us to use your Discord ID, your Discord Server
         ID and your server's Channel ID for our work. Reason of usage:</p>
      <div className="py-3"></div>
         <p>DISCORD ID: We will use your Discord ID for our: Premium System as it is required to save the ID of the user who have our Premium.</p>
      <div className="py-3"></div>
         <p>SERVER ID: We will use your Discord Server ID for our: Setup Language System as it is required to save which server uses which language as a primary TTS language.</p>
      <div className="py-3"></div>
        <p>CHANNEL ID: We will use your Server's Channel ID for our: Channel Only System as it is required to know where should the bot be ran and where not.</p>
         </div>
      <div className="animateHeader text-white text-opacity-60 mt-5">
      <p className="text-xl text-gray-100 mb-1space-y-10">Terms to consider</p>
      <div className="py-3"></div>
        <p>1. We doesn't allow usage of Orator for illegal uses. Making NSFW sounds and other type of TTS messages which
           aren't allowed to be done in a public voice channel, that can lead to ban of the user or the server owner or the whole server. 
           Things we consider: - If the whole server is liable behind this issue, the server owner will be banned from using Orator and the
            whole server will get Blacklisted. - If a single person is liable behind this, then under certain cases that single person will
             be banned from using Orator.</p>
        <div className="py-3"></div>
        <p>2. Servers Breaking Discord's ToS can also get banned. Though every cases aren't same and we may consider some of them.</p>
        <div className="py-3"></div>
        <p>3. If your server is found liable, or any user is found liable of doing something illegal, an issue notice will be sent 
          to the Server Owner or an Admin about that issue. And the bot will be removed from the server as a warning. Though clearing 
          data about that server depends on us.</p>
        <div className="py-3"></div>
        <p>4. If we are asked by Discord for taking any steps, we will do it without giving any warnings.</p>
        <div className="py-3"></div>
        <p>⊳ While using the bot, you cannot use it in a way that harms other users for troll purposes.</p>
        <div className="py-3"></div>
        <p className="text-lg text-gray-300 mb-1space-y-10">Who has access</p>
        <div className="py-3"></div>
        <p>Only the owner and the developers of the bot have access to your data. Under no circumstance, anyone other than the mentioned above staff will be provided access to it.</p>


      </div>
    </div>
  );
}
