import Image from "next/image";
import "./style.css";

const TryNow = () => {
  return (
    <section className="section-normal overflow-hidden">
        <div className="bg-cta">
          <img
            src="https://assets-global.website-files.com/635c4eeb78332f7971255095/6513e01d8db38482a7f26a92_CTA(3).webp"
            loading="lazy"
            sizes="100vw"
            alt="Gradient Blue Light Background"
            className="image-full-contain"
          />
        </div>
        <div className="content-cta">
          <div className="wrapper-section width-100pc">
            <div className="content-cta-main">
              <div className="head-section">
                <div className="title-section-footer">
                  <h3 className="heading-style-h3 is-rtl-center-mb">
                    Build better with Botpress
                  </h3>
                </div>
                <div className="description-section-main margin-top-5px">
                  <p className="paragraph-x-large weight-500 is-rtl-center-mb">
                    Get started today - its free!
                  </p>
                </div>
              </div>
              <div className="box-get-started left">
                <div className="head-get-started">
                  <a
                    href="https://sso.botpress.cloud/registration"
                    className="button-primary-old button-cta-1 w-inline-block"
                  >
                    <div>Start Building Now</div>
                    <div className="box-rotate-rtl">
                      <div className="arrow-primary"></div>
                    </div>
                  </a>
                </div>
                <div className="botton-section margin-top-5px">
                  <p className="paragraph-small-main color-gray-2">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://assets-global.website-files.com/635c4eeb78332f7971255095/657783e439db29819f44192f_patter-botpress%202.svg"
            loading="eager"
            width="700"
            alt=""
            className="image-bg-cta"
          />
        </div>
    </section>
  );
};

export default TryNow;
