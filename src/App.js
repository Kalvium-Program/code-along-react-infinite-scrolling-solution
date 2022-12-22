import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(Array.from({length:20}));
  const [hasMore, setHasMore] = useState(true)
  const moreData = ()=>{
    
    if(data.length<200){
      setTimeout(()=>{
        setData(data.concat(Array.from({length:20})))
      },1000)
    }
    else{
      setHasMore(false)
    }
  }

  return (
    <div>
      <h1>Kalvium</h1>
      <InfiniteScroll dataLength={data.length} next={moreData} hasMore={hasMore} loader={<p className='loading'>Loading...</p>} endMessage={<p className='done'>Done</p>} height={500}>
        {data.map((item,index)=>{
          return(
            <div className="App" key={index}>
              {index+1}
            </div>
          )
        })}
      </InfiniteScroll>
      <h2>Happy Coding</h2>
    </div>
  );
}

export default App;
