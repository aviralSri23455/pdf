import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileView = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await axios.get('https://pdf-sk0s.onrender.com');
        setFiles(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <ul>
      {files.map(file => (
        <li key={file._id}>
          <a href={`http://localhost:5000/${file.filePath}`} target="_blank" rel="noopener noreferrer">
            {file.fileName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FileView;
