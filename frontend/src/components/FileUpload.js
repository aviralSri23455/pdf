import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('http://localhost:5000/api/files/upload', formData);
      setUploadedFile(res.data);
      alert('File uploaded successfully.');
    } catch (error) {
      console.error(error);
      alert('Error uploading file.');
    }
  };

  const onViewResume = () => {
    if (uploadedFile) {
      window.open(`http://localhost:5000/${uploadedFile.filePath}`, '_blank');
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
