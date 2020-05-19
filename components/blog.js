import Button from 'components/button'
import Heading from '../components/heading'

const Blog = ({ blog: post }) => (
	<>
		<a href={post.href}>
			<div>
				<h3 dangerouslySetInnerHTML={{ __html: post.title }} ></h3>
				<span><i>Published at <b>{post.publishedAt}</b></i></span>
				<p dangerouslySetInnerHTML={{ __html: post.summary }} ></p>
			</div>
		</a>
		<style jsx>{`
				h3 :global(b) {
					color: var(--accents-3);
				}
				a {
					color: inherit;
				}
				h3 {
					margin-top: .5rem;
					margin-bottom: .5rem;
				}
				div {
        	padding: 1em;
        	border-bottom: 1px solid var(--accents-3);
        }

        div:hover {
          background-color: var(--accents-4);
        }

				@media (max-width: 600px) {
          h3 {
            font-size: 1.15rem;
          }
          div {
          	padding: 0.5em;
          }
        }
        
			`}</style>
	</>
);

export default Blog