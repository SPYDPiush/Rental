import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; // Import icons
import Navbar from "./Navbar";
import Card from "./Card"; // Import your CSS file for styling

function Home() {
  let arr = [1,2,3,4,5,6,6,7,8,9,1,2,3,4,5,6];
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

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
      <Navbar />
      <div className="main">
        {arr.slice(startIndex, endIndex).map((item) => (
          <Card key={item} />
        ))}
      </div>
      <div className="pagination">
        {page > 1 && <button onClick={handlePrevPage}><FaAngleLeft /></button>}
        {(endIndex < arr.length) && <button onClick={handleNextPage}><FaAngleRight /></button>}
      </div>
    </div>
  );
}

export default Home;
