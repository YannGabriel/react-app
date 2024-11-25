

export const Button = (props:any) =>{
  return (
    <button className="formButton" onClick={props.event}><p className="buttonText">{props.text}</p></button>
  )
}