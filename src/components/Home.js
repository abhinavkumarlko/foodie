import React from "react";
import r4 from "../images/r4.jpg";
import iphone from "../images/iphone.png";
import googleplay from "../images/googleplay.png";
import appstore from "../images/appstore.png";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div
        className="p-5 text-center bg-image "
        style={{
          height: "400px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <img src={r4} alt="img" className="img-radius" />
              <h2 className="my-3">Behrouz Biryani (South Extention)</h2>
              <p className="my-2 fs-2">Biryani</p>
              <span className="text-white-50 ">
                {" "}
                <i className="fas fa-star m-1 yellow"></i>
                <i className="fas fa-star m-1 yellow"></i>
                <i className="fas fa-star m-1 yellow"></i>
                <i className="fas fa-star m-1 yellow"></i>
                <i className="fas fa-star m-1 yellow"></i>(2.3)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white-50 p-3  d-flex justify-content-center align-items-center">
        <p className="my-2">
          Behrouz Biryani (South Extention) can deliver to you at Lajpat nagar{" "}
          <button className="btn btn-outline-success ">
            <i className="fa-solid fa-location-dot me-2"></i> Change Location
          </button>
        </p>
      </div>
      <div className="container my-5 py-4">
        <div className="row ">
          <div className="col-md-8  px-5">
            <ul className="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
              <li className="nav-item nv" role="presentation">
                <a
                  className="nav-link fs-5 "
                  id="ex2-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex2-tabs-1"
                  role="tab"
                  aria-controls="ex2-tabs-1"
                  aria-selected="false"
                >
                  MENU
                </a>
              </li>
              <li className="nav-item nv" role="presentation">
                <a
                  className="nav-link fs-5 active"
                  id="ex2-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex2-tabs-2"
                  role="tab"
                  aria-controls="ex2-tabs-2"
                  aria-selected="true"
                >
                  REVEIWS
                </a>
              </li>
              <li className="nav-item nv" role="presentation">
                <a
                  className="nav-link fs-5"
                  id="ex2-tab-3"
                  data-mdb-toggle="tab"
                  href="#ex2-tabs-3"
                  role="tab"
                  aria-controls="ex2-tabs-3"
                  aria-selected="false"
                >
                  INFO
                </a>
              </li>
            </ul>

            <div className="tab-content" id="ex2-content">
              <div
                className="tab-pane fade"
                id="ex2-tabs-1"
                role="tabpanel"
                aria-labelledby="ex2-tab-1"
              >
                Menu Details
              </div>
              <div
                className="tab-pane fade  show active"
                id="ex2-tabs-2"
                role="tabpanel"
                aria-labelledby="ex2-tab-2"
              >
                <h1 className="pt-4 pb-2 ">Reviews</h1>
                <hr />
                <div className="my-4">
                  <img
                    src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/02/shutterstock_478515523.jpg.webp"
                    className="po-img me-5 float-start"
                  />

                  <span className="fw-bold">Manish C</span>
                  <span>- Jun 24, 2018</span>
                  <p className="">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus reiciendis alias asperiores molestiae veniam nihil
                    dolore quaerat libero voluptatibus, officia, ut ea deserunt
                    itaque debit.
                  </p>
                  <span>
                    {" "}
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                  </span>
                </div>

                <hr />
                <div className="my-4">
                  <img
                    src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/02/shutterstock_478515523.jpg.webp"
                    className="po-img me-5 float-start"
                  />

                  <span className="fw-bold">Mark Grima</span>
                  <span>- Nov 24, 2018</span>
                  <p className="">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus reiciendis alias asperiores molestiae veniam nihil
                    dolore quaerat libero voluptatibus, officia, ut ea deserunt
                    itaque debit.
                  </p>
                  <span>
                    {" "}
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                  </span>
                </div>

                <hr />
                <div className="my-4">
                  <img
                    src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/02/shutterstock_478515523.jpg.webp"
                    className="po-img me-5 float-start"
                  />

                  <span className="fw-bold">Sr_Guess</span>
                  <span>- Jun 10, 2018</span>
                  <p className="">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus reiciendis alias asperiores molestiae veniam nihil
                    dolore quaerat libero voluptatibus, officia, ut ea deserunt
                    itaque debit.
                  </p>
                  <span>
                    {" "}
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                  </span>
                </div>
                <hr />
                <div className="my-4">
                  <img
                    src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/02/shutterstock_478515523.jpg.webp"
                    className="po-img me-5 float-start"
                  />

                  <span className="fw-bold">Sarah Natan</span>
                  <span>- Jul 26, 2018</span>
                  <p className="">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus reiciendis alias asperiores molestiae veniam nihil
                    dolore quaerat libero voluptatibus, officia, ut ea deserunt
                    itaque debit.
                  </p>
                  <span>
                    {" "}
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                    <i className="fas fa-star m-1 yellow"></i>
                  </span>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ex2-tabs-3"
                role="tabpanel"
                aria-labelledby="ex2-tab-3"
              >
                Info Details
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5 ">
            <div className="card ">
              <div className="card-header py-4 fs-3 text-center">
                Your Order
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 ">Aenean volutpat purus magna</div>
                  <div className="col-md-4">
                    1 x <span className="fw-bold">$20.00</span>
                  </div>
                  <div className="col-md-2">
                    <span>
                      <i className="fa-solid fa-trash-can red"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 ">Aenean volutpat purus magna</div>
                  <div className="col-md-4">
                    2 x <span className="fw-bold">$32.00</span>
                  </div>
                  <div className="col-md-2">
                    <span>
                      <i className="fa-solid fa-trash-can red"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8 ">
                    <small>Subtotal</small>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <small className="text-center fw-bold">$52.00</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8 ">
                    <small>Delivery fee</small>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <small className="text-center fw-bold">$10.00</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 ">
                    <small>VAT(13%)</small>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <small className="text-center fw-bold">$4.73</small>
                  </div>
                </div>
              </div>
              <div className="card-body bg-grey">
                <div className="row">
                  <div className="col-md-8 ">
                    <span className="fs-4 fw-bold">Total</span>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <span className="fs-4 fw-bold">$66.00</span>
                  </div>
                </div>
              </div>

              <div className="card-footer btn btn-warning   fs-5 fw-bold">
                {" "}
                Proceed to Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  px-0 ">
        <div
          className=" text-center img-fluid bg-image   "
          style={{
            height: "600px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="d-flex justify-content-center align-items-center m-4 p-4 h-100">
              <div className="text-white">
                <img
                  src={iphone}
                  alt="img"
                  className="float-start img-fluid img"
                  style={{
                    width: "15%",
                  }}
                />
                <h2 className="green fw-bold text-center mt-5">
                  Download the App{" "}
                </h2>
                <p className="fs-5 text-left m-4 ">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  esse repellendus laboriosam voluptatum similique doloribus qui
                  numquam neque natus eius assumenda accusamus quibusdam
                  recusandae optio ipsa, cumque officia necessitatibus possimus,
                  distinctio error. Consequuntur facere laudantium tenetur
                  officiis accusamus nisi maxime dolorum enim, facilis
                  blanditiis nemo. Repudiandae impedit distinctio labore totam.
                </p>
                <div className="">
                  <img className="store-btn1" src={googleplay} alt="gplay" />
                  <img className="store-btn2" src={appstore} alt="appstore" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-grey pb-5">
        <div className="d-flex justify-content-center align-item-center">
          <p className="fs-1 m-5 pt-4">Keep in touch, join our newsletter</p>
        </div>
        <div className="input-group pb-5 mx-auto input-size ">
          <input
            type="email"
            className="form-control p-4 bg-darkgrey"
            placeholder="Enter your email id"
            aria-label="Enter your email id"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-success fs-5"
            type="submit"
            id="button-addon2"
            data-mdb-ripple-color="dark"
          >
            Submit
          </button>
        </div>
      </div>

      <footer className="text-center text-lg-start bg-light text-muted ">
        <section className="py-4 bg-dark ">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">
                  About Us
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat voluptate expedita aliquam labore, exercitationem
                  impedit, delectus minima cumque deleniti, quas nostrum dolore?
                  Modi alias ipsa numquam, expedita eum voluptate veniam!
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">
                  About Us
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">
                  Help & Support
                </h6>
                <p>
                FAQ
                </p>
                <p>  
                Term & Conditions
                </p>
                <p>
                  Policy and Privacy
                </p>
                <p>
                Customer Care
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">
                  Social
                </h6>
                <p>
                <i className="fab fa-facebook-f white pill-radius" aria-controls="#picker-editor"></i>
                </p>
                <p>
                <i className="fab fa-twitter white pill-radius" aria-controls="#picker-editor"></i>
                  
                </p>
                <p>
                <i className="fab fa-pinterest white pill-radius" aria-controls="#picker-editor"></i>
                </p>
                <p>
                <i className="fab fa-instagram white pill-radius" aria-controls="#picker-editor"></i>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-light p-5 fs-6 bg-black">
          © 2018-2019 Kin Kao, Inc. All RIGHT RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default Home;
