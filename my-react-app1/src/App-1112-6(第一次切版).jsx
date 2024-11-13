
function App() {
  
  return (
    <>
      {/* <!-- 頁首區 --> */}
      <header>
        <img src="./images/banner.jpg" alt="" />
      </header>

      {/* <!-- 內容區 --> */}
      <main>
        <section className="top">
          <div className="box">
            <h2><strong>教學影音</strong></h2>
            <p>透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式</p>
          </div>
          <div className="box">
            <h2><strong>良性互動</strong></h2>
            <p>學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決</p>
          </div>
          <div className="box">
            <h2><strong>趨勢分享</strong></h2>
            <p>分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展</p>
          </div>

        </section>

        {/* 主標 */}
        <section className="middle">
          <h2>讓學習成為一種習慣</h2>
        </section>

        <section className="bottom">
          <h1 className="class">推薦課程</h1>
          <div className="box">
            <div className="box1">
              <figure><img src="./images/unity.jpg" alt="" /></figure>
              <h3>Unity 5</h3>
              <p className="text">透過這個課程，學習如何使用 Unity 5 進行 2D 遊戲的開發</p>
              <p>講師：XXX</p>
              <p>影音課程時數：X小時</p>
              <p></p>
              <p><span className="span1">原價：NT$1600</span><span className="span2">NT$1200</span></p>
              <button>付款上課去</button>

            </div>

            <div className="box1">
              <figure><img src="./images/gamesalad.jpg" alt="" /></figure>
              <h3>GameSalad 2D遊戲製作</h3>
              <p className="text">視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲</p>
              <p>講師：XXX</p>
              <p>影音課程時數：X小時</p>
              <p></p>
              <p><span className="span1">原價：NT$1600</span><span className="span2">NT$1200</span></p>
              <button>付款上課去</button>

            </div>

            <div className="box1">
              <figure><img src="./images/gwd.jpg" alt="" /></figure>
              <h3>Google Web Design</h3>
              <p className="text">用於建立HTML5廣告動畫，透過時間軸將各種物件和事件以動畫方式呈現</p>
              <p>講師：XXX</p>
              <p>影音課程時數：X小時</p>
              <p></p>
              <p><span className="span1">原價：NT$1600</span><span className="span2">NT$1200</span></p>
              <button>付款上課去</button>

            </div>
          </div>
        </section>

      </main>


      {/* <!-- 頁尾區 --> */}
      <footer>
        <p>&copy;版權所有 2024.11.12 馬志豪</p>
      </footer>
    </>
  )
}

export default App