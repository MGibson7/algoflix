import "./listItem.scss";
import { useEffect, useState } from "react";
import { Add, PlayArrow } from "@mui/icons-material";
import {axiosInstance} from "../../config";
import { Link } from "react-router-dom"

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    const getMovie = async() =>{
      try{
        const res = await axiosInstance.get("/movies/find/"+item)
        setMovie(res.data)

      }catch(err){
        console.log(err)
      }
      
    }
    getMovie();
  }, [item])
  return (
    <Link to="/watch" state={{movie}}>
    
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src = {movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
            
            </div>
            <div className="itemInfoTop">
              
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}