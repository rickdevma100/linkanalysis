import { useState, useEffect } from 'react';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import Posts from './Posts';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import classesBackdrop from './Modal.module.css';
import {getLinkSummary} from "../service/linkAnalysisService"

function PostsList({ isPosting, onStopPosting}) {
  const [rawData, setRawData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [summarizeInitialData, setSummarizeInitialData] = useState(null);
  const [elaborateComparison, setElaborateComparison] = useState(null);
  const [completelySummarizedData, setCompletelySummarizedData] = useState(null);
  const [loadingData,setLoadingData] = useState(false);
  const [loading,setLoading] = useState(false);
  const languages = [
    'ENGLISH', 'HINDI', 'BENGALI', 'TAMIL', 'GERMAN'
  ];
  const fetchRawData = async (postData) => {
    try {
      setLoadingData(true);
      const response = axios.get("http://127.0.0.1:8000/rawdata", {
        params: {
          Query1: postData.link1,
          Query2: postData.link2,
          Query3: postData.link3
        }
      }).then(response=> {
          setLoadingData(false);
          setRawData(response.data.data);
          setSelectedLanguage(postData.language);
          const rawDataData = {
              data: response.data.data
          };
          summarizeData(rawDataData,postData.language);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const summarizeData = (rawDataData,language) => {
    setLoading(true);
    getLinkSummary(rawDataData,language).then((resultArray) => {
        setLoading(false);
        setSummarizeInitialData(resultArray);
      }).catch((error) => {
        console.error("Error:", error);
    });
  }

  function addPostHandler(postData) {
    fetchRawData(postData);
  }

  const getLinkExtendedComparison = async (postData) => {
    try {
      setLoading(true);
      axios
      .post(`http://127.0.0.1:8000/linkAnalysis`,postData) 
      .then((response) => {
        setLoading(false);
        setElaborateComparison(response.data.brandQuality);
        setCompletelySummarizedData(null);
      });
    } catch(error) {
      console.error("Error Posting data:", error);
      throw error;
    }
  };

  const onElaborate = ()=>{
    console.log()
    const postData = {
      data: rawData
    };
    getLinkExtendedComparison(postData)
  }

  const getAllLinkSummary = async (postData,language) => {
    try{
      setLoading(true);
      axios
      .post(`http://127.0.0.1:8000/allLinkSummarize?language=`+language, postData) 
      .then((response) => {
        setLoading(false);
        setCompletelySummarizedData(response.data.data);
        setSummarizeInitialData(null);
        setElaborateComparison(null);
        
      });
    }catch(error){
      console.error("Error Posting data:", error);
      throw error;
    }
    
  };

  const onCompleteSummaryWithLanguage = (language) => {
    const postData = {
      data: rawData
    };
    getAllLinkSummary(postData,language)
  }

  const onCompleteSummary = () => {
    onCompleteSummaryWithLanguage(selectedLanguage);
  }

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    const rawDataData = {
        data: rawData
    };
    if(summarizeInitialData != null){
      summarizeData(rawDataData, event.target.value)
    }else{
      onCompleteSummaryWithLanguage(event.target.value)
    }
  };
  return (
    <>
      {!isPosting && (
        <div className={classes.buttongroup}>
          <p className={classes.header}>
          {elaborateComparison ==null && (
            <>
            <label htmlFor="body">Language</label>
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                  <option value="">Select Language</option>
                  {languages.map((language, index) => (
                      <option key={index} value={language}>
                          {language}
                      </option>
                  ))}
              </select>
              </>)}
              <button className={classes.button} onClick={onCompleteSummary}>
                <MdPostAdd size={18} />
                Get the Best Product
              </button>
          
              <button className={classes.button} onClick={onElaborate}>
                <MdPostAdd size={18} />
                Elaborate
              </button>
          </p>
        </div>
      )}
     {!loadingData && !loading && isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>  
      )}
      {loadingData && !isPosting && <div style={{padding:"10rem"}} className={classesBackdrop.backdrop}><h1>LOADING DATA....</h1></div>}
      {loading && !isPosting && <div style={{padding:"10rem"}} className={classesBackdrop.backdrop}><h1>Analysis is at it's Peak....</h1></div>}
      {rawData != null && (
        <Posts summarizeData={summarizeInitialData} elaborateComparison={elaborateComparison} completelySummarizedData = {completelySummarizedData}/>
      )}

    </>
  );
}

export default PostsList;
