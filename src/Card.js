const Card = ({number, onClick, disabled}) =>{
    console.log("***disabled state", disabled)
    return (
        <div className={disabled ? "card disabled": "card"} onClick={onClick}>
            <p>{number}</p>
        </div>
    )
}
export default Card;