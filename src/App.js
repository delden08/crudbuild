import React, { useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/users')
     .then(response => {
       console.log(response.data);
     })
   })

  return (
    <h1>
      Welcome to React
    </h1>
  );
}

// export default App;

ReactDOM.render(<App />, document.getElementById('root'));
