import navbar from "./navbar.js";
import hero from "./hero.js";

function apps(){
    return React.createElement('div', {id: 'container'}, [navbar(), hero()]);
}

export default apps;