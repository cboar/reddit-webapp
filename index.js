const express = require("express")
const pug = require("pug")
const app = express()

const index = pug.compileFile("index.pug")

app.get("/", function(req, res){

	const out = index()
	res.send(out)

})
app.listen(8080)
