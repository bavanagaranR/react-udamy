import a from "../assets/images/c1.jpg"
import d from "../assets/images/c4.jpg"
import b from "../assets/images/c2.jpg"
import c from "../assets/images/c3.jpg"




function Popular(){
    return(

        <div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__subtitle">Pick up the best fit</p>
        <div class="popular__container">
            <div class="course--card">
                <img src={a} alt="one"></img>

                <h3>2023 python dataScience MasterClass</h3>
                <p>Bavans dev</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course--card">
                <img src={d} alt="two"></img>

                <h3>Basic to Advance Programming with EMC</h3>
                <p>pugaleeshwarn</p>
                <p>3.9⭐⭐⭐</p>
                <p>799 <del>1499</del></p>
            </div>
            <div class="course--card">
                <img src={b} alt="three"></img>

                <h3>Web Development BootCamp 2023</h3>
                <p>Gokula Krish</p>
                <p>3.7⭐⭐⭐</p>
                <p>999<del>1999</del></p>
            </div>
            <div class="course--card">
                <img src={c} alt="thre"></img>

                <h3> MasterClass UI/UX Desisgning With Figma</h3>
                <p>yuki barath</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course--card">
                <img src={a} alt="bu"></img>

                <h3>Full stack Web DEvelopment</h3>
                <p>Ramchandran dev</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course--card">
                <img src={d}></img>

                <h3>Basic to Advance C programming</h3>
                <p>Amish John</p>
                <p>3.9⭐⭐⭐</p>
                <p>799 <del>1499</del></p>
            </div>
            <div class="course--card">
                <img src={b}></img>

                <h3>Java Full Tutorial Master</h3>
                <p>Abdul Kalaam</p>
                <p>3.7⭐⭐⭐</p>
                <p>999<del>1999</del></p>
            </div>
            <div class="course--card">
                <img src={c}></img>

                <h3> DataScience Master Class</h3>
                <p>Albert Einsteen</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>

        </div>

    </div>

    )
}
export default Popular