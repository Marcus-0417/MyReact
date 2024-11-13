function ShowBottomData({ }) {
  const bottomData = [
    {
      id: 1,
      figure: <img src="./images/unity.jpg" alt="" />,
      bottomTitle: "Unity 5",
      bottomText: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
      teacher: "講師:XXX",
      time: "影音課程時數：X小時",
      price: "原價：NT$1600",
      sales: "NT$1200",
      button: "付款上課去",
    },
    {
      id: 2,
      figure: <img src="./images/gamesalad.jpg" alt="" />,
      bottomTitle: "GameSalad 2D遊戲製作",
      bottomText: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
      teacher: "講師:XXX",
      time: "影音課程時數：X小時",
      price: "原價：NT$1600",
      sales: "NT$1200",
      button: "付款上課去",
    },
    {
      id: 3,
      figure: <img src="./images/gwd.jpg" alt="" />,
      bottomTitle: "Google Web Design",
      bottomText: "用於建立HTML5廣告動畫，透過時間軸將各種物件和事件以動畫方式呈現",
      teacher: "講師:XXX",
      time: "影音課程時數：X小時",
      price: "原價：NT$1600",
      sales: "NT$1200",
      button: "付款上課去",
    },
  ]

  return (
    <>
      {
        bottomData.map((item2) => {
          return (
            <section className="bottom" key={item2.id}>
              <div className="box1">
                <figure>{item2.figure}</figure>
                <h3><strong>{item2.bottomTitle}</strong></h3>
                <p className="text">{item2.bottomText}</p>
                <p>{item2.teacher}</p>
                <p>{item2.time}</p>
                <p><span className="span1">{item2.price}</span></p>
                <p><span className="span2">{item2.sales}</span></p>
                <button>{item2.button}</button>
              </div>
            </section>
          )
        })
      }
    </>
  )
}

export default ShowBottomData