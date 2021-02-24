import React from "react";
import Shop from "./Shop";
import image1 from "./images/secondpass.jpg";
import image2 from "./images/welcome.jpg";
import image3 from "./images/patriotic.jpg";
import image4 from "./images/buck.jpg";
import image5 from "./images/doe.jpg";
import image6 from "./images/sunflower.jpg";

function Home() {
  return (
     <div className="shop">
     <div className="shop__item">
          <Shop
            id="0"
            title="Patriotic Doves"
            description="The stars and strips sparkle."
            price={50}
            image={ image1
              
            }
         alt="1" />
         </div>
         <div className="shop_item">
          <Shop
            id="1"
            title="Welcome"
            description= "A wreath sending a warm and welcoming message"
            price={50}
            image= { image2 }
          />
   </div>
          <Shop
            id="3"
            title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery - Mystic Silver (US Version)"
            price={50}
            image= { image3 }
             />
          <Shop
            id="4"
            title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
            price={50}
            image= { image4 }
          />
          <Shop
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={50}
            image= { image5 }
          />

          <Shop
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={50}
            image= { image6 }
            />
            </div>
  );
}

export default Home;
