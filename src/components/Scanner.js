import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";
const Scanner = ()=> {
  const [data, setData] = useState("Not Found");
  return (
    
    <div>
      <div className="row pt-5">
        <div className="col-6"></div>
        <div className="col-6">
          <h2 className="text-white">Add Product</h2>
        </div>
      </div>
     <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </div>
  );
}
export default Scanner;
