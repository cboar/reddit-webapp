const request = require("request")
const express = require("express")
const pug = require("pug")
const fs = require("fs")
const app = express()

const index = pug.compileFile("index.pug")

app.use(express.static("public"))
app.get("/", function(req, output){

	const url = "https://reddit.com/hot.json?limit=50"
	fs.readFile("testdata", { encoding: "utf8" }, function(err, body){
	//request(url, function(err, res, body){

		const data = JSON.parse(body).data
		const items = data.children.map(function(a){
			const score = a.data.score
			if(score > 999)
				a.data.score = (score / 1000).toFixed(1) + "K"
			return a.data
		})
		const html = index({ offset: 0, items: items })
		output.send(html)

	})

})
app.listen(8080)
