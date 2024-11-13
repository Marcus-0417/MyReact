import { useState } from "react";


function App() {
  /* 定義變數name與setName方法 */
  const [name1, setName1] = useState('跨沙小');
  const [name2, setName2] = useState('我要SHAMPOO');
  function changeName(e) {
    setName2(e.target.value);
  }

  return (
    <>
      <h2>設計一個輸入名字的欄位，並及時顯示在畫面上</h2>
      <hr />
      <h3>目前文字方塊的內容：{name1}</h3>
      請輸入姓名1：<input type="text" value={name1} onChange={(e) => setName1(e.target.value)}/>
      <hr />
      <h3>目前文字方塊的內容：{name2}</h3>
      請輸入姓名2：<input type="text" value={name2} onChange={changeName}/>

    </>
  )
}



export default App