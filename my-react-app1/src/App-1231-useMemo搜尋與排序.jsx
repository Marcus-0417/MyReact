import { useMemo, useState } from "react";


export default function App() {

  const products = [
    { id: 1, title: "蘋果", price: 100, imgUrl: "./images/01.jpg", },
    { id: 2, title: "橘子", price: 200, imgUrl: "./images/02.jpg", },
    { id: 3, title: "葡萄", price: 300, imgUrl: "./images/03.jpg", },
    { id: 4, title: "芭樂", price: 400, imgUrl: "./images/04.jpg", },
    { id: 5, title: "芒果", price: 500, imgUrl: "./images/05.jpg", },
    { id: 6, title: "香蕉", price: 600, imgUrl: "./images/06.jpg", },
    { id: 7, title: "柳丁", price: 700, imgUrl: "./images/07.jpg", },
    { id: 8, title: "西瓜", price: 800, imgUrl: "./images/08.jpg", },
    { id: 9, title: "梨子", price: 900, imgUrl: "./images/09.jpg", },
  ];

  /* 建立表格元件 */
  const ProductTable = ({ filterProds }) => {
    return (
      <table style={{ width: "500px", marginTop: "30px" }}>
        <tbody>
          {
            filterProds.map((props) => {
              return (
                <tr key={props.id}>
                  <td style={{ borderBottom: "1px dashed #000", padding: "5px", width: "300px" }}>{props.title}</td>
                  <td><img src={props.imgUrl} alt="" style={{ width: "100px", height: "70px" }}/></td>
                  <td style={{ borderBottom: "1px dashed #000", padding: "5px", width: "300px", textAlign: "right" }}>{props.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  /* 陣列變數，預設為原商品陣列的資料 */
  const [prods, setProds] = useState(products);
  /* 排序變數，預設為遞增 */
  const [ascending, setAscending] = useState(true);
  /* 搜尋變數 */
  const [search, setSearch] = useState("");

  /* 建立排序與搜尋的函式 */
  const filterProds = useMemo(() => {
    return [...prods]
      .sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
      })
      .filter((prod) => {
        // return prod.title.toLowerCase().includes(search.toLowerCase());
        return prod.title.match(search);
      })

  }, [ascending, search]);


  return (
    <>
      <h1>useMemo搜尋與排序</h1>
      <hr style={{ marginBottom: "30px" }} />

      {/* 設定資料 */}
      升降幂計算：
      <input
        type="checkbox"
        checked={ascending}
        onChange={(e) => setAscending(e.target.checked)}
      />
      <br />

      搜尋列：
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 呼叫表格元件 */}
      <ProductTable filterProds={filterProds} />
    </>
  )
}