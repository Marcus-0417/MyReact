import { createContext, useContext, useState } from "react"

export default function App() {
  /* 建立共用環境區域 */
  const UserContext = createContext({});
  /* 建立使用者變數 */
  const [username, setUsername] = useState('楊沅承');
  /* 建立登入鈕的控制 */
  const [isLogin, setIsLogin] = useState(false);

  /* 建立登入元件 */
  const LoginForm = () => {
    /* 底下這行因為要被放在公用區，所以要搬到App元件內 */
    // const [username, setUsername] = useState('');
    /* 從共用區UserContext解構出username, setUsername */
    const { username, setUsername, setIsLogin } = useContext(UserContext);

    return (
      <>
        <label htmlFor="username">使用者名稱：</label>
        <input
          type="text"
          id="username"
          placeholder="請輸入使用者名稱"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="button" onClick={() => setIsLogin(true)}>登入</button>
      </>
    )
  }

  /* 登入後的歡迎介面 */
  const Greeting = () => {
    /* 從共用區UserContext取得username */
    const { username } = useContext(UserContext);
    return (
      <div>
        Hi, {username}
        <ShowName />
      </div>
    )
  }

  /* 建立一個不同元件來使用username */
  const ShowName = () => {
    return (
      <div>
        <br />Yo!我是ShowName元件測試<br /><br />
        aka:{username}
      </div>
    )
  }

  return (
    <>
      <h1>useContext</h1><hr style={{ marginBottom: "30px" }} />
      <UserContext.Provider value={{ username, setUsername, setIsLogin }}>
        {/* <LoginForm />
        <br /><br />
        <Greeting /> */}

        {/* 將原本的架構改成三元運算子 */}

        {isLogin ? <Greeting /> : <LoginForm />}

      </UserContext.Provider >

    </>
  )
}