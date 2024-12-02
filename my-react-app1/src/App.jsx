import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 使用 raw GitHub 鏈接
        const response = await axios.get('https://raw.githubusercontent.com/Marcus-0417/MyReact/refs/heads/main/F-C0032-001.json');
        
        // 根據 JSON 結構調整路徑
        const locationsData = response.data.cwbopendata.dataset.locations;
        
        console.log(locationsData);
        setLocations(locationsData);
      } catch (error) {
        console.error("獲取數據時出錯:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      {/* 可以在這裡渲染 locations 數據 */}
    </>
  )
}

export default App