import { TextField } from "@mui/material";

const TextInput=()=>{
    return(
        <>
        <div style={{height:"350px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{width:"90%",height:"90%"}}>
            <TextField 
             id="outlined-basic" 
             multiline
             fullWidth
             placeholder={"میتوانید اینجا بنویسید تا من یاد بگیرم ..."}
             rows={12}
             variant="outlined" />
            </div>

        </div>

    
        </>
        
    )
};
export default TextInput;