import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

const Redirect = () => {

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {

    router.push('https://top.gg/bot/948637316145102868/vote');

  }, []);

  return (

    <div>

      {isLoading && (

        <div className="loading-spinner">

          <div className="spinner"></div>

          <p>Loading...</p>

        </div>

      )}

    </div>

  );

};

export default Redirect;

