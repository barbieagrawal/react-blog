import "./sidebar.css"
import Me from "../../assets/me.jpeg"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
              src={Me} 
              alt="Profile Picture" 
            />
            <p>
              Hey! I'm a poet and a developer hence, I created a site to serve as a collection of the poems I've penned so far. I hope you enjoy my work!
            </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">All</li>
            <li className="sidebarListItem">Quotes</li>
            <li className="sidebarListItem">Sonnets</li>
            <li className="sidebarListItem">Themes</li>
            <li className="sidebarListItem">Emotion</li>
            <li className="sidebarListItem">Society</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-tumblr"></i>
          </div>
        </div>
    </div>
  )
}

export default Sidebar