import { useSelector, useDispatch } from "react-redux";
import { Increase, Decrease, removeCart } from "../Redux/cartslice";
const cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    let total=0;
    let length=0
    for(let row of cart){
        length+=row.q;
        total+=row.q*row.price
        
    }

    return (
        <>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <p>
                                <span className="h2">Shopping Cart </span>
                                <span className="h4">{length}</span>
                            </p>
                            {
                                cart.map((item, i) => {
                                    return (
                                        <div className="card mb-4" key={i}>
                                            <div className="card-body p-4">
                                                <div className="row align-items-center">
                                                    <div className="col-md-2">
                                                        <img
                                                            src={item.images[0]}
                                                            className="img-fluid"
                                                            alt="Generic placeholder image"
                                                        />
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-4 pb-2">Name</p>
                                                            <p className="lead fw-normal mb-0">{item.title}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                                                            <p className="lead fw-normal mb-0 d-flex align-items-center">
                                                                <span className="btn btn-outline-secondary btn-sm me-2 mr-2" onClick={()=>dispatch(Decrease(item))}>-</span>
                                                                {item.q}
                                                                <span className="btn btn-outline-secondary btn-sm ms-2 ml-2" onClick={()=>dispatch(Increase(item))}>+</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-4 pb-2">Price</p>
                                                            <p className="lead fw-normal mb-0">${item.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <button className="border-0 bg-white" onClick={() => dispatch(removeCart(item))}>X</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="card mb-5">
                                <div className="card-body p-4">
                                    <div className="float-end">
                                        <p className="mb-0 me-5 d-flex align-items-center">
                                            <span className="small text-muted me-2">Order total:</span>{" "}
                                            <span className="lead fw-normal"> ${total}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default cart;