import { useState } from "react"
import { ChromePicker } from "react-color";


// eslint-disable-next-line 
 const InputColor = () => {
    const [color,setColor] = useState('#054080')
    const [displaycolorPicker, setDisplaycolorPicker] = useState(false);

    const handleChange = color =>setColor(color.hex);
       return (
     <div>
       <label
       className="font-semibold text-md"
       >Color</label>
       <div className="flex itemscenter gap-2">
       
            <div 
            onClick={() => setDisplaycolorPicker(!displaycolorPicker)}
             style  ={{background: color }}
            className="w-10 h-8 cursor-pointer border-4"></div>
            <span>{color}</span>
       </div>
       {
        displaycolorPicker && (
            <div className="absolute mt-2">
                <ChromePicker color={color} onChange={handleChange} />
            </div>
        )
       }
     </div>
   )
 }
 
 export default InputColor
 