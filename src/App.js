import './App.css';
import video from "./assests/video.mp4";
import Player from './Player/components/Player';

function App() {
  return (
    <div className='App'>
       <Player video={video}/>
    </div>
    
  );
}

export default App;
