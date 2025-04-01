import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="">
          <div class="main">
            <div class="dog">
              <div class="dog__paws">
                <div class="dog__bl-leg leg">
                  <div class="dog__bl-paw paw"></div>
                  <div class="dog__bl-top top"></div>
                </div>
                <div class="dog__fl-leg leg">
                  <div class="dog__fl-paw paw"></div>
                  <div class="dog__fl-top top"></div>
                </div>
                <div class="dog__fr-leg leg">
                  <div class="dog__fr-paw paw"></div>
                  <div class="dog__fr-top top"></div>
                </div>
              </div>

              <div class="dog__body">
                <div class="dog__tail"></div>
              </div>

              <div class="dog__head">
                <div class="dog__snout">
                  <div class="dog__eyes">
                    <div class="dog__eye-l"></div>
                    <div class="dog__eye-r"></div>
                  </div>
                </div>
              </div>

              <div class="dog__head-c">
                <div class="dog__ear-r"></div>
                <div class="dog__ear-l"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 -mt-4">404</h1>

        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-[#887011] hover:text-[#1f1a05] underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
