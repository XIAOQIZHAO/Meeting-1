// import React from 'react'
import Header from './components/Header'

function App() {
  const name = 'Chelsea'
  const x = false
  const date = '6/6/2021'
  return (
    <div className="container">
      <Header />
      <h2>Hello From React</h2>
      <h3>Made { x ? 'by ' + name : 'on ' + date }</h3>
      <h3>What do you know?</h3>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
