import React from 'react';function CodeViewer() {  const codeExample = `// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar.jsx';
import ChatArea from './components/chat/ChatArea.jsx';
import CodeViewer from './components/CodeViewer.jsx';

function App() {
  const [activePanel, setActivePanel] = useState('chat');

  const renderPanel = () => {
    switch (activePanel) {
      case 'chat':
        return <ChatArea />;
      case 'code-viewer':
        return <CodeViewer />;
      default:
        return <ChatArea />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setActivePanel={setActivePanel} activePanel={activePanel} />
      <main className="main-content">
        {renderPanel()}
      </main>
    </div>
  );
}

export default App;`;  return (    <div className="code-viewer">      <h2>Code Viewer</h2>      <pre><code>{codeExample}</code></pre>    </div>  );}export default CodeViewer;