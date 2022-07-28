import logo from './logo.svg';
import './App.css';
import { VideoCall } from './components/VideoCall';
import { Options } from './components/Options';
import { Notification } from './components/Notification';

function App() {
  return (
    <div className="App">
     <VideoCall/>
     <Options>
      <Notification/>
     </Options>
    </div>
  );
}

export default App;
