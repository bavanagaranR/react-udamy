import sale from "../assets/images/sales-image.jpg"

function Salesimage(){
    return(
        <div class="sales-image">
        <img src={sale} alt="sales-image"></img>
        <div class="sales-image__offer">
            <h2>Udamy Flash Sale! just 24 hours to Save. </h2>
            <p>Get the Top Courses for just 499.just one day to Save But a Lifetime to Learn </p>
        </div>

    </div>

    )
}
export default Salesimage