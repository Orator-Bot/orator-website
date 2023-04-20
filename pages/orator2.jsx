import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // Replace the URL below with the desired URL that you want to redirect to
    router.push('https://discord.com/oauth2/authorize?client_id=1055929812910346241&permissions=2184535104&scope=applications.commands%20bot');
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

