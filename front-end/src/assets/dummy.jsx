import bike from "./type_imgs/bike.png";
import car from "./type_imgs/car.png";
import doctor from "./type_imgs/doctor.png";
import life from "./type_imgs/life.png";
import dog from "./type_imgs/dog.png";
import homeIsurance from "./type_imgs/home-insurance.png";

import commpare from "./benifits/compare.gif";
import fee from "./benifits/fee.gif";
import goal from "./benifits/goal.gif";
import trust from "./benifits/trust.gif";
import vault from "./benifits/vault.gif";
export {commpare,fee,goal,trust,vault}


import future from "./partner/future.jpg";
import birla from "./partner/birla.png";
import digit from "./partner/digit.png";
import icici from "./partner/icici.png";
import reliance from "./partner/reliance.png";
import lic from "./partner/lic.png";
import star from "./partner/star.png";
import tata from "./partner/tata.png";
import hdfc from "./partner/hdfc.png";
import magma from "./partner/magma.jpg";
import chola from "./partner/chola.png";
import liberty from "./partner/liberty.jpg";


import im1 from "./feedback/im1.png";
import im2 from "./feedback/im2.png";
import im3 from "./feedback/im3.png";

import imp1 from "./impactImgs/imp1.png";
import imp2 from "./impactImgs/imp2.png";
import imp3 from "./impactImgs/imp3.png";
import imp4 from "./impactImgs/imp4.png";

import emp1 from './employee/img1.png'
import emp2 from './employee/img2.png'
import emp3 from './employee/img3.png'


import b1 from './employee/pri.webp'
import b2 from './employee/nik.webp'


export {liberty,chola};

import shield_life from "./NavHed/shield_life.gif"
import shield_health from "./NavHed/shield_health.gif"

const container =
  "bg-dark-bg backdrop-blur-md  border-none border-gray-200 font-sans mb-10";
const subcontainer_col =
  "flex flex-col justify-between items-center px-4 py-3 md:px-6 max-w-7xl mx-auto";
const subcontainer =
  "flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto";
const printDate = (dateInput) => {
    let date;
  
    if (!dateInput) {
      date = new Date(); // current date
    } else {
      date = new Date(dateInput); // create date from input
    }
  
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  };
  
const aboutDesc = [
  {
    id: 1,
    emoji: "🛡️ ",
    title: "Comprehensive Coverage",
    content: "We offer plans covering health, vehicle, and life risks.",
  },
  {
    id: 2,
    emoji: "⚡",
    title: "Fast & Hassle-Free Claims",
    content: "Claims approved quickly with minimal steps and zero stress.",
  },
  {
    id: 3,
    emoji: "💰",
    title: "Affordable Premiums",
    content: "customers trust us & have bought their insurance on Policybazaar",
  },
  {
    id: 4,
    emoji: "📞",
    title: "24/7 Customer Support",
    content: "customers trust us & have bought their insurance on Policybazaar",
  },
];

const benifits = [
  {
    id: 1,
    img: commpare,
    title: "Instant Comparison",
    subtitle: "Effortless",
  },
  {
    id: 2,
    img: goal,
    title: " Smart Recommendations",
    subtitle: "Personalized",
  },
  {
    id: 3,
    img: trust,
    title: "Trusted Insurers",
    subtitle: "Verified",
  },
  {
    id: 4,
    img: fee,
    title: "Zero Extra Fees",
    subtitle: "Transparent",
  },
  {
    id: 5,
    img: vault,
    title: "Digital Vault",
    subtitle: "Secure",
  },
];

const testi = [
  {
    id: 1,
    img: im1,
    date: printDate(),
    name: "Rohan Mehta",
    rating: 4.5,
    smallRate: "hassle-free experience",
    content:
      "“I renewed my bike insurance within just 5 minutes—no paperwork, no spam calls. The entire process was incredibly smooth and straightforward. I didn’t have to upload endless documents or wait for any confirmation calls. It’s honestly the most hassle-free insurance renewal I’ve ever experienced. I’ll definitely be using this platform again for my future renewals.”",
  },
  {
    id: 2,
    img: im2,
    date: printDate("2023-11-15"),
    name: "Ananya Sharma",
    rating: 5,
    smallRate: "Clean UI and super intuitive!",
    content:
      "“I’ve been using this platform regularly, and it truly stands out from the rest. The layout is clean, navigation is easy, and I never faced any issues finding what I needed. Even on my phone, the experience is smooth. Highly recommended for daily use!”",
  },
  {
    id: 3,
    img: im3,
    date: printDate("2023-11-18"),
    name: "Priya Mehta",
    rating: 4.2,
    smallRate: "Feels safe and trustworthy.",
    content:
      "“At first I was unsure about sharing personal info, but the platform looks very secure. The interface is designed thoughtfully. I've already recommended it to two friends. It feels like a place where the user actually matters, not just a number.” ",
  },
];

const partners = [
  tata,
  hdfc,
  star,
  icici,
  reliance,
  future,
  birla,
  magma,
  lic,
  chola,
  digit,
  liberty
];

const data = [
  {
    id: 1,
    img: shield_health,
    title: "Get 90 Lakh Health Cover at just ₹2K",
    btn_title: "Health",
  },
  {
    id: 2,
    img: shield_life,
    title: "Buy Life Insurance Now!",
    btn_title: "Term",
  },
];


const impactData = [
  {
    img: imp1,
    stats: "5,000+",
    para: "Vehicles protected across India"
  },
  {
    img: imp2,
    stats: "12,000+",
    para: "Lives covered with trusted health plans"
  },
  {
    img: imp3,
    stats: "97%",
    para: "Claim satisfaction rate"
  },
  {
    img: imp4,
    stats: "4.8/5",
    para: "Customer support rating"
  }
];


const leadershipTeam = [
  {
    Person_img: b1,
    Person_name: "Priyanka Tomar",
    Person_profile: "Chief Executive Officer",
    Person__quote:
      "Leading with vision and purpose to shape a secure tomorrow.",
  },
  {
    Person_img: b2,
    Person_name: "Nikhil Pal Singh Tomar",
    Person_profile: "Chief Technology Officer",
    Person__quote: "Innovating today for a smarter insurance ecosystem.",
  },
  {
    Person_name: "Nitish Mondal",
    Person_profile: "Head of Operations",
    Person__quote: "Efficient processes are the backbone of customer trust.",
  },
];

const empployeeOfMonth = [
  {
    Person_img: emp1,
    Person_name: "Ms. Babita Singh",
    Person_Month: "May 2025",
  },
  {
    Person_img: emp2,
    Person_name: "Ms. Manita",
    Person_Month: "April 2025",
  },
  {
    Person_img: emp3,
    Person_name: "Mr. Kunal Gautam",
    Person_Month: "April 2025",
  },
];

const doData = [
  { index: 1, content: "Covers damages to third party property and individuals" },
  {
    index: 2,
    content: "24X7 Support, Anytime, Any  Where",
  },
  { index: 3, content: "Quick and Hassle Free Claim Settlement" },
];

const doData_Car = [
  { index: 1, content: "Covers damages to third party property and individuals" },
  {
    index: 2,
    content: "Get Your Vehicle repaired at 7,500+ network garages",
  },
  { index: 3, content: "BreakDown support anytime, anywhere" },
];


export { container, subcontainer_col, subcontainer };
export {bike,dog,car,life,homeIsurance,doctor};
export { aboutDesc, benifits, partners, testi, data, impactData, leadershipTeam, empployeeOfMonth, doData, doData_Car }
