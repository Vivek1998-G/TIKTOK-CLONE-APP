import react, {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import  MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share'
import './VideoSidebar.css'


 function VideoSidebar({likes,shares,messages}){
const [Liked,setLiked] =useState(false)

return (<div className='videoSidebar'><div className='videoSidebar_button'>{Liked ? <FavoriteIcon fontSize="Large" onClick={e=>setLiked(false)}/>:<FavoriteBorderIcon onClick={e=>setLiked(true)}/>}<p>{Liked ? likes+1:likes}</p></div>
<div className="videoSidebar_button"><MessageIcon fontSize="Large" /><p>{messages}</p></div>
<div className='videoSidebar_button'><ShareIcon fontSize="Large" /></div><p>{shares}</p>
</div>)
   
}
export default VideoSidebar;
