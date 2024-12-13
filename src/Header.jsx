import LoginButton from "./LoginButton.jsx"
import SignupButton from "./SignupButton.jsx"
import LogoutButton from "./LogoutButton.jsx"

function Header(){
    return (
        <>
            <h1>Trivia</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Leaderboard</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <LoginButton />
            <SignupButton />
            <LogoutButton/>
            <hr />
        </>
    )
}

export default Header