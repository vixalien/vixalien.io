// import fs from 'fs';

// let metas = fs.readdirSync('metas/')

// export default (req, res) => {
// 	let id = req.query.id || req.body.id;
// 	if (!req.query.id) res.status(404).json({ ok: false, error: "No ID", text: "ID was not provided, request an ID via: gen_id" })
// 	if(metas.includes(id)) { fs.writeFileSync('metas/'+id,"{}") } else { res.status(200).json({ ok: false, error: "ID not found", id}) }
// 	res.status(200).json({ ok: true, id})
// }