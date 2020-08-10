import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newsHeadlines') {
          setArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Voice Controlled News App</h1>
    </div>
  );
};

export default App;
