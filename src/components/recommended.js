import a from "../assets/images/c1.jpg"
import d from "../assets/images/c4.jpg"
import b from "../assets/images/c2.jpg"
import c from "../assets/images/c3.jpg"

function Recommended() {
    return (
        <div class="recommended">
        <h1 class="recommended__title"> Recommended for you </h1>
        <p>pick the best fit</p>
        <div class="recommended__container">
            <div class="course--card">
                <img src={a}></img>

                <h3>2023 python dataScience MasterClass</h3>
                <p>Bavans dev</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course--card">
                <img src={d}></img>

                <h3>Basic to Advance Programming with EMC</h3>
                <p>pugaleeshwarn</p>
                <p>3.9⭐⭐⭐</p>
                <p>799 <del>1499</del></p>
            </div>
            <div class="course--card">
                <img src={b}></img>

                <h3>Web Development BootCamp 2023</h3>
                <p>Gokula Krish</p>
                <p>3.7⭐⭐⭐</p>
                <p>999<del>1999</del></p>
            </div>
            <div class="course--card">
                <img src={c}></img>

                <h3> MasterClass UI/UX Desisgning With Figma</h3>
                <p>yuki barath</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
        </div>
    </div>

   
    )

}
export default Recommended