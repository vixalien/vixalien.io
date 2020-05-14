import '../styles/global.css'
import Vixalien from '../components/vixalien'

const MyApp = ({ Component, pageProps }) => {
	return (<>

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
