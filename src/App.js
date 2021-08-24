import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container, Switch, withStyles } from '@material-ui/core';
import Header from './components/Header';
import Definitions from './components/Definitions';
import { grey } from '@material-ui/core/colors';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color:grey[300],
      '&$checked': {
        color:grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async()=>{
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);
      setMeanings(data.data);
    }
    catch(error){
      console.log(error);
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  },[language,word])


  return (
    <div className={LightMode?"Dark" :"App"}>
      <Container id="container" maxWidth="md">
        <div className="colorMode">
          <span>{LightMode?"Dark":"Light"} Mode</span>
          <DarkMode checked={LightMode} onChange={()=>setLightMode(!LightMode)}/>
        </div>
        <Header language={language} setLanguage={setLanguage}  
        word={word} setWord={setWord}
        LightMode={LightMode}
        />
        
        {meanings &&
        (<Definitions  word={word} meanings={meanings} 
          language={language}
          LightMode={LightMode}
        />)
        }
      </Container>
    </div>
  );
}

export default App;
