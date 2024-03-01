import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '/utils/createEmotionCache';
import '../styles/globals.css';



const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
    
  return (
    <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
    </CacheProvider>
  );

}

export default MyApp;