import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src="" 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="finleInput" style={{display:"none"}} />
                </div>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings