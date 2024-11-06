/* 導入外部CSS檔案 */
import "./App.css"
function MyComponent() {
  return (
    /* 空標籤：Fragment */
    <>
      <h2>我是外來種</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint animi amet, repellendus et explicabo possimus ipsa quas dolores sed. Libero numquam mollitia a in? Minima magni optio velit sint.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

function App() {
  /* 建立變數 */
  const strName="Coca-Cola,";

  return (
    <div>
      {/* JSX中使用javascript變數，前後加{} */}
      <h1 style={{
        backgroundColor:"red",
        color:"white",
        width:"350px",
        textAlign:"center",
        borderRadius:"10px",
        }}>{strName.toUpperCase()}</h1>
      {/* 屬性中使用變數 */}
      <label className="underLineColor" htmlFor="username">忘記了姓名的請跟我來：</label>
      {/* placeholder => 提示字 */}
      <input type="text" id="username"　placeholder={strName}/>
      <MyComponent />
    </div>
  )
}

export default App
