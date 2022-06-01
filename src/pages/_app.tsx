import 'Styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'Components/Shared/Layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
