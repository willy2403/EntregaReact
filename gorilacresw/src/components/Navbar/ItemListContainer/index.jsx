import { useContext } from "react";
import { ProductList } from "../../ProductList"; 

const ItenListConteiner = () => {
  const { data } = useContext(ProductList);
  return data.map((product) => {
    return(
      <div className="card">
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <button>Agregar</button>

      </div>
    )
  });
};

export default ItenListConteiner