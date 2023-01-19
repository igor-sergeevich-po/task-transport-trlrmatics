export const handleChangeCurrentPage = (pageValue, setCurrentPageNumber,currentPageNumber, totalNumberPages) => {
    if (pageValue === '-' & currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber-1);
    } else if (pageValue === '+' & currentPageNumber < totalNumberPages) {
      setCurrentPageNumber(currentPageNumber+1);
    } else if (pageValue === 1) {
      setCurrentPageNumber(1);
    } else if (pageValue === -1) {
      setCurrentPageNumber(totalNumberPages);
    }
  }