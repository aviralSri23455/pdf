const File = require('../model/fileModel'); // Adjust the path as needed

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    const newFile = new File({
      fileName: req.file.originalname,
      filePath: req.file.filename
    });
    await newFile.save();
    res.status(200).json(newFile);
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).send('Error uploading file');
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).send('Error fetching files');
  }
};
