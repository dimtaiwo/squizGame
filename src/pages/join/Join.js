import Particles from "react-particles-js";
import particlesConfig from "../../config/particlesConfig";

import "./Join.css";

export default function Join() {

    console.log(particlesConfig);

    return (
        <div className="Join">
            <Particles className="particles" height="100vh" params={particlesConfig} />
        </div>
    );
};


// JUST  A FORM TO REDIRECT TO gameRoom with the specific ID