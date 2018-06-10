const request = require("request")
const express = require("express")
const pug = require("pug")
const app = express()

const index = pug.compileFile("index.pug")

app.get("/", function(req, output){

	const url = "https://reddit.com/hot.json?limit=25"
	request(url, function(err, res, body){

		const json = JSON.parse(body)
		const html = index()
		output.send(html)

	})

})
app.listen(8080)
