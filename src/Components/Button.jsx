import '../assets/CSS/variables.scss'

const btnBg = {
    primary: '#9467FE',
    secondary: '#362465',
    success: '#11B011',
    info: '#00aeff',
    warning: '#FFBB69',
    danger: '#EB5757',
    transparent: 'transparent'
}

const btnSize = {
    small: '10px 20px',
    medium: '14px 30px',
    large: '16px 40px'
}


const Button = (props) => {
  return <button style={{
    fontSize: '15px',
    padding: btnSize[props.size],
    background: btnBg[props.bgColor],
    color: '#fff',
    borderRadius: '6px',
    border: '1px solid #9467FE',
    fontWeight: '600', 
  }} type={props.btnType}>{props.btnText}</button>
}

export default Button
