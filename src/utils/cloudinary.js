import {v2 as cloudinary} from "cloudinary";
import fs from "fs/promises";
// import dotenv from "dotenv";

// dotenv.config({
//     path: './.env'
// });

// import { v2 as cloudinary } from 'cloudinary';
// import { log } from "console";

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });



const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded
        console.log("the file has been uploaded successfully", response.url);
        await fs.unlink(localFilePath);
        return response;

    } catch(error) {
        await fs.unlink(localFilePath) // remove locally saved temporary or the unwanted or curropt file as the upload failed
        console.log("local path to the uploaded file: ", localFilePath);
        console.log("got error in uploadOnCloudinary catch line 28 utils/cloudinary.js", error);
        return null;
    }
}

export { uploadOnCloudinary };