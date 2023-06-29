import type { AppProps } from "next/app"

import "../theme/theme.css"

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
