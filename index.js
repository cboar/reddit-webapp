const request = require("request")
const express = require("express")
const pug = require("pug")
const app = express()

const index = pug.compileFile("index.pug")

app.get("/", function(req, output){

	const url = "https://reddit.com/hot.json?limit=10"
	request(url, function(err, res, body){

		const data = JSON.parse(body).data
		const items = data.children.map(a => a.data)
		const html = index({ items: items })
		output.send(html)

	})

})
app.listen(8080)
