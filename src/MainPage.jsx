import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"

// eslint-disable-next-line react/prop-types
function MainPage ( {setUser} ){
    return (
        <>
        <Header setUser={setUser}/>
        <Body/>
        <Footer/>
        </>
    )
}

export default MainPage
