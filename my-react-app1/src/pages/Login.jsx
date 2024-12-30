import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";

export default function Login() {

    /* 登入成功後，使用此hook可以切換到指定頁 */
    const navgate = useNavigate();

    const login = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        /* 登入成功後，切換到首頁 */
        navgate("/");
        /* 登入成功後，切換到使用者頁 */
        navgate("/User");
    }

    return (
        <div>
            <button onClick={login}>登入</button>
        </div>
    )
}