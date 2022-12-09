import React from "react";
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'



const VideoFooter=({channel,description,songs})=>{
return(
    <div className="videoFooter">
        <div className="videoFooter-text">
            <h4>{channel}</h4><p>{description}</p>
            <br></br>
            <div className="videoFooter_ticker">
            <MusicNoteIcon className="videoFooter_icon" /><p>{songs}            </p>
            </div>
        </div>
    </div>
)

}

export default VideoFooter