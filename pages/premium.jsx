export default function Premium() {
    return (
        <>
            <div className="w-full">
                <div className="flex w-full justify-center">
                    <img width="400" src="/img/bck3.png" />
                </div>
                <h1 className="py-2 animateHeader text-2xl font-extrabold text-center text-white">💙 Orator Premium</h1>
                <p className="text-gray-500 text-center p-7">Orator Premium is a paid subscription service offered by the Orator 
                TTS bot. It offers additional features and benefits that are not available in the free version. Some of these features include 
                higher quality voice output, more customization options, more languages and accents, as well as faster TTS processing. 
                </p>
            </div>
            <div>
            <div className="py-1"></div>
            <h1 className="py-2 animateHeader text-2xl font-bold text-center text-white">Premium Features</h1>
                <p className="text-gray-300 text-center p-3"><span className="bg-gray-600 opacity-70 rounded-md px-1 font-mono">.customvoice</span> - You can set a custom voice of any famous celebrity using this command.</p>
                <p className="text-gray-300 text-center p-3"><span className="bg-gray-600 opacity-70 rounded-md px-1 font-mono">.customtts</span> - use this command to run the custom voice with a text.</p>
                <p className="text-gray-300 text-center p-3"><span className="bg-gray-600 opacity-70 rounded-md px-1 font-mono">.antiswear</span> - you can use this command to prohibit the users to swear or cuss in the vc.</p>
                <p className="text-gray-300 text-center p-3"><span className="bg-gray-600 opacity-70 rounded-md px-1 font-mono">.blacklistword</span> - you can blacklist a set of words to use in your server.</p>
                <p className="text-gray-300 text-center p-3"><span className="bg-gray-600 opacity-70 rounded-md px-1 font-mono">.setpanel</span> - use this to setup a panel on your server to use the commands and TTS </p>                
                <p className="text-gray-300 text-center p-3"><span className="bg-gray-600 opacity-70 rounded-md px-1 font-mono">.setlogs</span> - .setlogs is used to setting up the logs on your server.</p>
            </div>
            <div className="py-3"></div>
                    <h1 className="py-2 animateHeader text-2xl font-bold text-center text-white">Premium Plans</h1>
            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col justify-center text-white">
                    <div className='h-80 w-80 gap-2 bg-[#3166c238] rounded-lg border-2 border-[#3166c238] text-center items-center justify-center flex flex-col space-y-1 hover:scale-105 transition-all'>
                        <h1 className='text-white font-bold text-lg'>1 Month Plan</h1>
                        <h2 className='text-white text-lg'><span className='text-gray-400'>US</span> <span className='text-white text-4xl'>3.99</span><span className='text-gray-400 text-4xl'>$</span></h2>
                        <h2 className='text-gray-500  text-md'>Billed every month</h2>
                        <h2 className='text-white text-md'>✔ Monthly plan with benifits</h2>
                        <h2 className='text-white text-md'>✔ Transferable to another server</h2>
                        <a href="#" className='border-2 border-[#3166c2] p-3 relative top-3 rounded-lg hover:bg-[#3166c2] hover:text-white transition-all'>Get the 1 Month plan</a>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-white">
                    <div className='h-96 w-80 gap-2 bg-[#3166c238] sm:relative sm:bottom-0 lg:relative lg:bottom-4 rounded-lg border-2 border-[#3166c238] text-center items-center justify-center flex flex-col space-y-1 hover:scale-105 transition-all'>
                        <h1 className='text-white font-bold text-xl'>Lifetime Plan</h1>
                        <h2 className='text-white text-lg'><span className='text-gray-400'>US</span> <span className='text-white text-4xl'>50</span><span className='text-gray-400 text-4xl'>$</span></h2>
                        <h2 className='text-gray-500 text-md'>Single Payment</h2>
                        <h2 className='text-white text-md'>✔ Biggest savings</h2>
                        <h2 className='text-white text-md'>✔ MOST POPULAR</h2>
                        <h2 className='text-white text-md'>✔ Transferable to another server</h2>
                        <a href="#" className='border-2 border-[#3166c2] p-3 relative top-3 rounded-lg hover:bg-[#3166c2] hover:text-white transition-all'>Get the Lifetime plan</a>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-white">
                    <div className='h-80 w-80 gap-2 bg-[#3166c238] rounded-lg border-2 border-[#3166c238] text-center items-center justify-center flex flex-col space-y-1 hover:scale-105 transition-all'>
                        <h1 className='text-white font-bold text-xl'>3 Month Plan</h1>
                        <h2 className='text-white text-lg'><span className='text-gray-400'>US</span> <span className='text-white text-4xl'>7.50</span><span className='text-gray-400 text-4xl'>$</span></h2>
                        <h2 className='text-gray-500  text-md'>Billed every 3 months</h2>
                        <h2 className='text-white text-md'>✔ Yearly plan with benifits</h2>
                        <h2 className='text-white text-md'>✔ Transferable to another server</h2>
                        <a href="#" className='border-2 border-[#3166c2] p-3 relative top-3 rounded-lg hover:bg-[#3166c2] hover:text-white transition-all'>Get the 3 Month plan</a>
                    </div>
                </div>
            </div>
            <div className="py-10"></div>
        </>
    );
}
