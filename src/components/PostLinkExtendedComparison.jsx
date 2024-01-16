import classes from './Post.module.css';

const PostLinkExtendedComparison = ({ brand,price,valueForMoney, 
  countryOfOrigin, featuresAndFunctionality, mainHighlights, 
  warranty, qualityAndDurability,compatibility,performance,
  userFriendlyDesign,easeOfMaintenanceAndCleaning,aestheticsAndDesign}) => {  
  return (
    <li className={classes.post}>
      <p className={classes.brand}>{brand}</p>
      <hr/>
      <p className={classes.price}><b>PRICE:</b> {price}</p>
      <hr/>
      <p className={classes.summary}><b>Value For Money: </b>{valueForMoney}</p>
      <hr/>
      <p className={classes.summary}><b>Country Of Origin: </b>{countryOfOrigin}</p>
      <hr/>
      <p className={classes.summary}><b> Features and Functionality: </b>
        <ol>
        {featuresAndFunctionality.map((data) => (
                <li>{data}</li>
          ))}
          </ol>
        </p>

      <hr/>
      <p className={classes.summary}><b>Main Highlights: </b>
          <ol>
            {mainHighlights.map((data) => (
                    <li>{data}</li>
              ))}
          </ol>
      </p>
      <hr/>
      <p className={classes.summary}><b>Quality And Durability: </b>{qualityAndDurability}</p>
      <hr/>
      <p className={classes.summary}><b>Compatibility: </b>{compatibility}</p>
      <hr/>
      <p className={classes.summary}><b>Performance: </b>{performance}</p>
      <hr/>
      <p className={classes.summary}><b>Warranty: </b>{warranty}</p>
      <hr/>
      <p className={classes.summary}><b>User Friendly Design: </b>{userFriendlyDesign}</p>
      <hr/>
      <p className={classes.summary}><b>Ease Of Maintenance: </b>{easeOfMaintenanceAndCleaning}</p>
      <hr/>
      <p className={classes.summary}><b>Aesthetic Design: </b>{aestheticsAndDesign}</p>
      <hr/>
     
    </li>
  );
};

export default PostLinkExtendedComparison;