import { useState } from "react";

function App() {
  /* 使用者名稱 */
  const [inputUserName, setInputUserName] = useState("我是文字方塊")

  /* 縣市名稱 */
  const [selCity, setSelCity] = useState("");
  const arrCity = ["台北市", "新北市", "桃園市", "高雄市", "台中市", "台南市", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "基隆市", "新竹市", "新竹縣", "臺東縣", "澎湖縣", "金門縣", "馬祖縣"];

  /* 閱讀確認 */
  const [check, setCheck] = useState(false);

  /* 複選：多個核取方塊 */
  const [chkList, setChkList] = useState([]);
  const arrList = ["HTML", "CSS", "JS","React","Vue"];

  /* 建立函式處理被勾選的項目 */
  const handleCheckList = (e) => {
    // console.log(e.target.value);
    /* 使用其餘運算子保留已被勾選的項目+ 新被勾選的項目 */
    // setChkList([...chkList, e.target.value]);
    if (e.target.checked) { //被勾選 => 原本+新的
      setChkList([...chkList, e.target.value]);
    } else { //取消勾選 => 從原本被勾選的項目中拿掉不要的(用filter方法)
      // setChkList(chkList.filter(item => item !== e.target.value));
      setChkList(chkList.filter(item => { return item !== e.target.value }));
    }
  }

  return (
    <>
      <h1>React-表單Form</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱：</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />{inputUserName}
      <br /><br />

      {/* select */}
      <label htmlFor="city">縣市名稱</label>
      <select name="" id="city" value={selCity} onChange={(e) => setSelCity(e.target.value)}>
        {/* 逐行寫法 */}
        {/* <option value="台北市">台北市</option>
        <option value="新北市">新北市</option>
        <option value="桃園市">桃園市</option>
        <option value="高雄市">高雄市</option>
        <option value="台中市">台中市</option>
        <option value="台南市">台南市</option>
        <option value="苗栗縣">苗栗縣</option>
        <option value="彰化縣">彰化縣</option>
        <option value="南投縣">南投縣</option>
        <option value="雲林縣">雲林縣</option>
        <option value="嘉義市">嘉義市</option>
        <option value="嘉義縣">嘉義縣</option>
        <option value="屏東縣">屏東縣</option>
        <option value="宜蘭縣">宜蘭縣</option>
        <option value="花蓮縣">花蓮縣</option>
        <option value="基隆市">基隆市</option>
        <option value="新竹市">新竹市</option>
        <option value="新竹縣">新竹縣</option>
        <option value="臺東縣">臺東縣</option>
        <option value="澎湖縣">澎湖縣</option>
        <option value="金門縣">金門縣</option>
        <option value="馬祖縣">馬祖縣</option> */}

        {/* 陣列寫法 */}
        <option value="" disabled>請選擇</option>
        {arrCity.map((city) => {
          return <option key={city} value={city}>{city}</option>
        })}

      </select>{selCity}
      <br /><br /><br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          /* 處理勾選值的變化 */
          setCheck(e.target.checked);

        }} />{check.toString()}

      <br /><br />
      {/* 複選：多個核取方塊 */}
      {
        arrList.map((list) => {
          return <div key={list}>
              <input type="Checkbox" id={list} name="like" value={list} onChange={handleCheckList} />
              <label htmlFor={list}>{list}</label>
            </div>
        })
      }
      
      {/* <input type="Checkbox" id="CheckList1" name="like" value="HTML" onChange={handleCheckList} />
      <label htmlFor="CheckList1">HTML</label>
      <input type="Checkbox" id="CheckList2" name="like" value="CSS" onChange={handleCheckList} />
      <label htmlFor="CheckList2">CSS</label>
      <input type="Checkbox" id="CheckList3" name="like" value="JS" onChange={handleCheckList} />
      <label htmlFor="CheckList3">JS</label> */}
      < br />
      {chkList}
    </>
  )
}

export default App