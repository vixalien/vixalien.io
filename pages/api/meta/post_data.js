// import fs from 'fs';

// let metas = fs.readdirSync('metas/')

// export default (req, res) => {
// 	// Check If there is ID
// 	if(!req.query.id) res.status(404).json({ok: false, error: "No ID", text: "ID was not provided, request an ID via: gen_id"})
// 	let id = req.query.id || req.body.id;
// 	// Check If ID is an INT
// 	if (Number.isNaN(parseInt(req.query.id))) res.status(422).json({ ok: false, error: "ID is not INT", text: "ID provided is not an integer" })
// 	let meta = req.body.meta || req.query.meta;
// 	// Check for meta
// 	if(!meta) res.status(422).json({ok: false, error: "No META"})
// 	let content = "{}";
// 	// Get content of ID if it exists or create file
// 	if (!metas.includes(id)) { fs.writeFileSync('metas/' + id) } else { content = fs.readFileSync('metas/' + id).toString() }
// 	content = JSON.parse(content||"{}");
// 	// Parse META
// 	try { meta = JSON.parse(meta) } catch (err) { res.status(422).json({ ok: false, error: "Invalid META", text: err }) };
// 	// Save META, mixed with initial content
// 	try { fs.writeFileSync('metas/' + id, JSON.stringify({...content, ...meta})) } catch (err) { res.status(422).json({ ok: false, error: "Could not write META", text: err }) };
// 	res.status(200).json({ ok: true, id: req.query.id, data: {...content, ...meta} })
// }
