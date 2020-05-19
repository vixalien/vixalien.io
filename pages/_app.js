import '../styles/global.css';
import Vixalien from '../components/vixalien';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

const MyApp = ({ Component, pageProps }) => {
	return (<>

			<DefaultSeo {...SEO} />
			<div className="page">
				<main>
					<Component {...pageProps} />
				</main>
		  </div>
			<footer>
				<a
					href="/"
					aria-label="vixalien"
				>
					<Vixalien width="100" />
				</a>
				<style jsx>{`
	        a {
	          display: flex;
	          flex-direction: column;
	        }
	        `}</style>
			</footer>
			</>
		)
}

export default MyApp
