import "./topbar.css"

const TopBar = () => {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-tumblr"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">CREATE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg"
                src="https://images.pexels.com/photos/13631762/pexels-photo-13631762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" 
            />
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar