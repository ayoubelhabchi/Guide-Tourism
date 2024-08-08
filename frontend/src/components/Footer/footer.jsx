import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-primary/75">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block w-full h-16"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white"
        ></path>
      </svg>
      <div className="container pb-4 px4">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-8 w-full text-center font-medium">
            <div>
                <h5 className="font-bold text-lg  mb-2">Company</h5>
                <ul>
                <li>
                    <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                    >
                    About Us
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                    >
                    Careers
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                    >
                    Blog
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                    >
                    Contact
                    </a>
                </li>
                </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg  mb-2">Discovery</h5>
              <ul>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    Campings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg  mb-2">Social</h5>
              <ul className=" flex flex-col items-center gap-y-3">
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    <BsFacebook size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    <BsInstagram size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    <BsGithub size={24} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg  mb-2">Contact</h5>
              <ul>
                <li>
                  <a
                    href="mailto:info@example.com"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+123456789"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    +212 638 74 94 48
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary" />
        <div className="w-full flex items-center justify-between px-4">
          <p className="text-sm  text-center">
            © 2022 Journey. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="#"
              className=" hover:text-white transition-colors duration-300"
            >
              <BsFacebook size={24} />
            </a>
            <a
              href="#"
              className=" hover:text-white transition-colors duration-300"
            >
              <BsInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
