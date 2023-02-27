import llaveImg from "../images/llaveInglesa.png"
import reprodImg from "../images/reproductor.png"
import imacImg from "../images/imac.png"
import codeImg from "../images/code.png"
import ImgText from "./ImgText"

function CollectionImg(){



    return(
        <div id="container-two" >
            <ImgText 
                img={llaveImg}
                title = "Declarative"
                textImg = "React makes it painless to create interactive UIs."  
                
            />
            <ImgText 
                img={reprodImg}
                title = "Declarative"
                textImg = "React makes it painless to create interactive UIs."   
            />
            <ImgText 
                img={imacImg}
                title = "Declarative"
                textImg = "React makes it painless to create interactive UIs."   
            />
            <ImgText 
                img={codeImg}
                title = "Declarative"
                textImg = "React makes it painless to create interactive UIs."   
            />
        </div>
        
    );


}

export default CollectionImg;