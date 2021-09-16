const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const newUsers = [
	{name: "Ulukbek"}, 
	{name: "Jim"} , 
	{name: "Adinay"}, 
	{name: "Begimay"}
]



const allowList = "http://localhost:3000";

const corsOption = {
	origin: allowList
}

app.use(express.json());

app.use(cors(corsOption));

app.get("/", async(req, res) => {
	res.json({
		users: newUsers
	})
});

app.post("/new-data", async(req, res, next) => {
	const { username, car, price} = req.body;
	console.log(username, car, price);
	res.json({
		status: 200,
		message: "success"
	})
})

app.listen(9000, () => {
	console.log("app listen on port 9000")
})