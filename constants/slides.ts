import { onboarding1, onboarding2, onboarding3, onboarding4 } from "./images";
import { afrebayimg1, afrebayimg2, afrebayimg3, afrebayimg4 } from "./images";
import { afrebayavaimg1, afrebayavaimg2, afrebayavaimg3, afrebayavaimg4 } from "./images";
import { services1, services2, services3, services4 } from "./images";
import { careerimg1, careerimg2, careerimg3, careerimg4 } from "./images";
import { freelancerssecimg1, freelancerssecimg2, freelancerssecimg3, freelancerssecimg4 } from "./images";
import { Productdetails1, Productdetails2, Productdetails3 } from "./images";






// onboarding start
export interface Slide {
  key: string;
  title: string;
  text: string;
  image: any;
}

// Product details start
export interface Slideproduct {
  key: string;
  image: any;
}

// onboarding end

// Afrebay Opportunities start
export interface afrebayopptext {
  key: string;
  title: string;
  text: string;
  dec:string;
  image: any;
}
// Afrebay Opportunities end

// Available Afrebay Start
export interface afrebayavatext {
  key: string;
  title: string;
  text: string;
  dec:string;
  image: any;
}
// Available Afrebay end

// Services  Start
export interface Servicestext {
  key: string;
  title: string;
  dec:string;
  image: any;
}
// Services end


// Career  Start
export interface careertext {
  key: string;
  title: string;
  text: string;
  dec:string;
  image: any;
  comment:any;
}
// Career end

// Freelancers  Start
export interface freelancerstext {
  key: string;
  title: string;
  text: string;
  image: any;
  comment:any;
}
// Freelancers end



// onboarding start
export const slides: Slide[] = [
  {
    key: "slide1",
    title: "Website Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: onboarding1,
  },
  {
    key: "slide2",
    title: "Mobile Application Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: onboarding2,
  },
  {
    key: "slide3",
    title: "Graphic Designing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: onboarding3,
  },
  {
    key: "slide4",
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: onboarding4,
  },
];
// onboarding End

export const slidesx: Slideproduct[] = [
  {
    key: "product1",
    image: Productdetails1,
  },
  {
    key: "product2",
    image: Productdetails2,
  },

  {
    key: "product3",
    image: Productdetails3,
  },

];

// Afrebay Opportunities start
export const afrebayopp: afrebayopptext[] = [
  {
    key: "1",
    title: "Software Development Engineer",
    text: "Tata Consultancy Services",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: afrebayimg1,
  },
  {
    key: "2",
    title: "Dash coin / master node based",
    text: "By Vendor's Company",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: afrebayimg2,
  },
  {
    key: "3",
    title: "Dash coin / master node based",
    text: "By Vendor's Company",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: afrebayimg3,
  },
  {
    key: "4",
    title: "Dash coin / master node based",
    text: "By Vendor's Company",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: afrebayimg4,
  },
];

// Afrebay Opportunities end


// Available Afrebay Start

export const afrebayava: afrebayavatext[] = [
  {
    key: "1",
    title: "Vendor's Company",
    text: "Kolkata, West Bengal, India",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci. Aliquam turpis mauris, accumsan metus non, laoreet commodo diam.",
    image: afrebayavaimg1,
  },
  {
    key: "2",
    title: "Vendor's Company",
    text: "Kolkata, West Bengal, India",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci. Aliquam turpis mauris, accumsan metus non, laoreet commodo diam.",
    image: afrebayavaimg2,
  },
  {
    key: "3",
    title: "Vendor's Company",
    text: "Kolkata, West Bengal, India",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci. Aliquam turpis mauris, accumsan metus non, laoreet commodo diam.",
    image: afrebayavaimg3,
  },
  {
    key: "4",
    title: "Vendor's Company",
    text: "Kolkata, West Bengal, India",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci. Aliquam turpis mauris, accumsan metus non, laoreet commodo diam.",
    image: afrebayavaimg4,
  },
];


// Available Afrebay End



// Services Start

export const servicessec: Servicestext[] = [
  {
    key: "1",
    title: "Website Development",
    dec: "From design to deployment, skilled developers are needed to bring vision to life, empowering business ...",
    image: services1,
  },
  
  {
    key: "2",
    title: "Mobile Application ...",
    dec: "From design to deployment, skilled developers are needed to bring vision to life, empowering business ...", 
    image: services2,
  },
  {
    key: "3",
    title: "Graphic Designing",
    dec: "From design to deployment, skilled developers are needed to bring vision to life, empowering business ...",  
   image: services3,
  },
  {
    key: "4",
    title: "Digital Marketing",
    dec: "From design to deployment, skilled developers are needed to bring vision to life, empowering business ...",
   image: services4,
  },
];


// Services End


// Ouick Career Tips Start

export const careersec: careertext[] = [
  {
    key: "1",
    title: "How generative AI will transform your work",
    text: "June 29,2023",
    comment: "2K Comments",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci laoreet commodo diam ...",
    image: careerimg1,
  },
  
  {
    key: "2",
    title: "Looking for a career that delivers 360° value?",
    text: "June 29,2023",
    comment: "2K Comments",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci laoreet commodo diam ...",
    image: careerimg2,
  },
  {
    key: "3",
    title: "4 technology trends shaping our work today and tomorrow",
    text: "June 29,2023",
    comment: "2K Comments",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci laoreet commodo diam ...",
     image: careerimg3,
  },
  {
    key: "4",
    title: "Experience how're solving worldwide challenges from A to Z",
    text: "June 29,2023",
    comment: "2K Comments",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip Suspendisse molestie diam posuere, pharetra dolor nec, die dapibus orci laoreet commodo diam ...",
     image: careerimg4,
  },
];


// Ouick Career Tips End


// Ouick Career Tips Start

export const freelancerssec: freelancerstext[] = [
  {
    key: "1",
    title: "Member Since",
    text: "06/15/2023",
    comment: "Not Rated Yet",
    image: freelancerssecimg1,
  },
  
  {
    key: "2",
    title: "Member Since",
    text: "06/15/2023",
    comment: "Not Rated Yet",
    image: freelancerssecimg2,
  },
  {
    key: "3",
    title: "Member Since",
    text: "06/15/2023",
    comment: "Not Rated Yet",
     image: freelancerssecimg3,
  },
  {
    key: "4",
    title: "Member Since",
    text: "06/15/2023",
    comment: "Not Rated Yet",
     image: freelancerssecimg4,
  },
];


// Ouick Career Tips End