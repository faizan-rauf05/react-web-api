import React, { useState, useEffect } from 'react';
import Product from './Product';

function Home() {

  const [data, setData] = useState(null);

  const getData = async ()=>{
    let apiCall = await fetch("https://fakestoreapi.com/products");
    let prodsData = await apiCall.json();
    console.log(prodsData);
    setData(prodsData);
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between p-4">
        {
          data?.map((currElem)=>{
              return <Product key={currElem.id} {...currElem} />
          })
        }
      </div>
    </>
  )
}

export default Home