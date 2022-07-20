import { PlayArrow } from "@mui/icons-material"
import { useEffect, useState } from "react"
import "./featured.scss"
import { Link } from "react-router-dom"
import {axiosInstance} from "../../config"

const Featured = ({type}) => {
    const [content, setContent] = useState({})
    const [movie, setMovie] = useState({})

    useEffect(()=>{
        const getRandomContent = async () =>{
            try{
                const res = await axiosInstance.get(`/movies/random?type=${type}`)
                setContent(res.data[0]);
                setMovie(res.data[0]);

            }catch(err){
                console.log(err)
            }
        }
        getRandomContent();

    }, [type])
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==='wordDoc' ? "wordDoc" : "White Board"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="arrays">arrays</option>
                    <option value="graphs">graphs</option>
                    <option value="dynamic">dynamic</option>
                    <option value="strings">strings</option>
                    <option value="linkedLists">linked lists</option>
                </select>
            </div>
        )}
        <img className="background" src="https://mechomotive.com/wp-content/uploads/2021/09/programming-coding.jpg" alt="" />
        <div className="info">
            <img src={content.img} alt="" />
            <span className="desc">{content.desc}</span>
            <div className="buttons">
            <Link className="link" to={"/watch"} state={{ movie }} >
            <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>

            </Link>
                
               
            </div>
        </div>
    </div>
  )
}

export default Featured