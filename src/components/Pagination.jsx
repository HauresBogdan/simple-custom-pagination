
import {useRef} from 'react';

function Pagination(props) {
    
  const currentPage = useRef(1);
  const pagesArr = [];
  for(let i=1; i<=props.totalPages; i++){
    pagesArr.push(i);
  }
  

  function handlePageChange(page) {
    if(page==="Back" && currentPage.current>1 ) {
      currentPage.current = currentPage.current - 1;
      props.onPageFlip(currentPage.current);
    } else if (page==="Next" && currentPage.current<props.totalPages) {
      currentPage.current = currentPage.current + 1;
      props.onPageFlip(currentPage.current);
    } else if(page!=="Back" && page!=="Next")
    { 
      currentPage.current = page;
      props.onPageFlip(currentPage.current);
    }
    
  }

  return (
    <div >  
      <ul className="ul-pagination">
        <li className="li-first" onClick={()=>{handlePageChange(1)}}>&lt;&lt;</li>
        <li className="li-back" onClick={()=>{handlePageChange("Back")}}>&lt;</li>
        {pagesArr.map((page,i) => (i+1<=props.displayRange) && <li onClick={()=>{handlePageChange(page)}}  className="li-pagination" key={page}>{page}</li>)}
        <li className="li-next" onClick={()=>{handlePageChange("Next")}}>&gt;</li>
        <li className="li-last" onClick={()=>{handlePageChange(props.totalPages)}}>&gt;&gt;</li>
      </ul>
    </div>
  );
}

export default Pagination;
