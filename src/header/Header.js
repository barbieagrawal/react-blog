import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">welcome to my</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/7138297/pexels-photo-7138297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </div>
  )
}

export default Header