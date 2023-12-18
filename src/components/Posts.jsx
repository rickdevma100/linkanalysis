import Post from './Post';
import PostCompleteSummary from './PostCompleteSummary';
import PostLinkExtendedComparison from './PostLinkExtendedComparison';
import { useState,useEffect,useRef } from 'react';
import classes from './PostsList.module.css';
const Posts = ({ summarizeData, elaborateComparison, completelySummarizedData }) => {  
    console.log("completelySummarizedData---"+completelySummarizedData);
    return (
     <ul className={classes.posts}>
        {!completelySummarizedData && !elaborateComparison && summarizeData && summarizeData.map((data) => (
            <Post key={data.brand} brand = {data.brand} price = {data.price} summary = {data.summary}/>
        ))}
        {!elaborateComparison && completelySummarizedData
            && <PostCompleteSummary key={completelySummarizedData.bestProduct} summary = {completelySummarizedData}/>
        }
        
        {elaborateComparison && elaborateComparison.map((data) => (
            <PostLinkExtendedComparison 
                key={data.brand} 
                brand = {data.brand} 
                price = {data.price} 
                valueForMoney = {data.valueForMoney}
                countryOfOrigin = {data.countryOfOrigin}
                featuresAndFunctionality = {data.featuresAndFunctionality}
                mainHighlights = {data.mainHighlights}
                warranty = {data.warranty}
                qualityAndDurability = {data.qualityAndDurability}
                compatibility = {data.compatibility}
                performance = {data.performance}
                userFriendlyDesign = {data.userFriendlyDesign}
                easeOfMaintenanceAndCleaning = {data.easeOfMaintenanceAndCleaning}
                aestheticsAndDesign = {data.aestheticsAndDesign}/>
        ))} 
     </ul>
    );
  };
  
export default Posts;