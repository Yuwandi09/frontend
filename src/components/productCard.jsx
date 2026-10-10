
export default function ProductCard(props){
  return(
    <div className = "productCard">
      <img src={props.image} alt="product" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}