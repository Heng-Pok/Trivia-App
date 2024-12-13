import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"

// eslint-disable-next-line react/prop-types
function MainPage ( {user, setUser} ){
    return (
        <>
        <Header setUser={setUser} user={user}/>
        <Body/>
        <Footer/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quis laboriosam aspernatur cum, illo quod nisi nobis officia reprehenderit libero officiis nemo numquam autem nesciunt dicta provident omnis tempore voluptatum.</p>
        </>
    )
}

export default MainPage
