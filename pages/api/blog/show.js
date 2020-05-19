import fs from 'fs';

let blogs = fs.readdirSync('blog/')

export default (req, res) => {
	// Check If there is ID
	let id = req.query.id || req.body.id;
	if (!id) res.status(422).json({ ok: false, error: "Insufficient Data", text: "ID was not provided, provide a blog ID" })
	// find if it's mdx or md
	let file = blogs.find(n => n.match(new RegExp(id+"(\.md|\.mdx)$", "g")) )
	
	if (!file) res.status(404).json({ ok: false, error: "Not Found", text: "The given ID was not found" })
	let ext = file.match(/(\.md|\.mdx)$/g)[0]
	import('blog/'+id + ext).then(data => { res.status(200).json({ ok: true, data: data.meta }) }).catch(err => res.status(400).json({ ok: false, err }));
}