
import { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import {axiosInstance} from "../../config";


const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async() => {
      try{ 
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`);

        setLists(res.data)



      }catch(err){
        console.log(err)

      }
    }
    getRandomLists();
  }, [type, genre])
  return (
    <div className="home">
        <Navbar/>
        <Featured type = {type}/>
        {lists.map((list) => (
        <List list={list} />
      ))}
        
        </div>
  )
}

export default Home