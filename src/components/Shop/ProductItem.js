import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../store/index';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(cartActions.addItem({name:title, price}))
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
