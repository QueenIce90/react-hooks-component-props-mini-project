
function Article({title, date = "January 1, 1970", preview, time}) {
    return (
     <article>
       <h3>
         {title}
      </h3>
    <small>
      {date} | {emojiPic(time)} {time} mins to read
    </small>
   <p>
    {preview}
   </p> 
  </article>
  )
}

function emojiPic(time) {
    let emoji = "☕️"
    let mins = 5
    let picEmoji = ""
    if (time >= 30){
     emoji = "🍱"
     mins = 10 
    }
    for(let x = 0; x <time; x+=mins) {
      picEmoji += emoji 
      }
      return picEmoji
  }
   


    


export default Article;