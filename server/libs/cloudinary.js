import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "tomasotano25",
    api_key: "636147982828688",
    api_secret: "kVb1vxlTYUSrggB8gV-6Xe1K9wc"
});

export const uploadImage = async (filePath) =>
{
    return await cloudinary.uploader.upload(filePath, {
        folder: "posts"
    })

}

export const deleteImage = async id =>
{
    return await cloudinary.uploader.destroy(id)
} 