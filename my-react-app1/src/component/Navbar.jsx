import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div id="nav">
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/About">關於</Link></li>
                <li><Link to="/News">最新消息</Link></li>
                <li><Link to="/Login">登入</Link></li>
                <li><Link to="/User">使用者資料</Link></li>
            </ul>
        </div>
    )
}