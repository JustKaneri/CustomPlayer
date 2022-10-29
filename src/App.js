import './App.css';
import videoFile from "./assests/video.mp4";
import posterFile from "./assests/Poster.png"
import Player from './Player/components/Player';

function App() {

  const video = {
    src: videoFile,
    poster:''
  }

  return (
    <div className='App'>
       <Player video={video}/>
    </div>
    
  );
}

export default App;
