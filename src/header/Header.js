import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Welcome to my</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/4555601/pexels-photo-4555601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    </div>
  )
}

export default Header