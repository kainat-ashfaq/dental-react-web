function Dentist(){
    const dentist = [
        {
            img:"img/den1.png",
            name:"Darry Milin",
            profession:"Oral Surgeon"
        },
        {
            img:"img/den2.png",
            name:"Salman Ahmed",
            profession:"Oral Surgeon"
        },
        {
            img:"img/den3.png",
            name:"Santa Binte",
            profession:"Oral Surgeon"
        },
    ]
    return(
        <>
        <h1 className="dentist-heading" >Our Dentists</h1>
        <div className="dentist-sec">
            {
                dentist.map((details,index)=>(
                    <div className="dentist-card">
                        <div className="den-img">
                        <img src={details.img} alt="" />
                        </div>
                        <h1>{details.name}</h1>
                        <p>{details.profession}</p>
                        <button className="underline"></button>
                        {/* <div className="icons-div">
                        <div className="icons">
                            <div><i class="bi bi-facebook"></i></div>
                            <div><i class="bi bi-twitter"></i></div>
                            <div><i class="bi bi-whatsapp"></i></div>
                            <div><i class="bi bi-linkedin"></i></div>
                        </div>
                        </div> */}
                    </div>
                ))
            }
        </div>
       <div className="den-btn-div"><button className="den-btn">View All Dentists</button></div>
        </>
    )
}
export default Dentist