import { useState } from "react"

export default function App() {

  /* 單價變數 */
  const [price, setPrice] = useState(100);

  /* 數量變數 */
  const [quantity, setQuantity] = useState(1);

  /* 計算總價 */
  const total = price * quantity;

  return (
    <>
      <h1>單價*數量計算</h1>
      <hr style={{ marginBottom: "50px" }} />

      單價：<input type="number" value={price} onChange={(e) => {
        if (e.target.value < 1) return; setPrice(e.target.value);
      }} /><br />
      數量：<input type="number" value={quantity} onChange={(e) => {
        if (e.target.value < 1) return; setQuantity(e.target.value);
      }} />

      <div>
        總價:{total}元
      </div>
    </>
  )
}