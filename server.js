const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+ '/dist/foodcategoryapp'));		// dist/'file package name'
app.get('/*',function(req,res) {
		res.sendFile(path.join(__dirname+'/foodcategoryapp/index.html')); 	//here also name change as per app name
	});
	app.listen(process.env.PORT || 8080 )
