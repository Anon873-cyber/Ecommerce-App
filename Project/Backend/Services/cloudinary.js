const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// 🔧 Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 📤 Upload Image
const uploadToCloudinary = async (filePath, folder = "uploads") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
    });

    // 🧹 Remove local file after upload
    fs.unlinkSync(filePath);

    return result;
  } catch (error) {
    // remove file even if upload fails
    fs.unlinkSync(filePath);
    throw error;
  }
};

// ❌ Delete Image
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  uploadToCloudinary,
  deleteFromCloudinary,
};


