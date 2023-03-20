import Navbar from "../Navbar"
import ItemListContainer from "../Navbar/ItemListContainer";

const ProductList = ({ Products }) => {
  return (
    <div>
       <Navbar/>
      {Products.map((Product) => {
        
       return <ItemListContainer Products={Product} />
    })}
     </div>
  );
};

export default ProductList;

