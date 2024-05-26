const contact=()=>{
    return(
        <>
           <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>Contact us</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
        <section className="why_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="full">
          <form action="index.html">
            <fieldset>
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                required=""
              />
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                required=""
              />
              <input
                type="text"
                placeholder="Enter subject"
                name="subject"
                required=""
              />
              <textarea
                placeholder="Enter your message"
                required=""
                defaultValue={""}
              />
              <input type="submit" defaultValue="Submit" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default contact;