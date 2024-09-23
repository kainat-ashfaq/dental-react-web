function Treatment(){
    const treatmentCard = [
        {
            src:"img/treatment1.svg",
            heading:"Complete Dentistry",
            para:"Lorem Ipsum is simply dummy text of the printings and type and setting for content",
            btn:"Read More"
        },
        {
            src:"img/treatment2.svg",
            heading:"Dental Selants",
            para:"Lorem Ipsum is simply dummy text of the printings and type and setting for content",
            btn:"Read More"
        },
        {
            src:"img/treatment3.svg",
            heading:"Dental Dictionary",
            para:"Lorem Ipsum is simply dummy text of the printings and type and setting for content",
            btn:"Read More"
        },
    ]
    const treatmentCard2 =[

        {
            src:"img/treatment4.svg",
            heading:"Dental Implants",
            para:"Lorem Ipsum is simply dummy text of the printings and type and setting for content",
            btn:"Read More"
        },
        {
            src:"img/treatment5.svg",
            heading:"Oral Surgery",
            para:"Lorem Ipsum is simply dummy text of the printings and type and setting for content",
            btn:"Read More"
        },
        {
            src:"img/treatment6.svg",
            heading:"General Dentistry",
            para:"Lorem Ipsum is simply dummy text of the printings and type and setting for content",
            btn:"Read More"
        },
    ]
    return(
        <>
        <div className="treatment-section">
            <h1>Treatments</h1>
            <div className="treatment-cards-sec">
                {
           treatmentCard.map((detail,index)=>(
            <div className="treatment-card">
            <img src={detail.src} alt="" />
            <h2>{detail.heading}</h2>
            <p>{detail.para}</p>
            <button>{detail.btn}</button>
            </div>
           ))                        
}
            </div>


            <div className="treatment-cards-sec">
                {
           treatmentCard2.map((detail,index)=>(
            <div className="treatment-card">
            <img src={detail.src} alt="" />
            <h2>{detail.heading}</h2>
            <p>{detail.para}</p>
            <button>{detail.btn}</button>
            </div>
           ))                        
}
            </div>

        </div>
        </>
    )
}
export default Treatment