import { createRoot } from 'react-dom/client';
import * as React from 'react';

const App = (props) => {
  return (
    <div>
      <h1>Hello, ReactApp!!!</h1>
    </div>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  const root = createRoot(reactRoot);
  root.render(<App />);
} else {
  console.log("No react-root element found.");
}
