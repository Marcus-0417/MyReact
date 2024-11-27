import { useEffect, useState } from "react";

function App() {
  /* 選項按鈕 */
  const [Q1Ans, setQ1Ans] = useState("");
  const [Q2Ans, setQ2Ans] = useState("");

  /* 統計次數 */
  const [Ans1Count, setAns1Count] = useState(0);
  const [Ans2Count, setAns2Count] = useState(0);
  const [Ans3Count, setAns3Count] = useState(0);

  return (
    <>
      {/* 選項按鈕 */}
      請選擇最愛的飲料
      <input
        type="radio"
        id="Q1-1"
        name="Q1"
        value="美式"
        onChange={(e) => setQ1Ans(e.target.value)}
      />
      <label htmlFor="Q1-1">美式</label>
      <input
        type="radio"
        id="Q1-2"
        name="Q1"
        value="拿鐵"
        onChange={(e) => setQ1Ans(e.target.value)}
      />
      <label htmlFor="Q1-2">拿鐵</label>
      <input
        type="radio"
        id="Q1-3"
        name="Q1"
        value="焦糖瑪奇朵"
        onChange={(e) => setQ1Ans(e.target.value)}
      />
      <label htmlFor="Q1-3">焦糖瑪奇朵</label>

      <br />
      <br />
      最愛的飲料是：{Q1Ans}
      <hr />
      <br />
      請選擇討厭的食物
      <input
        type="radio"
        id="Q2-1"
        name="Q2"
        value="南瓜"
        onChange={(e) => setQ2Ans(e.target.value)}
      />
      <label htmlFor="Q2-1">南瓜</label>
      <input
        type="radio"
        id="Q2-2"
        name="Q2"
        value="小黃瓜"
        onChange={(e) => setQ2Ans(e.target.value)}
      />
      <label htmlFor="Q2-2">小黃瓜</label>
      <input
        type="radio"
        id="Q2-3"
        name="Q2"
        value="茄子"
        onChange={(e) => setQ2Ans(e.target.value)}
      />
      <label htmlFor="Q2-3">茄子</label>

      <br />
      <br />
      最討厭的食物是：{Q2Ans}
      <hr />
      <button
        onClick={() => {
          /* 統計次數 */
          if (Q1Ans === "美式") {
            setAns1Count((prevCount) => prevCount + 1);
          } else if (Q1Ans === "拿鐵") {
            setAns2Count((prevCount) => prevCount + 1);
          } else if (Q1Ans === "焦糖瑪奇朵") {
            setAns3Count((prevCount) => prevCount + 1);
          }
          if (Q2Ans === "南瓜") {
            setAns1Count((prevCount) => prevCount + 1);
          } else if (Q2Ans === "小黃瓜") {
            setAns2Count((prevCount) => prevCount + 1);
          } else if (Q2Ans === "茄子") {
            setAns3Count((prevCount) => prevCount + 1);
          }
        }}
      >
        送出統計結果
      </button>
      <hr />
      顯示統計次數結果：
      <p>選項一次數是：{Ans1Count}</p>
      <p>選項二次數是：{Ans2Count}</p>
      <p>選項三次數是：{Ans3Count}</p>
    </>
  );
}

export default App;
