

function App() {

  /* 建立函式方法1 */
  function sayHi(){
    alert("我跟你很熟嗎?")
  }

  /* 建立函式方法2 */
  const sayHi2 = () => {
    alert("跨沙小?")
  }
  
  return (
    <div>
     {/* 事件處理1：在HTML標籤上綁定事件 */}
     {/* 匿名函式 */}
     <button onClick={function(){alert("我跟你很熟嗎?")}}>打招呼1</button>
     {/* 箭頭函式 */}
     <button onClick={() => alert("我跟你很熟嗎?")}>打招呼2</button>

     {/* 事件處理2：呼叫函式 */}
    <button onClick={sayHi}>打招呼3</button>

    <button onClick={sayHi2}>打招呼4</button>
    
    </div>
  )
}

export default App
