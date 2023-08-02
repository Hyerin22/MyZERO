import React from "react";

import "../styles/HowTo.scss";

// components
import Nav from "../components/Nav";
import RatingProfile from "../components/RatingProfile";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import DisplayPointTxt from "../components/DisplayPointTxt";

// images
import ratingSecond from "../img/rating-second.png";
import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function HowTo() {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-top">
          <RatingProfile ratingImage={ratingSecond} />
          <Profile symbol={vancSymbol} />
        </div>
        <div className="nav">
          <Nav />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      {/* Right side main content */}
      <div className="howto-main">
        <div className="howto-content">
          <div className="howto-steps">
            <p className="howto-title">How to Collect MyZero?</p>
            <ul>
              <li>
                Step 1: Bring Your Own Tumbler or Bowl Whenever you visit a
                participating store to buy coffee or food, remember to bring
                your own tumbler or bowl. By using reusable products, you're
                taking a positive step towards reducing disposable waste and
                earning points.
              </li>
              <li>
                Step 2: Ask the Staff about MyZERO Stamp Politely ask the store
                staff for a MyZERO stamp on your receipt. The MyZERO stamp
                serves as proof that you've used your own tumbler or bowl for
                the purchase. (Stamp is not an actual stamp. It will be printed
                on your receipt. And MyZRRO STRONGLY suggests receiving an{" "}
                <span>E-RECEIPT</span> instead of a paper receipt!){" "}
              </li>
              <li>
                Step 3: Get the Receipt with MyZERO Stamp Once the staff applies
                the MyZERO stamp on your receipt. This stamp will help MyZERO's
                system recognize and validate your reusable purchase.{" "}
              </li>
              <li>
                Step 4: Encourage Your Community for Extra Points Be a community
                champion! Every month, MyZERO picks a city with the highest
                number of collected points. If your city wins, all members from
                the winning city will receive an extra 10% of the points they
                collected that month. Encourage your neighbors, friends, and
                family to join MyZERO, use their reusable products, and help
                your city claim the top spot!{" "}
              </li>
              <li>
                Step 5: Upload Your Receipt and Get the Points Open the MYZERO
                and navigate to the "Collect Points" section. Choose the option
                to upload your receipt. Use the camera to scan or capture your
                e-receipt and upload the receipt with the MyZERO stamp. The
                system will verify the details and award you points for your
                eco-friendly purchase.
              </li>
              <li>
                Step 6: Check the Store and Select Products for Exchange Explore
                the "Rewards" or "Exchange" section within MyZERO. Browse
                through a variety of products or gift cards available for point
                exchange. Select the items you wish to redeem with your earned
                points.{" "}
              </li>
              <li>
                Step 7: Enjoy Your Shopping After selecting your desired items,
                go to a participating store, show your barcode, and collect your
                chosen products or gift cards. Enjoy the satisfaction of knowing
                your eco-conscious choices have led to meaningful rewards!{" "}
              </li>
            </ul>
            <p>
              By following these simple steps and inspiring your community, you
              can contribute to a greener environment, earn extra points, and
              unlock fantastic rewards through MyZERO. Happy eco-friendly
              shopping and good luck in the city competition!
            </p>
          </div>
          <div className="howto-note">
            <p className="note-text">
              *Note* In case system can't process collect point{" "}
            </p>
            <p>
              If the system can't recognize your receipt immediately, please
              wait for a few minutes and try again. In case the issue persists,
              kindly send the receipt by email to our support team along with
              your account number. We'll make sure to resolve the matter
              promptly and credit the points to your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
