import './App.css';
import Homepage from "./Homepage";
import Authentication from './authentication/Authentication';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.data.user.user);

  return (
    <div className="app">
      {/*<Homepage/>*/}
      <Authentication/>
    </div>
  );
}

export default App;