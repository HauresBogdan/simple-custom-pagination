import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import Pagination from "./components/Pagination";


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  function handlePageChange(pageNumber) {
    console.log("current page: ",pageNumber);
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <h1>HELLO</h1>
      <Pagination totalPages={totalPages} displayRange={5} currentPage={currentPage} onPageFlip={handlePageChange} />
    </div>
  );
}

export default App;
