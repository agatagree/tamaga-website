import { Card } from "../../../utils/Card/Card";

export const Info = () => {
  return (
    <div className="content">
      <div className="info-intro-section">
        <div className="content-grid-margin40">
          <div className="info-intro-wrapper">
            <h1 className="H01--bold">Hi there! We are tamaga*</h1>
            <h3 className="H03">
              *creative office focused on architecture, interior design and art
              installations design based in Poland.
            </h3>
            <h6 className="H06--bold">What we do:</h6>
          </div>
        </div>
      </div>

      <div className="content-grid-margin40">
        <div className="content-half-left-small info-offer-wrapper">
          <h6 className="H06--bold">Interior design</h6>
          <p className="body-text content-half-text">
            Specially crafted for your taste, functional needs and budget
            interior design.<br></br>
            <br></br>
            We specialized in apartment, investment, office and commercial
            interiors.
          </p>
        </div>
        <div className="content-half-right-big info-offer-wrapper--right">
          <Card
            projectId="WSGJOp3kxj24qZhfNuwB"
            path="https://firebasestorage.googleapis.com/v0/b/tamaga-website.appspot.com/o/projects%2Fdzk-2.jpg?alt=media&token=47e12a2e-445d-42c5-9527-889c0cc8ac23"
            title="tamaga interior design"
          />
        </div>

        <div className="content-alternate-mobile">
          <div className="content-half-left-big content-margin-120-40-lg--mobile-reverse">
            <Card
              projectId="af4liLyHHys6DgCD3qLZ"
              path="https://firebasestorage.googleapis.com/v0/b/tamaga-website.appspot.com/o/projects%2Fgor-cover.jpg?alt=media&token=6c1b8b25-495f-4f21-ab16-2049687d1109"
              title="tamaga architecture design"
            />
          </div>
          <div className="content-half-right-small--mobile-reverse">
            <h6 className="H06--bold">Architecture</h6>
            <p className="body-text content-half-text">
              We focuse mainly on the small scale, as single family houses,
              where all details can be thought through and serve to its owner in
              a perfect way.<br></br>
              <br></br>
              Not boring, but classy and with natural twist.
            </p>
          </div>
        </div>

        <div className="content-half-left-small info-offer-wrapper">
          <h6 className="H06--bold">Art installations</h6>
          <p className="body-text content-half-text">
            Good art installations are like fairy tells that pulls observers
            through the most amazing meaningfull travel.<br></br>
            <br></br>
            In he same time they are combination of the perfect balance between
            it's location, observer and the structure, when there’s nothing more
            to either add or take away.
          </p>
        </div>
        <div className="content-half-right-big info-offer-wrapper--right">
          <Card
            projectId="gHd5yVlT4MfdtTBk7w5s"
            path="https://firebasestorage.googleapis.com/v0/b/tamaga-website.appspot.com/o/projects%2Fsor-3.jpg?alt=media&token=d760232d-0edd-484a-840d-ddfee15f8871"
            title="tamaga art installations"
          />
        </div>
      </div>
    </div>
  );
};
