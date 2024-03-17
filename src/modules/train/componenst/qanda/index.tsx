import { Button, Paper, TextField } from "@mui/material";
import "./style.css";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
const QandA=()=>{
    const [qaList, setQAList] = useState([{ question: '', answer: '' }]);
    const handleAddQA = () => {
        setQAList([...qaList, { question: '', answer: '' }]);
    };

    const handleDeleteQA = (index:number) => {
        const newList = [...qaList];
        newList.splice(index, 1);
        setQAList(newList);
    };

    const handleInputChange = (index:number, field:string, value:string) => {
        const newList:any = [...qaList];
        newList[index][field] = value;
        setQAList(newList);
    };


   
    return (
        <>
            <div style={{ height: "440px", display: "flex", justifyContent: "center", marginTop: "15px" }}>
                <div style={{ height: "90%", width: "90%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <button className="deleteBtn" onClick={() => setQAList([])}> حذف کردن همه</button>
                        <button className="addBtn" onClick={handleAddQA}>اضافه کردن + </button>
                    </div>
                <div>

                    {qaList.map((qa, index) => (
                        <Paper key={index} elevation={1} style={{ padding: "20px", marginTop: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", direction: "ltr" }}>
                                <Button size={"small"} onClick={() => handleDeleteQA(index)}>
                                    <MdDelete color="red" size={20} />
                                </Button>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}>
                                <span>سوال:</span>
                                <TextField
                                    fullWidth
                                    placeholder="مهدیار جعفری کیه؟"
                                    variant="outlined"
                                    multiline
                                    rows={1}
                                    value={qa.question}
                                    onChange={(e) => handleInputChange(index, 'question', e.target.value)}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}>
                                <span>پاسخ :</span>
                                <TextField
                                    fullWidth
                                    placeholder="مهدیار جعفری یکی از بزرگ ترین برنامه نویس های جهان هست که ..."
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={qa.answer}
                                    onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                                />
                            </div>
                        </Paper>
                    ))}
                    
                </div>
                </div>
            </div>
        </>
    );
};


export default QandA;