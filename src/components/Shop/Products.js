import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    name : 'test',
    price : 6,
    description : 'This is a first product - amazon',
  },
  {
    name : 'book',
    price : 1,
    description : 'This is a book',
  }
];
const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(data=>
        <ProductItem
          key={data.name}
          title={data.name}
          price={data.price}
          description={data.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
