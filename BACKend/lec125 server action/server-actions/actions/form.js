 "use server"
 import fs from 'fs';   

 export const submitaction = async (e) => {
   
    console.log(e.get("name"), e.get("email"));
    let a = await fs.promises.writeFile("ankit.txt", "Hello World!")
    
    // console.log("Email:", email);
  }