import { useEffect, useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  /* 每一次渲染後執行 */
  useEffect(() => {
    console.log(1);
  });
  /* 只執行一次(開啟檔案時) */
  useEffect(() => {
    console.log(2);
    setCount(count + 1);
  }, []);
  /* 當陣列的依賴條件改變時，執行 */
  useEffect(() => {
    console.log(3);
  }, [count]);

  /* 取得段落再變色，按鈕監聽事件 */
  useEffect(() => {
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => {
      document.getElementById("p1").style.color = "red";
    })
  }, []);

  const changeColor = () => {
    document.getElementById("p1").style.color = "green";
  }

  return (

    <>
      {console.log(0)}
      <h1>useEffect</h1>
      <hr />
      <p id="p1">我是段落</p>
      {/* 綁定事件 */}
      <button onClick={() => { document.getElementById("p1").style.color = "blue" }}>變藍色</button>

      {/* 監聽事件 */}
      <button id="btn2">變紅色</button>

      {/* 呼叫函式 */}
      <button id="btn3" onClick={changeColor}>變綠色</button>
    </>

  )
}

export default App