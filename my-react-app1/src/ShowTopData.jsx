function ShowTopData({ }) {
  const topData = [
    {
      id: 1,
      title: "教學影音",
      text: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
    },
    {
      id: 2,
      title: "良性互動",
      text: "學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決"
    },
    {
      id: 3,
      title: "趨勢分享",
      text: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展"
    },
  ]

  return (
    <>
      {
        topData.map((item1) => {
          return (
            <div className="box" key={item1.id}>
              <h2><strong>{item1.title}</strong></h2>
              <p>{item1.text}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default ShowTopData