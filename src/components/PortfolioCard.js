import { useState } from "react";

function PortfolioCard(props) {
    const [likes ,setLikes] = useState(0);
    const [dark, setDark] = useState(false);
    const [image, setImage] = useState("https://th.bing.com/th/id/OIP.kN8tEO6_wPf1PMEofLrdTgHaGh?w=213&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3");
    return(
        <div className={dark ? "card dark" : "card"}>
            <img src={image}
            alt="Profile"
            className="profile-img"/>
            <h2>{props.name}</h2>
            <h4>{props.title}</h4>
             <p>{props.bio}</p>
        
        <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
        </div>
        <div className="buttons">
        <button onClick={() => alert("Contact clicked!")}>Contact Me</button>
        <button onClick={() => setLikes(likes + 1)}>❤️ LIkes :{likes}</button>
        <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        <button onClick={() => setImage("https://i.pravatar.cc/120")}>Change Photo</button>
        </div>
        </div>

    );
}
export default PortfolioCard;