import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterApi = {
  content: [
    {
      id: 1,
      title: "About Zomato",
      list: [
        "Who We Are",
        "Blog",
        "Work With Us",
        "Investor Relations",
        "Report Fraud",
        "Press Kit",
        "Contact Us",
      ],
    },
    {
      id: 2,
      title: "Zomaverse",
      list: [
        "Zomato",
        "Blinkit",
        "Feeding India",
        "Hyperpure",
        "Zomaland",
        "Weather Union",
      ],
    },
    {
      id: 3,
      title: "For Restaurants",
      list: ["Partner With Us", "Apps For You"],
    },
    {
      id: 4,
      title: "Learn More",
      list: ["Privacy", "Security", "Terms", "Sitemap"],
    },
  ],
  socialMedia: [
    {
      id: 1,
      icon: FaLinkedinIn,
      link: "https://in.linkedin.com/company/zomato",
    },
    {
      id: 2,
      icon: FaInstagram,
      link: "https://www.instagram.com/zomato/",
    },
    {
      id: 3,
      icon: FaTwitter,
      link: "https://twitter.com/zomato",
    },
    {
      id: 4,
      icon: FaYoutube,
      link: "https://www.youtube.com/zomato",
    },
    {
      id: 5,
      icon: FaFacebook,
      link: "https://www.facebook.com/zomato",
    },
  ],
};

export default FooterApi;
