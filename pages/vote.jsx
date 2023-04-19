import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

const Redirect = () => {

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {

    // Replace the URL below with the desired URL that you want to redirect to

    router.push('https://top.gg/bot/948637316145102868/vote');

  }, []);

  return (

    <div>

      {isLoading && (

        <div className="loading-spinner">

          {/* Add your loading spinner component here */}

          <div className="spinner"></div>

          <p>Loading...</p>

        </div>

      )}

    </div>

  );

};

export default Redirect;

