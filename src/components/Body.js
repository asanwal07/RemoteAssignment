
import Scroll from "./Scroll";
import Content from "./Content";

const Body = () => {

      return (
            <>
                  <div className="Main-Container">
                        <div className="Scroll-Container"><Scroll /></div>

                        <div className="Content-Container"><Content></Content></div>
                  </div>

            </>
      )
}

export default Body;