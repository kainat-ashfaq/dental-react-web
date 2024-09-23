

function Cards() {
let CardDetails = [
    {
        Heading:"Easy Appointment",
        text:"Lorem Ipsum is simply is very dummy text of the printings and type setting",
        img : "img/card-1.svg"
    },
    {
        Heading:"Emergency Service",
        text:"Get our text demo is simply dummy text of the printings and type for content",
        img : "img/card-2.svg"

    },
    {
      Heading:"24/7 Service",
      text:"Lorem Ipsum is demo simply dummy text of the printings and type and setting",
      img : "img/card-3.svg"

    }
]


    return(
        <>
<div className="section-three">
<div className="card-sec">
    {
CardDetails.map((details,index) => (
  <div className="card-bitcoin">
    <img src={details.img} alt="" />
  <h3>{details.Heading}</h3>
  <p>{details.text}</p>
  </div>


))

    }
  
 
</div>
</div>
 {/* familyysec */}
 <div className="shapes-img">
 <img src="img/blue circle.png" alt="" className="family-shape family-ball1" /> 
 {/* <img src="img/fill circle.png" alt="" className="family-shape family-ball2" />  */}
 <img src="img/empty circle.png" alt="" className="family-shape family-ball3" />
 </div>
 <div className="family-main">
    <div className="sec1">
    <img src="img/familysec-2.png" alt="" />
        <img src="img/familysec-1.png" alt="" />

    </div>
    <div className="sec-2">
        <h1>Welcome to a Family</h1>
        <p>
        Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing.
        </p>
        <button className="about"> About Us </button>
        <div className="funfact">
            <div className="funfact1">
                
               <div>
                <span className="num">500+</span>
                <p>Happy Patients</p>
                </div>
                <div>
                <span className="num">88+</span>
                <p>Qualified Doctors</p>
                </div>
                </div>
                <div className="funfact-div2">
                    <div>
                <span className="num">25+</span>
                <p>Years Experience</p>
                </div>
                <div>
                <span className="num">55+</span>
                <p>Dental Awards</p>
                </div>
                </div>
            
        </div>
        <div className="shapes-img">
 <img src="img/fill circle.png" alt="" className="family-shape family-ball2" /> 

 </div>
    </div>
 {/* <div className="shapes-img">
 <img src="img/fill circle.png" alt="" className="family-shape family-ball2" /> 

 </div> */}
 </div>
</>
    )
}
export default Cards