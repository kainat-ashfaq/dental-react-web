 function Appointment() {

return(
    <>
    <div className="appointmnet-sec">
    <h1>Request Appointments</h1>
    <div className="inp-div">
    <input type="text" placeholder="name" />
    <input type="email" name="" id="" placeholder="email" />
    </div>
    <div className="inp-div">
        <input type="phone" name="" id="" placeholder="Phone" />
        <input type="text" name="" id="" placeholder="Subject" />
    </div>
    <textarea name="" rows={9}  placeholder="Message" id=""></textarea>
    <button className="submit-btn">
        Send Message
    </button>
    </div>

    <div className="gallery-sec">
        <h1>our Gallery</h1>
        <div className="shapes-img">
                <img src="img/plus.png" alt="" className="treatment-shape" />
                <img src="img/empty circle.png" alt="" className="treatment-shape" />
                <img src="img/blue circle.png" alt="" className="treatment-shape" />
                <img src="img/plus.png" alt="" className="treatment-shape" />
            </div>
            <div className="shapes-img">
    <img src="img/pink plus.png" alt="" className="treatment-shape-2"/>
    <img src="img/empty circle.png" alt="" className="treatment-shape-2" />
    <img src="img/blue circle.png" alt="" className="treatment-shape-2" />
    <img src="img/plus.png" alt="" className="treatment-shape-2" />
    <img src="img/fill circle.png" alt="" className="treatment-shape-2" />
    
</div>
        <div className="gallerysec-1">
            <div>
                <img src="img/gallery1.jpg" alt="" />
            </div>
            <div>
            <img src="img/gallery2.jpg" alt="" />

            </div>
            <div>
            <img src="img/gallery3.jpg" alt="" />

            </div>
        </div>
        <div className="gallerysec-2">
            
            <div>
            <img src="img/gallery4.jpg" alt="" />

            </div>
            <div>
            <img src="img/gallery5.jpg" alt="" />

            </div>
        </div>
        
    </div>

<h1 className="testi">Testimonials</h1>
<div className="shapes-img">
                <img src="img/plus.png" alt="" className="treatment-shape" />
                <img src="img/empty circle.png" alt="" className="treatment-shape" />
                <img src="img/blue circle.png" alt="" className="treatment-shape" />
            </div>
            <div className="shapes-img">
    <img src="img/pink plus.png" alt="" className="treatment-shape-2"/>
    <img src="img/blue circle.png" alt="" className="treatment-shape-2" />
    
</div>
         <div className="testimonial-sec">
              <div className="testi-card">
                        <div className="tes-img">
                        <img src="img/testi.png" alt="" />
                        </div>
                        <h1>Aliceano Colby</h1>
                        <p>CEO of Prime IT</p>
                        <button className="underline"></button>
                        
                    </div>
                    <div className="testi-content">
                    <h3>Awesome Work</h3>
                    <p>
                    “They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met and I walked out pain free.”</p>
                    </div>
              </div>
    </>
)


    
 }
export default Appointment