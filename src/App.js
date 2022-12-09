import React, {useState,useEffect} from 'react';
import './App.css';
import Video from './components/video';
import axios from 'axios';

function App() {

const [videos,setVideos]=useState([])

useEffect(()=>{
  async function fetchdata(){
    const res=await axios.get(" https://jumpsuit-agouti.cyclic.app/v2/posts")
    setVideos(res.data)
    return res;
  }
  fetchdata()
},[])
console.log(videos)
  return (
    <div className="App">
      <h1>Mearn Stack Clone</h1>
      <div className='app-videos'>{videos.map(({url,channel,description,song,likes,shares,messages})=>(
      <Video key={url} url={url} 
      channel={channel} 
       description={description} 
       song = {song} 
        like={likes}
       share ={shares}
        messages={messages}/>
      ))}
      </div>
    </div>
  );
}

export default App;
