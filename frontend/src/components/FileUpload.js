import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('https://pdf-sk0s.onrender.com/api/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadedFile(res.data);
      alert('File uploaded successfully.');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading file: ' + (error.response?.data || error.message));
    }
  };

  const onViewResume = () => {
    if (uploadedFile) {
      window.open(`https://pdf-sk0s.onrender.com/uploads/${uploadedFile.filePath}`, '_blank');
    } else {
      alert('No file uploaded yet.');
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload Resume</button>
      <button onClick={onViewResume}>View Resume</button>
    </div>
  );
};

export default FileUpload;
