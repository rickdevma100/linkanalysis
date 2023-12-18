import { useState } from 'react';

import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  
  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function extendedComparisonHandler() {
    setExtendedComparison(true);
  }

  return (
    <Provider store={store}>
    <>
      <MainHeader modalIsVisible={modalIsVisible} onCreatePost={showModalHandler}/>
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
    </Provider>
  );
}

export default App;
