import { useState } from "react";
import "./App.css";
import storeData from "../storeData.json";

function App() {
  const [selectedRegion, setSlectedRegion] = useState("Tokyo");

  const stores = storeData.regions[selectedRegion] || [];

  return (
    <>
      <div className="App">
        <h1>店舗情報</h1>
        <label htmlFor="region-select">地方を選択:</label>
        <select
          id="region-select"
          value={selectedRegion}
          onChange={(event) => setSlectedRegion(event.target.value)}
        >
          {Object.keys(storeData.regions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        
        <div className="store-list">
          {stores.map((store, index) => (
            <div key={index} className="store-item">
              <h2>{store.storeName}</h2>
              <p>住所:{store.address}</p>
              <p>電話番号:{store.phoneNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
