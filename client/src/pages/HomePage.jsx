import { useEffect, useState } from "react";
//import { useLocation } from "react-router";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/SideBar";
import "./HomePage.css";
import axios from 'axios'
import { useLocation } from "react-router-dom";


export default function Homepage() {
//   const location = useLocation();
//   console.log(location);
const [posts, setPosts] = useState([]);
const { search } = useLocation();  //this is the user path that is queried

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      // console.log(res)
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}

