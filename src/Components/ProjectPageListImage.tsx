import parse from 'html-react-parser'
import { Image } from 'semantic-ui-react'

interface texts{
    title:string,
    desc:string,
    img:string,
  }
  
export default function ListItemsImages(props:{Texts:texts[]}) {
    const list = props.Texts.map((text) =>(
      <>
      <h3 id="podTytulProjektu">{text.title}</h3>
      <Image src={text.img} size="big" centered></Image>
      <p id="opisMnie">{parse(text.desc)}</p>
      </>
    ))
    return(
      <>
      {list}
      </>
    )
  }