

function ImgText({img,title,textImg}){

    return(
      <div id="containerTwo">
            <img src={img} alt="img" />
            <h2>{title}</h2>
            <p>{textImg}</p>
      </div>
     
 
    )
}

export default ImgText;