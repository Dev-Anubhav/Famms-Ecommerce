import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Redux/productslice";
import { addCart } from "../Redux/cartslice";

const products = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  const status = useSelector((state)=>state.products.status);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
 
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
              product.map((item,i)=>{
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
                      <img src={item.images[0]} alt="" />
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

        </div>
      </section>
    </>
  )
}
export default products;