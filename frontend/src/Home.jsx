import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; 
import Card from "./Card"; 


function Home() {

  
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('http://localhost:4040/post/allpost');
        const data = await response.json();
        console.log(data.data)

        setPosts(data.data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };

    fetchdata();
  }, []); 

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };


 

  return (
    <div className="app-container">
      <div className="main">
        {posts.slice(startIndex, endIndex).map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
      <div className="pagination">
        {page > 1 && (
          <button onClick={handlePrevPage}>
            <FaAngleLeft />
          </button>
        )}
        {endIndex < posts.length && (
          <button onClick={handleNextPage}>
            <FaAngleRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
