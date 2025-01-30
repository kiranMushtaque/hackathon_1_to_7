import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Translate Script */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,es,fr,de,it',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  }, 'google_translate_element');
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Load Google Translate Script */}
          <script
            type="text/javascript"
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
