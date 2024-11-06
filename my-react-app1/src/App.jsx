
function Component() {
  return (
    <h1>React</h1>
  )
}

function App() {

  /* 建立陣列(可以是任何形式的資料 => 元件 */
  /* 同一個陣列中key屬性的值不可以重複 */
  const listItem = [
    <Component key="0" />,
    <Component key="1" />,
    <Component key="2" />,
  ]

  const listBooks = [
    { bookName: "HTML", id: "book1" },
    { bookName: "CSS", id: "book2" },
    { bookName: "JavaScript", id: "book3" },
  ]

  /* 過濾出陣列中除了CSS的書本 */
  const filterBooks = listBooks.filter((book) => {
  //   if (book.bookName !== "CSS") {
  //     return true
  //   }
  // })

  /* 三元運算子的判斷式(只能用在單層判斷) */
  /* 判斷式?條件成立：條件不成立 */
  return book.bookName !== "CSS" ? false : true
  })


  return (

    <>
      {/* 使用陣列方法1 */}
      {listItem}
      <hr />
      {/* 使用陣列方法2 =>map() => 此方法可以把一個陣列轉換成另一個陣列 */}
      {listBooks.map((book) => {
        return <div key={book.id}>{book.bookName}</div>
      })}
      <hr />
      {/* 顯示filter()方法過濾後的陣列資料 */}
      {
        filterBooks.map((book) => {
          return <div key={book.id}>{book.bookName}</div>
        })
      }

    </>
  )
}

export default App
