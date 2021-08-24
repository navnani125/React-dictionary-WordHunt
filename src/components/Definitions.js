import React from 'react';
import '../components/Definitions.css';

const Definitions=({word,language,meanings, LightMode})=>{
    return(
        <div className="meanings">

            {
                meanings[0] && word && language==='en' && (
                   <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                   className="audios" 
                   controls>
                    Your Browser doesn't support audio element.
                   </audio> 
                )
            }

            {word === "" ? 
            (<span className="subTitle">Start by typing a word in search</span>) : (
            meanings.map((mean) =>
              mean.meanings.map((item) =>
                item.definitions.map((def) => (
                  <div
                    className={LightMode?"singleMean_light":"singleMean"}>
                    <b>{def.definition}</b>
                    <hr style={{backgroundColor:LightMode?"white":"black",width:"100%"}}></hr>
                    {def.example &&(
                        <span>
                            <b>Example : </b>{def.example}
                        </span>
                    )}
                    {def.synonyms &&(
                        <span>
                            <b>Synonyms : </b>
                            {def.synonyms.map((s)=> `${s}, `)}
                        </span>
                    )}
                  </div>
                ))
              )
            )
          )}
        </div>
    );
}

export default Definitions;