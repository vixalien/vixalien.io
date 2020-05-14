// import fs from 'fs';

// let metas = fs.readdirSync('metas/')

// let genrd = (key = undefined) => {
// 	let rd = ((parseInt(key || -1)) + 1) || (Math.random() * Math.random()).toString().substr(2)
// 	if(metas.includes(key)) rd = genrd(key)
// 	return rd
// }

// export default (req, res) => {
// 	res.status(200).json({ ok: true, metas, id: genrd() })
// }