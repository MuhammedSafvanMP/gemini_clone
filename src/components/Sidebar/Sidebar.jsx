import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import "./Sidebar.css"; 

export default function Sidebar() {

    const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtended(prevExtended => !prevExtended)} className='menu' src={assets.menu_icon} alt="Menu Icon" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="Plus Icon" />
               {extended ? <p>New Chat</p> : null }
            </div>
        </div>

        {
            extended ? 
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="Message Icon" />
                <p>What is react...</p>
            </div>
        </div>
        : null }


        <div className="bottom">
            <div className="recent-entry">
                <img src={assets.question_icon} alt="Question Icon" />
                {extended ? <p>Help</p> : null}
            </div>

            <div className="recent-entry">
                <img src={assets.history_icon} alt="History Icon" />
              {extended ?  <p>Activity</p> : null}
            </div>

            <div className="recent-entry">
                <img src={assets.setting_icon} alt="Setting Icon" />
               { extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  );
}
