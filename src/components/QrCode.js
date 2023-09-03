import { useContext } from "react";
import { InputContext } from "../App";


const QrCode = () => {
    const { response,loading, error } = useContext(InputContext);

  return (
    <div
    className="bg-gray-200 rounded-r-md flex flex-col items-center">
      <div>
        <img 
        className="w-full"
        src={response} alt="qrCode" />
        <button
            className='bg-blue-400 text-white mt-2  mb-2  mx-12 px-14 py-1 '>Download</button>
      </div>
    </div>
  )
}

export default QrCode
