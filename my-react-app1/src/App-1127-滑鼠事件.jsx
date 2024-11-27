import { useEffect } from "react";

function App() {
  /* 使用useEffect 監聽事件 */
  useEffect(() => {
    const p1 = document.getElementById("p1");
    p1.addEventListener("mouseover", () => {
      p1.style.color = "blue";
      p1.style.fontSize = "30px";
    })
    p1.addEventListener("mouseout", () => {
      p1.style.color = "";
      p1.style.fontSize = "";
    })

    const p2 = document.getElementById("p2");
    p2.addEventListener("mouseover", () => {
      p2.textContent = "走開啦";
      p2.style.color = "red";
      p2.style.fontSize = "50px";
      p2.style.fontWeight = "bold";
    })
    p2.addEventListener("mouseout", () => {
      p2.textContent = "過來這裡";
      p2.style.color = "";
      p2.style.fontSize = "";
      p2.style.fontWeight = "";
    })

    const h1 = document.getElementById("h1");
    let isClick = false;
    // h1.addEventListener("click", () => {
    //   const h1Text = h1.textContent;
    //   alert(h1Text);
    // })
    h1.addEventListener("click", (e) => {
      if (isClick) {
        e.target.textContent = "滑鼠事件";
        e.target.style.color = "";
        isClick = false;
        return
      }
      // alert(e.target.textContent);
      e.target.textContent = "我被按了";
      e.target.style.color = "red";
      isClick = true;
    })

  }, []);

  /* 建立變色函式 */
  // const changeColor = () => {
  //   const p1 = document.getElementById("p1")
  //   p1.style.color = "blue";
  //   p1.style.fontSize = "30px";
  // }

  // const restoreColor = () => {
  //   const p1 = document.getElementById("p1")
  //   p1.style.color = "";
  //   p1.style.fontSize = "";
  // }

  const changeColor = (isChange) => {
    const p1 = document.getElementById("p1")
    if (isChange) {
      p1.style.color = "blue";
      p1.style.fontSize = "30px";
    } else {
      p1.style.color = "";
      p1.style.fontSize = "";
    }
  }

  return (
    <>
      <h1 id="h1">滑鼠事件</h1>
      <hr />
      <p id="p1" onMouseOver={() => changeColor(true)} onMouseOut={() => changeColor(false)}>偶會變色喔</p>

      <p id="p2"
      // onMouseEnter={() => {
      //   const p2 = document.querySelector("#p2")
      //   p2.textContent = "走開啦";
      //   p2.style.color = "red";
      //   p2.style.fontSize = "50px";
      //   p2.style.fontWeight = "bold";
      // }}

      // onMouseLeave={() => {
      //   const p2 = document.querySelector("#p2")
      //   p2.textContent = "過來這裡";
      //   p2.style.color = "";
      //   p2.style.fontSize = "";
      //   p2.style.fontWeight = "";
      // }}
      >變內容</p>
    </>
  )
}

export default App