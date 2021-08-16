import React, {useState} from 'react';
import Box from './components/Box';
import './App.css';

function App() {

  const [boxs, setBoxs] = useState([]);

  const updateBoxes = (thisbox) => {
    console.log(thisbox);
    const newBoxes = [...boxs]
    newBoxes.push(thisbox);
    setBoxs(newBoxes);
  }

  return (
    <div className="container">
      <Box boxs={boxs} setBoxs={setBoxs} updateBoxes={updateBoxes}/>
      <hr/>
      {
        boxs.map((b,i) => <div key={i} style={{backgroundColor: b.backgroundColor, width: b.width, height: b.height, display: 'inline-block'}}>{b.backgroundColor}</div>)
      }
      <p></p>
    </div>
  );
}

export default App;
