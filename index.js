import inquirer from "inquirer";
import x from "qr-image";
import fs from "fs";
inquirer
  .prompt([{
    message:"Type your url -> ",
   name:"URL"
  }])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = x.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('url-qr.png'));

    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err;
        console.log("Successfully saved");
  });
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
