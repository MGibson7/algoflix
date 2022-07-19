import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"


const List = ({list}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber-1)

        }
        if(direction === "right" && slideNumber <5){
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSlideNumber(slideNumber+1)

        }
    }
  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick = {() => handleClick("left")} style = {{display: !isMoved && "None"}}/>
            <div className="container" ref = {listRef}>
            {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
               
               
            </div>
            <ArrowForwardIosOutlined  className="sliderArrow right" onClick = {() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default List