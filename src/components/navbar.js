function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#000000",}}></i>
            <input placeholder="Search for anything here Thech, Bussiness, Art...."></input>
        </div>
        <div class="navbar__s3">
            <p>Courses</p>
            
             <div class="Mylearning">
                <p>Mylearning</p>
                <div class="Mylearning__popup">
                    <p>You did not Purchase anything Yet</p>
                </div>
               
             </div>
            <i class="fa-solid fa-cart-shopping" style={{color: "#00040a",}}></i>
            <i class="fa-solid fa-bell" style={{color: "#010813",}}></i>
            <i class="fa-solid fa-user" style={{color: "#00060f",}}></i>

        </div>
        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>

        </div>

    </div>

    )
}
export default Navbar