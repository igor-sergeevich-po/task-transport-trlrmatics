export   const getMoreInfo = (item, setCurrentRowInfo) => {
    setTimeout(() => {
     const currenUser = document.getElementById(`${item.company.name}`);
     currenUser.classList.toggle('hidden-row');
    }, 50);

   setCurrentRowInfo(item);
  }