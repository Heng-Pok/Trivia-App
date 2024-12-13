import LoginButton from "./LoginButton.jsx"
import SignupButton from "./SignupButton.jsx"
import LogoutButton from "./LogoutButton.jsx"

// eslint-disable-next-line react/prop-types
function Header( {setUser} ){
    return (
        <>
            <h1>Trivia</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/leaderboard">Leaderboard</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <LoginButton />
            <SignupButton />
            <LogoutButton setUser={setUser} />
            <hr />
        </>
    )
}

export default Header
