import { log } from "console";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
      console.log("multer middleware destination working");
      
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
      console.log("multer middleware filename working");
      
    }
  })
  
export const upload = multer({ 
    storage,
})