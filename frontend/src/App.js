import React from 'react';
import FileUpload from './components/FileUpload';
import FileView from './components/FileView';

const App = () => {
  return (
    <div>
      <h1>Resume Upload and View</h1>
      <FileUpload />
      <FileView />
    </div>
  );
};

export default App;
