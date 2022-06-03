import react from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articlesElements = posts.map((art) => {
      return(  <Article 
            key = {art.id}
            title={art.title}
            date={art.date}
            preview={art.preview}
        />)
    })
    return (
        <main>
            {articlesElements}
        </main>
    )
}

export default ArticleList