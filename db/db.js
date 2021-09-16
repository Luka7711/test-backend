const mongoose = require("mongoose");
const url = "mongodb+srv://ulukbek:O1pkgT8vFFwAtJ9a@cluster0.jqqje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose
	.connect(url)
	.then(() => console.log("mongoose is connected"))
	.catch((err) => console.log(err, "mongoose is disconnected"))
