import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
  
      return initialProps;
    }
  
    render() {
      return (
        <Html lang="en" >
          <Head>
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="author" content="Ed Tosoy" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
  
          <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  