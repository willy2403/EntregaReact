

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((Product) => (
        <h2>{Product.title}</h2>
      ))}
    </div>
  );
};

export default ProductList;