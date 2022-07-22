import React from 'react'
import {read, utils} from "xlsx";

const SheetHandler = () => {

    const extractData = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = e => {
          /* Parse data */
          const bstr = e.target.result;
          const wb = read(bstr, { type: rABS ? "binary" : "array" });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          console.log(rABS, wb);
          /* Convert array of arrays */
          const data = utils.sheet_to_json(ws, { header: 1 });
          console.log(data);
          /* Update state */
        //   this.setState({ data: data, cols: make_cols(ws["!ref"]) });
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    }


  return (
    <div>
        <h1>Welcome to Automation Tool</h1>
        <input onChange={extractData} type="file" />
    </div>
  )
}

export default SheetHandler