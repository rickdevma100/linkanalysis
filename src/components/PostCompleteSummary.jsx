import classes from './Post.module.css';

const PostCompleteSummary = ({ summary }) => {  
  return (
    <li style = {{width: "70em"}} className={classes.post}>
      <p className={classes.summary}><b>{summary.bestProduct}</b></p>
      <hr/>
      <p className={classes.summary}><b>Product One Summary: </b>{summary.brandOne}</p>
      <hr/>
      <p className={classes.summary}><b>Product Two Summary: </b>{summary.brandTwo}</p>
      <hr/>
      <p className={classes.summary}><b>Product Three Summary: </b>{summary.brandThree}</p>
    </li>
  );
};

export default PostCompleteSummary;
