import { Button, TextField } from "@mui/material";
import "./style.css";
import { Share } from "next/font/google";
import { BiShare } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";


const WebsiteLink=()=>{

    const [inputs, setInputs] = useState(['']); 

    const handleAddInput = () => {
        setInputs([...inputs, '']); 
    };
    const handleDeleteAllInputs = () => {
        setInputs(['']); 
    };

    const handleInputChange = (index:number, value:string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs); // Update input value
    };

    const handleDeleteInput = (index:number) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1); // Remove input at index
        setInputs(newInputs);
    };




    return (
        <>
            <div style={{ height: "360px", display: "flex", justifyContent: "center",marginTop:"15px" }}>
                <div style={{ height: "90%", width: "90%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button className="deleteBtn" onClick={handleDeleteAllInputs}> حذف کردن همه</button>
                    <button className="addBtn" onClick={handleAddInput}>اضافه کردن  + </button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column",marginTop:"12px",overflow:"auto",height:"300px" }}>
                        {inputs.map((input, index) => (
                            <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                <Button size={"small"} onClick={() => handleDeleteInput(index)}>
                                    <MdDelete color="red" size={20} />
                                </Button>
                                <TextField
                                    fullWidth
                                    id={`outlined-basic-${index}`}
                                    placeholder="https://plotset.com"
                                    variant="outlined"
                                    value={input}
                                    onChange={e => handleInputChange(index, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

};


export default WebsiteLink;