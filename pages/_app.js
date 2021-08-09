import { wrapper } from '../redux/store/store';
import '../style/index.css'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);