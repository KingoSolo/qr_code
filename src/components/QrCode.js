

const QrCode = () => {
  return (
    <div
    className="bg-gray-200 rounded-r-md flex flex-col items-center">
      <div>
        <img 
        className="w-full"
        src="https://qrtiger.com/temp/1693702841754.png" alt="qrCode" />
        <button
            className='bg-blue-400 text-white mt-2  mb-2  mx-12 px-14 py-1 '>Download</button>
      </div>
    </div>
  )
}

export default QrCode
