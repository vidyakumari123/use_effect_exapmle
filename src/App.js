import logo from './logo.svg';
import './App.css';
import Example1 from './Example1';
import Example2 from './Example2';
import UseEffect from './UseEffect'
// import ClassLifecycle from './ClassLifecycle'

function App() {
  const [flag, setFlag] = useState(true)
  return (
  <>
  {/* <button onClick={() => setFlag(false)}>Change the Flag</button>
      {flag ? <ClassLifecycle color="green" /> : <h1>Component Removed</h1>} */}
      {/* <UseEffect /> */}
  {/* <Example1/> */}
  {/* <Example2/> */}
  </>
  );
}

export default App;
