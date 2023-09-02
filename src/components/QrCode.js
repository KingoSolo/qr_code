

const QrCode = () => {
  return (
    <div
    className="bg-blue-200 rounded-r-md flex flex-col items-center">
      <div>
        <img 
        className="w-full"
        src="//api.qrcode-monkey.com/tmp/21571c05fad4093f5c43f56c3e18bf62.png" alt="qrCode" />
        <button
            className='bg-red-400 text-white mt-2  mb-2  mx-12 px-14 py-1 '>Download</button>
      </div>
    </div>
  )
}

export default QrCode
