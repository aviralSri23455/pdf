import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileView = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await axios.get('https://pdf-sk0s.onrender.com/api/files/view');
        setFiles(res.data);
      } catch (error) {
        console.error('Fetch error:', error);
        alert('Error fetching files: ' + (error.response?.data || error.message));
      }
    };
    fetchFiles();
  }, []);

  return (
    <ul>
      {files.map(file => (
        <li key={file._id}>
          <a href={`https://pdf-sk0s.onrender.com/uploads/${file.filePath}`} target="_blank" rel="noopener noreferrer">
            {file.fileName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FileView;
