import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/button/Button";
import styles from "../career/career.module.scss";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
function Career() {
  const [showUploadFile, setShowUploadFile] = useState(false);
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar children={"Job Vacancies"} />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <h3>Join the Arike Team</h3>
          <p>
            At Arike Oil and Gas, we're committed to excellence and innovation
            in the energy sector. We value our employees and offer a dynamic
            work environment with opportunities for growth and development.
            Explore our current openings and find your place in our team{" "}
          </p>
        </section>

        <section className={styles.sec_02}>
          <h3>Current Openings</h3>

          <article>
            <b>Sales Representatives</b>

            <div>
              <p>
                3+ years of experience in sales, strong communication skills,
                ability to meet target.
                <aside>
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} /> Ibadan
                  </div>
                  <button
                    onClick={() => {
                      setShowUploadFile(true);
                    }}
                  >
                    Apply
                  </button>
                </aside>
              </p>
            </div>
          </article>

          <article>
            <b>Project Manager</b>

            <div>
              <p>
                3+ years of experience in sales, strong communication skills,
                ability to meet target.
                <aside>
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} /> Ibadan
                  </div>
                  <button
                    onClick={() => {
                      setShowUploadFile(true);
                    }}
                  >
                    Apply
                  </button>
                </aside>
              </p>
            </div>
          </article>

          <article>
            <b>Logistics Coordinator</b>

            <div>
              <p>
                3+ years of experience in sales, strong communication skills,
                ability to meet target.
                <aside>
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} /> Ibadan
                  </div>
                  <button
                    onClick={() => {
                      setShowUploadFile(true);
                    }}
                  >
                    Apply
                  </button>
                </aside>
              </p>
            </div>
          </article>

          <span>No More Jobs</span>
        </section>

        {showUploadFile && (
          <section className={styles.sec_03}>
            <div>
              <h3>Upload Your CV</h3>
              <input type="file" />
              <Button children={"Submit CV"} />
              <span onClick={()=>{setShowUploadFile(false)}}>
                <FontAwesomeIcon icon={faXmark} color="red" />
              </span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Career;
