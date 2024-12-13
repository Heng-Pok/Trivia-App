
function LogoutButton({setUser}){

    const handleOnClick = async () => {
        try{
            setUser(null);
            window.alert("Logged out successfully!");
        } catch (error){
            window.alert("Could not log out!");
            console.error("Could not set user to null because:", error);
        }
    }

    return(
        <>
            <button onClick={handleOnClick}>Logout</button>
        </>
    );
}

export default LogoutButton;
