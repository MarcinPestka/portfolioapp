import parse from 'html-react-parser'
import { Image } from 'semantic-ui-react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface texts{
    title:string,
    desc:string,
    code:string,
  }
  
export default function ListItemsImages(props:{Texts:texts[]}) {
    const list = props.Texts.map((text) =>(
      <>
      <h3 id="podTytulProjektu">{text.title}</h3>
      <SyntaxHighlighter language="csharp"  style={vs}>
      {text.code}
      </SyntaxHighlighter>
      <p id="opisMnie">{parse(text.desc)}</p>
      </>
    ))
    return(
      <>
      {list}
      </>
    )
  }