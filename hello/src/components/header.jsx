
import igualImg from "../images/igual.png"
import ironhackImg from "../images/ironhack.png"

function Header(props){

    console.log(props)
    return(

        <div id="container">
            <div className="imgHeader">
                <img src={ironhackImg} alt="ironhack" width="70px" />
                <img src={igualImg} alt="" width="30px" />
            </div>


            <h1>Say hello to <br /> ReactJS</h1>
            <p>You will learn how to <br /> use the most popular frontend libray,<br /> and become a super Ninja developer.</p>
    

            <button className="button">Awesome!</button>

      </div>

    )

}

export default Header;