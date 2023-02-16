import parse from 'html-react-parser'
import { Image } from 'semantic-ui-react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface texts{
    title:string,
    desc:string,
    code:string,
  }
  
export default function ListItemsCodeBlocks(props:{Texts:texts[]}) {
    const list = props.Texts.map((text) =>(
      <>
      <h3 id="projectListHeader" className='codeSnippet'>{text.title}</h3>
      <p id="opisMnie">{parse(text.desc)}</p>
      <SyntaxHighlighter language="csharp"  style={vs}>
      {text.code}
      </SyntaxHighlighter>
      </>
    ))
    return(
      <>
      {list}
      </>
    )
  }