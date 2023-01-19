export const handleSetLimitUsersOnPage = (e, setLimitNumberUsers, setCurrentPageNumber) => {
    const limit = e.target.value;

    setLimitNumberUsers(limit);
    
    setCurrentPageNumber(1);
}