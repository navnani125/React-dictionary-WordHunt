import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import '../components/Header.css';
import languages from '../languages';

const Header = ({setLanguage, language, word, setWord, LightMode}) => {
    
        const darkTheme = createMuiTheme({
        palette:{
            primary:{ 
                main:LightMode?"#000":"#fff",
            },
            type:LightMode?"light":"dark",
        },
        }); 
        const handleChange = (language) =>{
            setLanguage(language);
            setWord("");
        }

    return(
        <div className="header">
            <span className={LightMode?"title_light":"title"}>{word?word:"Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search"
                        label="Search a Word" 
                        value={word}
                        onChange={(e)=>setWord(e.target.value)}
            
                    />
                    <TextField
                        className="select_language"
                        select
                        label="Language"
                        value={language}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {
                            languages.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;