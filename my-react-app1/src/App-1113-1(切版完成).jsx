import ShowTopData from "./ShowTopData.jsx"
import ShowBottomData from "./ShowBottomData.jsx"

// function ShowTopData({ }) {
//   const topData = [
//     {
//       id: 1,
//       title: "教學影音",
//       text: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
//     },
//     {
//       id: 2,
//       title: "良性互動",
//       text: "學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決"
//     },
//     {
//       id: 3,
//       title: "趨勢分享",
//       text: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展"
//     },
//   ]

//   return (
//     <>
//       {
//         topData.map((item1) => {
//           return (
//             <div className="box" key={item1.id}>
//               <h2><strong>{item1.title}</strong></h2>
//               <p>{item1.text}</p>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

// function ShowBottomData({ }) {
//   const bottomData = [
//     {
//       id: 1,
//       figure: <img src="./images/unity.jpg" alt="" />,
//       bottomTitle: "Unity 5",
//       bottomText: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
//       teacher: "講師:XXX",
//       time: "影音課程時數：X小時",
//       price: "原價：NT$1600",
//       sales: "NT$1200",
//       button: "付款上課去",
//     },
//     {
//       id: 2,
//       figure: <img src="./images/gamesalad.jpg" alt="" />,
//       bottomTitle: "GameSalad 2D遊戲製作",
//       bottomText: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
//       teacher: "講師:XXX",
//       time: "影音課程時數：X小時",
//       price: "原價：NT$1600",
//       sales: "NT$1200",
//       button: "付款上課去",
//     },
//     {
//       id: 3,
//       figure: <img src="./images/gwd.jpg" alt="" />,
//       bottomTitle: "Google Web Design",
//       bottomText: "用於建立HTML5廣告動畫，透過時間軸將各種物件和事件以動畫方式呈現",
//       teacher: "講師:XXX",
//       time: "影音課程時數：X小時",
//       price: "原價：NT$1600",
//       sales: "NT$1200",
//       button: "付款上課去",
//     },
//   ]

//   return (
//     <>
//       {
//         bottomData.map((item2) => {
//           return (
//             <section className="bottom" key={item2.id}>
//               <div className="box1">
//                 <figure>{item2.figure}</figure>
//                 <h3><strong>{item2.bottomTitle}</strong></h3>
//                 <p className="text">{item2.bottomText}</p>
//                 <p>{item2.teacher}</p>
//                 <p>{item2.time}</p>
//                 <p><span className="span1">{item2.price}</span></p>
//                 <p><span className="span2">{item2.sales}</span></p>
//                 <button>{item2.button}</button>
//               </div>
//             </section>
//           )
//         })
//       }
//     </>
//   )
// }

function App() {

  return (
    <>
      {/* <!-- 頁首區 --> */}
      <header>
        <img src="./images/banner.jpg" alt="" />
      </header>

      {/* <!-- 特色區 --> */}
      <main>
        <section className="top">
          <ShowTopData />

          {/* { AI生成
            Object.keys(topData).map((key) => {
              return (
                <div className="box" key={key}>
                  <h2><strong>{topData[key].title}</strong></h2>
                  <p>{topData[key].text}</p>
                </div>
              )
            })
          } */}

          {/* <div className="box">
            <h2><strong>{topData.data1.title}</strong></h2>
            <p>{topData.data1.text}</p>
          </div>
          <div className="box">
            <h2><strong>{topData.data2.title}</strong></h2>
            <p>{topData.data2.text}</p>
          </div>
          <div className="box">
            <h2><strong>{topData.data3.title}</strong></h2>
            <p>{topData.data3.text}</p>
          </div> */}

        </section>

        {/* 主標 */}
        <section className="middle">
          <h2>讓學習成為一種習慣</h2>
        </section>

        <h1 className="class">推薦課程</h1>

        <section className="bottom">

          <ShowBottomData />

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