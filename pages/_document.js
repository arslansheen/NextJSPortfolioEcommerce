//import Document and other components
//create a class that extends document
//create a function that renders html, head, main and next script
import { ServerStyleSheets } from '@mui/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class myClass extends Document {
  render() {
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
myClass.getInitialProps = async (contex) => {
  const serverStyleSheet = new ServerStyleSheets();
  contex.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => {
        return (props) => {
          return serverStyleSheet.collect(<App {...props} />);
        };
      },
    });
  };
};
