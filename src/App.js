import './App.css';
import videoFile from "./Player/assests/video.mp4";
import posterFile from "./Player/assests/Poster.png"
import Player from './Player/components/Player';

function App() {

  const video = {
    src: videoFile,
    poster:posterFile
  }

  return (
    <div className='App'>
      <div style={{width:'600px',height:"350px"}}>
          <Player video={video}/>
      </div>
      
    </div>
    
  );
}

export default App;
