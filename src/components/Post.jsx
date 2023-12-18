import classes from './Post.module.css';

const Post = ({ key, brand, price, summary }) => {  
  return (
    <li className={classes.post}>
      <p className={classes.brand}>{brand}</p>
      <hr/>
      <p className={classes.price}>{price}</p>
      <hr/>
      <p className={classes.summary}>
          <ol>
            {summary.map((data) => (
                    <li>{data}</li>
              ))}
          </ol>     
      </p>
    </li>
  );
};

export default Post;
