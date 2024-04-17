import Cart from '/icon-cart.svg'
import Profile from '/image-avatar.png'
import Logo from '/logo.svg'

export default function Header(){
    return (
        <header>
            <div className="nav-ctn">
                <img src={Logo} alt="logo" />
                <nav>
                    <a href="http://" >Collections</a>
                    <a href="http://" >Men</a>
                    <a href="http://">Women</a>
                    <a href="http://">About</a>
                    <a href="http://">Contact</a>
                </nav>
            </div>
            <div className="profile-ctn">
                <div>
                    <img src={Cart} alt="cart" />
                </div>
                <div>
                    <img className="profile" src={Profile} alt="profile" />
                </div>
            </div>
        </header>
    )
}