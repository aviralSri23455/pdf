const File = require('../model/fileModel');
const path = require('path');

exports.uploadFile = async (req, res) => {
  try {
    const newFile = new File({
      fileName: req.file.originalname,
      filePath: req.file.path
    });
    await newFile.save();
    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
