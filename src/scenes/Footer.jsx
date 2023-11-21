//import {SocialMediaIcons} from "../components";

const Footer = () => {
  return (
    <footer className="h-32 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        {/* <SocialMediaIcons /> */}
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Kesha Meyer
          </p>
          <p className="font-playfair text-md text-yellow">
            @{new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
