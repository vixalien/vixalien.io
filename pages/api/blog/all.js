import fs from 'fs';

let blogs = fs.readdirSync('blog/').map(e => e.replace(/(\.md|\.mdx)$/g, ""))

export default (req, res) => {
	// Check If there is ID
	res.status(200).json({ ok: true, blogs })
}