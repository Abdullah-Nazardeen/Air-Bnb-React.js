// import image from "../images/katie-zaferes.png";
import star from "../images/star.png";
// \src\images\katie-zaferes.png
export default function Card(props) {
    let badgeStatus
    if (props.content.openSpots === 0) {
        badgeStatus = "SOLD OUT"
    } else if (props.content.location === "Online") {
        badgeStatus = "Online"
    }
    return (
    <div className="card-container">
        {badgeStatus && <div className="status">{badgeStatus}</div>}
        <img src={require(`../images/${props.content.coverImg}`)} alt="ImageUnavailable" className="card-img" />
        <span className="rating-container">
            <img src={star} alt="ImageUnavailable" className="star" />
            <p className="ratings"> {props.content.stats.rating}  </p>
            <p className="ratings-dull"> ({props.content.stats.reviewCount})-{props.content.location} </p> 
        </span>
        <span className="info-container">
            <p className="info">{props.content.title}</p>
            <span className="price-container">
                <p className="price">From ${props.content.price}</p>
                <p className="price-per">/Person</p>
            </span>
        </span>
    </div>
    )
};