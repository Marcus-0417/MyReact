import { useState } from 'react';


function App() {
  /* 常數=>不能變動的值 */
  /* 執行中若要改變const的值，必須使用useState方法 */
  /* 定義useState */
  /* const [變數名稱, set更改變數的方法]=useState(初始值) */

  const [num, setNum] = useState(0);

  function btnClick() {
    setNum(num + 5);
  }

  return (
    <>
      <h1>React狀態-useState方法</h1>
      <h2>目前的值：{num}</h2>
      {/* 事件綁定：使用箭頭函式 */}
      <button onClick={() => setNum(num + 1)}>+1</button>

      {/* 事件綁定：呼叫函式 */}
      <button onClick={btnClick}>+5</button>
    </>
  )
}

export default App