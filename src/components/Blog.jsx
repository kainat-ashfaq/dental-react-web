
function  Blog(){
    const BlogDetails = [

        {
            src:"img/blog1.jpg",
            heading:"Maximize Your 2019 Dental Insurance with lots of Benefits",
            post:"Salman",
            date:"12 Oct, 2019"
        },
        {
            src:"img/blog2.jpg",
            heading:"Are Your Teeth Making You Old? Are You Surprised!",
            post:"  Admin",
            date:"14 Oct, 2019"
        },
        {
            src:"img/blog3.jpg",
            heading:"Dental Implants: The Next Best Thing to Get Natural Teeth",
            post:"Salman",
            date:"10 Jan, 2019"
        },

    ]
return(
    <>

    <h1 className="blog">Latest Blog</h1>
    <div className="blog-sec">
{
    BlogDetails.map((detail,index)=>(

        <div className="blog-card">
            <div className="blog-img">
                <img src={detail.src} alt="" />
            </div>
            <div className="blog-content">
                <h3>{detail.heading}</h3>
                <div className="b-underline"></div>
                <div className="post-date">
                    <div className="post">Post by: {detail.post}</div>
                    <div className="date">{detail.date}</div>
                </div>
            </div>
        </div>

    ))
}
    </div>
    
    </>
)
}
export default Blog