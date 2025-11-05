const fs = require("fs");

const content = "HTML , CSS , JavaScript , Typescript , MangoDB ,suhas,ram ka dam";

fs.writeFile('suhas.txt',content,(err) => {
	if(err){
	      console.log("Error in writing txt file");	
	}
	else{
	      console.log("File created sucessfully");
	}
});