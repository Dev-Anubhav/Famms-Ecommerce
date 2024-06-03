import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Redux/productslice";
import { addCart } from "../Redux/cartslice";

const products = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  const status = useSelector((state)=>state.products.status);
  const[page,setPage]=useState(1);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handlepage=(i)=>{
    if(i>=1 && i<=product.length/10){
      setPage(i)
    }
  }
 
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            {
              product.slice(page * 10 - 10 , page * 10).map((item,i)=>{
                return(
                  <div className="col-sm-6 col-md-4 col-lg-4" key={i}>
                  <div className="box">
                    <div className="option_container">
                      <div className="options">
                        <a className="option1" onClick={()=>dispatch(addCart(item))}>
                          Add to Cart
                        </a>
                        <a href="" className="option2">
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="img-box">
                      <img src={item.images[0]} loading="lazy" alt={item.title} />
                    </div>
                    <div className="detail-box">
                      <h5 id="text-elip">{item.title}</h5>
                      <h6 className="text-danger">${item.price}</h6>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
          <div aria-label="Page navigation example" className="mt-5">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className="page-link"  aria-label="Previous" onClick={()=>handlepage(page-1)}>
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    {
      [...Array(product.length / 10)].map((_,i)=>{
        return   <li className="page-item" key={i}>
        <a className={`page-link ${page === i + 1 ? 'bg-danger' : ''}`} onClick={()=>handlepage(i+1)}>
          {i+1}
        </a>
      </li>
      })
    }
    <li className="page-item">
      <a className="page-link" aria-label="Next" onClick={()=>handlepage(page+1)}>
        <span aria-hidden="true">»</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</div>


        </div>
      </section>
    </>
  )
}
export default products;