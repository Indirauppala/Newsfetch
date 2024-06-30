import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=00d301c7e3ec4affa46cb1ae4b9b29a5`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error fetching the news articles:", error));
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center mb-4 mt-2  ">Latest <span className="text-danger">News</span></h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {articles.map((news, index) => (
          <div className="col" key={index}>
            <Newsitem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
