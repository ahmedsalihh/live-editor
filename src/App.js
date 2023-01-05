import { useState } from 'react';

import './App.css';

function App() {
  const [css, setCss] = useState();
  const [html, setHtml] = useState();

  function createMarkup() {
    return { __html: html };
  }

  return (
    <div className='App'>
      <div className='editors'>
        <textarea
          value={css}
          style={{ minWidth: '20vw', minHeight: '40vh' }}
          onChange={event => setCss(event.target.value)}
        />
        <textarea
          value={html}
          style={{ minWidth: '20vw', minHeight: '40vh' }}
          onChange={event => setHtml(event.target.value)}
        />
      </div>
      <div className='test' style={{ width: '100%', minHeight: '80vh'}}>
        <style>{css}</style>
        <div className='demo' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default App;
