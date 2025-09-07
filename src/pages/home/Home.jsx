import React, { useEffect, useState } from "react";
import { Success_modal, Failed_modal } from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import NavBar from "../../components/navBar/NavBar";
import Hero from "../../components/hero/Hero";
import BottomBar from "../../components/bottomBar/BottomBar";
import styles from "../home/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cylinder_icon from "../../assets/icons/cylinder_icon.png";
import location_icon from "../../assets/icons/location_icon.png";
import atm_card_icon from "../../assets/icons/card_icon.png";
import delivery_vehicle_icon from "../../assets/icons/delivery_car_icon.png";
import checked_icon from "../../assets/icons/checked_icon.png";
import male_icon from "../../assets/icons/male_icon.webp";
import female_icon from "../../assets/icons/female_icon.webp";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import next_icon from "../../assets/icons/next_icon.png";
import previous_icon from "../../assets/icons/previous_icon.png";
import map_img from "../../assets/images/map_img.webp";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import cylinder_pic from "../../assets/images/cylinder_3kg_.png";
import cylinder_images from "../../utils/cylinder_image";
import customerReviews, { StarRating } from "../../utils/reviews";

console.log(cylinder_images);
function Home() {
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState("");

  const [reviewIndex, setReviewIndex] = useState(0);

  const reviewToDisplay = customerReviews[reviewIndex];

  const handleNext = () => {
    setReviewIndex((prevValue) => {
      return prevValue === customerReviews.length - 1 ? 0 : prevValue + 1;
    });
  };

  const handlePrev = () => {
    setReviewIndex((prevValue) => {
      return prevValue === 0 ? customerReviews.length - 1 : prevValue - 1;
    });
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleNext();
  //   }, 6000);
  //   return ()=> clearTimeout();
  // }, [reviewIndex]);

  return (
    <div className={styles.parent_wrapper}>
      <NavBar />
      <Hero />
      <div className={styles.wrapper}>
        <section className={styles.sec_00}>
          <h3>Welcome to Arike Gas, </h3>
          Your trusted partner for safe, quick, and affordable gas delivery.
          Whether at home or work, we bring quality cooking gas straight to your
          doorstep, saving you time and stress. We serve homes and businesses
          across Ilorin Kwrara State, with a strong focus on safety, customer
          satisfaction, and timely service. No more long queues or running out
          of gas, just fast delivery when you need it. <br />
          <strong>
            <i> Order with ease. Cook with confidence.</i>
          </strong>
        </section>
        <section className={styles.sec_01}>
          <h3>Gas Cylinder Sizes & Prices</h3>

          <article>
            <div>
              <img src={cylinder_pic} alt="" />

              <b>3kg Cylinder</b>
              <p>From ₦12,000</p>
              <Button
                children={"Order Now"}
                onClick={() => {
                  navigate("/checkout");
                }}
              />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>5kg Cylinder</b>
              <p>From ₦18,000</p>
              <Button children={"Order Now"} />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>10kg Cylinder</b>
              <p>From ₦23,000</p>
              <Button children={"Order Now"} />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>12kg Cylinder</b>
              <p>From ₦27,000</p>
              <Button children={"Order Now"} />
            </div>
          </article>
          <section className={styles.sec_02}>
            <button>View More Sizes & Prices</button>
          </section>
        </section>

        <section className={styles.sec_03}>
          <h3>How It Works</h3>

          <article>
            <div>
              <img src={cylinder_icon} alt="" />
            </div>
            <b>1. Choose Size</b>
            <p>Select the cylinder size you need</p>
          </article>

          <article>
            <div>
              <img src={location_icon} alt="" />
            </div>
            <b>2. Enter Address</b>
            <p>Provide your delivery details</p>
          </article>

          <article>
            <div>
              <img src={atm_card_icon} alt="" />
            </div>
            <b>3. Pay Securely</b>
            <p>Pay online or on delivery</p>
          </article>

          <article>
            <div>
              <img src={delivery_vehicle_icon} alt="" />
            </div>
            <b>4. Get Delivered</b>
            <p>Received your gas within 30-40 mins</p>
          </article>
        </section>

        <section className={styles.sec_04}>
          <h3>Why Choose Us</h3>

          <article>
            <img src={checked_icon} alt="" />
            <div>
              <b>Fast Delivery</b>
              <p>Guaranteed delivery within 30 minutes in supported areas</p>
            </div>
          </article>

          <article>
            <img src={checked_icon} alt="" />
            <div>
              <b>Safe & Verify Cylinders</b>
              <p>We provide only certified and safe-to-use gas cylinder</p>
            </div>
          </article>

          <article>
            <img src={checked_icon} alt="" />
            <div>
              <b>Multiple Payment Options</b>
              <p>
                Pay with your card, USSD, bank transfer, or cash on delivery
              </p>
            </div>
          </article>

          <article>
            <img src={checked_icon} alt="" />
            <div>
              <b>Refill or Exchange</b>
              <p>
                Easily refill your existing cylinder or exchange it for a new
                one.
              </p>
            </div>
          </article>

          <article>
            <img src={checked_icon} alt="" />
            <div>
              <b>Local Coverage</b>
              <p>
                We deliver across Ilorin and its surrounding local government
                areas.
              </p>
            </div>
          </article>
        </section>

        <section className={styles.sec_05}>
          <h3>What Our Customer Say</h3>
          <article>
            <img src={reviewToDisplay.gender === "Male"?male_icon:female_icon} alt="" />
            <b>{reviewToDisplay.name}</b>
            <div>
              <StarRating rating={reviewToDisplay.rating} />
            </div>

            <q>{reviewToDisplay.review}</q>

            <button className={styles.prev_} onClick={handlePrev}>
              <img src={previous_icon} alt="" />
            </button>
            <button className={styles.next_} onClick={handleNext}>
              <img src={next_icon} alt="" />
            </button>
          </article>
        </section>

        <section id="sec_06" className={styles.sec_06}>
          <h3>Our Delivery Area</h3>
          <p>
            We proud to offer fast and reliable gas delivery to all location
            within Ilorin, Kwara State
          </p>
          <img src={map_img} alt="" />
        </section>

        <section id="sec_07" className={styles.sec_07}>
          <h3>Frequently Asked Questions (FQA)</h3>

          <article>
            <div>
              <h5>
                Can I pay on delivery ?{" "}
                {showAnswer === "question_01" ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="brown"
                    onClick={() => {
                      setShowAnswer("");
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={() => {
                      setShowAnswer("question_01");
                    }}
                  />
                )}
              </h5>
              {showAnswer === "question_01" ? (
                <p>
                  Yes, you can! We accept payment on delivery for your
                  convenience. Simply choose "Pay on Delivery" at checkout and
                  settle with our delivery agent.
                </p>
              ) : null}
            </div>
            <div>
              <h5>
                Do you offer cylinder exchange?{" "}
                {showAnswer === "question_02" ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="brown"
                    onClick={() => {
                      setShowAnswer("");
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={() => {
                      setShowAnswer("question_02");
                    }}
                  />
                )}
              </h5>
              {showAnswer === "question_02" ? (
                <p>
                  Absolutely. If you have an empty gas cylinder, you can
                  exchange it for a filled one. Just bring it to our exchange
                  point or hand it over during delivery.
                </p>
              ) : null}
            </div>
            <div>
              <h5>
                What are your delivery time and fees ?{" "}
                {showAnswer === "question_03" ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="brown"
                    onClick={() => {
                      setShowAnswer("");
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={() => {
                      setShowAnswer("question_03");
                    }}
                  />
                )}
              </h5>
              {showAnswer === "question_03" ? (
                <p>
                  We offer same-day delivery for most orders. Delivery times are
                  usually between 8 AM and 6 PM. Delivery fees vary by location
                  and will be shown at checkout.
                </p>
              ) : null}
            </div>

            <div>
              <h5>
                How do I contact customer support?{" "}
                {showAnswer === "question_04" ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="brown"
                    onClick={() => {
                      setShowAnswer("");
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={() => {
                      setShowAnswer("question_04");
                    }}
                  />
                )}
              </h5>
              {showAnswer === "question_04" ? (
                <p>
                  You can reach us via phone, WhatsApp, or email. Visit our
                  Contact Us page for details, or use the chat option on the
                  website for quick help.
                </p>
              ) : null}
            </div>

            <div>
              <h5>
                What if I don't have cylinder?{" "}
                {showAnswer === "question_05" ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="brown"
                    onClick={() => {
                      setShowAnswer("");
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={() => {
                      setShowAnswer("question_05");
                    }}
                  />
                )}
              </h5>
              {showAnswer === "question_05" ? (
                <p>
                  No worries! You can order a new cylinder along with your gas.
                  Just select the cylinder size you need, and we’ll deliver it
                  to your doorstep.
                </p>
              ) : null}
            </div>
          </article>
        </section>
      </div>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Home;
