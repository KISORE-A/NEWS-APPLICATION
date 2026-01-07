import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const News =({category}) => {
    const[articles,setArticles]=useState([]);
    useEffect ( () => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a4a9d961a1be4fa5becdb4df228226ec`)
        .then(res =>res.json())
        .then(data =>{
            setArticles(data.articles ||[]); 
        });
    },[category] );

  return (
    <div>
    <h1 style={{textTransform:"capitalize"}}>{category}News Ready</h1>
    <hr/>
        <p>{category}News</p>
        <div style={{display:"grid",
            gridTemplateColumns:"repeat(3, 1fr)",
            gap:"15px"
        }}>
        {
            articles.map((news,index)=>(
                <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                image={news.urlToImage}
                url={news.url}
                content={news.content}
                />
            ))}

        </div>
    
    </div>
  )
}

export default News