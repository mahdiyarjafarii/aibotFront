"use client" 
import "./style.css";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BotBox from "./components/bot-box";
import { SearchNormal1 } from "iconsax-react";
import useStyles from "./components/style";
import {Box,Pagination} from '@mui/material';
import useMyBots from "./hooks/my-bots";


const MyBots=()=>{
  const styles = useStyles();
  const myBots=useMyBots();
  const botList=myBots.bots;
  console.log(botList)


    return(
      <Container style={{
        marginTop:"90px"
      }}>
    
        <div id="navbar" style={{
          display:'flex',
          flexDirection:"row",
          // alignItems:'center',
          justifyContent:'space-between',
          width:"100%"

        }} >
          <div>
          <p style={{
                fontSize:"28px"
            }} >چت بات های من</p>
             <p style={{
                fontSize:"12px",
                color:"#8F8F8F",
                marginTop:'8px'
            }} >در اینجا، می توانید بات های خود را ببینید و بات های جدید بسازید.  !</p>

          </div>
          <div>
          <button
              style={{
              background:"#1D4ED8",
              color:'white',
              padding:"12px",
              borderRadius:"18px",
              fontSize:"12px"
              // width:"40%",

             }}> چت بات جدید</button>
          </div>
          

            
        </div>

      <Paper 
        elevation={3}
        style={{
          marginTop:"50px",
          borderRadius:"8px",
          paddingLeft:"32px",
          paddingRight:"32px",
          paddingTop:"24px",
          paddingBottom:"24px",


        }}
       >
          <Box
             style={{
              display:"flex",
              justifyContent:'center'
             }}
                >
                  <Box mx={1} pl={2} className="searchBox">
                    <SearchNormal1 color="#8F8F8F" />
                    <Box style={{
                      marginRight:"20px"
                    }} display="flex" width="100%">
                      <input
                        width={"100%"}
                        placeholder="جستوجو کردن ..."
                        type="text"
                      />
                    </Box>
                  </Box>
         </Box>
        
         <Grid container  display={"flex"} spacing={2} mt={2}>
          {botList.map((item,bindex)=>{
            return (
              <Grid
                    
                    key={`project-item-${bindex}`}
                    style={{
                      width:"100%"
                    }}
                    item
                    sm={4}
                    md={3}
                    lg={3}
                    xl={2}
                  >
                    <BotBox
                    type={item.type}
                    botsData={item}
                    />
                    
                  </Grid>
            )
          })}


         </Grid>
         
         <Box style={{
          display:"flex",
          alignItems:'center',
          justifyContent:'center',
          marginTop:"40px"
         }}>
          <Pagination count={10} color="primary" />
         </Box>


      </Paper>


      </Container>
   
    )
}

export default MyBots;