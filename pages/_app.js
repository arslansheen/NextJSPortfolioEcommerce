import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const styles = document.querySelector('#jss-server-side');
    if (styles) {
      styles.parentElement.removeChild(styles);
    }
  }, []);

  return <Component {...pageProps} />;
}
//remove server side rendering of the page
//remove class

export default MyApp;
