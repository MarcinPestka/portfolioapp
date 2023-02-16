import parse from 'html-react-parser'

interface texts{
    title:string,
    desc:string,
  }
  
export default function ListItems(props:{Texts:texts[]}) {
    const list = props.Texts.map((text) =>(
      <>
      <h3 id="projectListHeader">{text.title}</h3>
      <p id="opisMnie">{parse(text.desc)}</p>
      </>
    ))
    return(
      <>
      {list}
      </>
    )
  }