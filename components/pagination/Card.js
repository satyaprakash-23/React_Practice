import "../../style.css"

const Card = ({image,title,id}) =>{
    console.log(id);
    
    return (
        <div className="box" key={id}>
            <div className="image">
                <img src={image} className="img"></img>
                
            </div>
            <div className="title">
            <h3>{title}</h3>
            </div>
        </div>
    )

}

export default Card;