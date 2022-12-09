import React from "react";
import { useState,useRef } from "react";
import './video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({url,channel,description,song,like,share,messages}){
const[playing,setPlaying]=useState(false)
const videoRef=useRef(null)

const handleVideoPress=()=>{
    if(playing){
        videoRef.current.pause();
        setPlaying(false)
    }else{
        videoRef.current.play();
        setPlaying(true)
    }
}
    return(<div className="video">
<video className="video_player" loop ref={videoRef} onClick={handleVideoPress} src={url}>

</video>
<VideoFooter channel={channel} description={description} songs={song}/>
<VideoSidebar likes={like} shares={share} messages={messages}/>
    </div>)
}
export default Video;