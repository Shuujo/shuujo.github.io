/** 
import coveSoda1 from "../assets/portfolio pieces/Cove Soda/01.jpg"
import coveSoda2 from "../assets/portfolio pieces/Cove Soda/02.jpg"

images: [
    coveSoda1,
    coveSoda2
  ]
*/

import iconKinjo from "../assets/icons/Kinjo.svg";
import iconShuuujo from "../assets/Logos/Logo_White.svg";
import iconCove from "../assets/icons/Cove.svg";
import iconClover from "../assets/icons/Clover.svg";
import iconIris from "../assets/Logos/Logo_White.svg";

import kinjoThumbnail from "../assets/portfolio pieces/Kinjo/Kinjo_Thumbnail.jpg";
import kinjoProj1 from "../assets/portfolio pieces/Kinjo/Designs/Compressed Designs/Side.png";
import kinjoProj2 from "../assets/portfolio pieces/Kinjo/Designs/Compressed Designs/Top.png";
import kinjoProj3 from "../assets/portfolio pieces/Kinjo/Designs/Compressed Designs/Top2.png";
import kinjoProj4 from "../assets/portfolio pieces/Kinjo/Designs/Compressed Designs/Top3.png";
import kinjoProj5 from "../assets/portfolio pieces/Kinjo/Designs/Compressed Designs/Top4.png";
import kinjoProj6 from "../assets/portfolio pieces/Kinjo/Designs/Compressed Designs/Top5.png";
import kinjoProj7 from "../assets/portfolio pieces/Kinjo/Designs/Compressed Designs/Top6.png";
import kinjoProj8 from "../assets/portfolio pieces/Kinjo/Tops.jpg";
import kinjoProj9 from "../assets/portfolio pieces/Kinjo/Normal_Photo.jpg";

import magazineThumbnail from "../assets/portfolio pieces/Magazine/MagazineMockupV1.jpg";
import magazineProj1 from "../assets/portfolio pieces/Magazine/MagazineMockupV1.jpg";
import magazineProj2 from "../assets/portfolio pieces/Magazine/MagazineMockupV2.jpg";
import magazineProj3 from "../assets/portfolio pieces/Magazine/MagazineMockupV3.jpg";
import magazineProj4 from "../assets/portfolio pieces/Magazine/Pahang, Josh - Magazine.jpg";
import magazineProj5 from "../assets/portfolio pieces/Magazine/Pahang, Josh - Magazine2.jpg";
import magazineProj6 from "../assets/portfolio pieces/Magazine/Pahang, Josh - Magazine3.jpg";
import magazineProj7 from "../assets/portfolio pieces/Magazine/Pahang, Josh - Magazine4.jpg";
import magazineProj8 from "../assets/portfolio pieces/Magazine/Pahang, Josh - Magazine5.jpg";

import coveProj1 from "../assets/portfolio pieces/CoveSoda/Cove_1.jpg";
import coveProj2 from "../assets/portfolio pieces/CoveSoda/Cove_2.jpg";
import coveProj3 from "../assets/portfolio pieces/CoveSoda/Cove_3.jpg";
import coveProj4 from "../assets/portfolio pieces/CoveSoda/Cove_4.jpg";

import cloverProj1 from "../assets/portfolio pieces/CloverMarket/Clover Market Banner_small.png";

import shuuujoProj1 from "../assets/portfolio pieces/Shuuujo/Banner CMYK.png";

import motionProj1 from "../assets/portfolio pieces/Motion Graphics/Odyssey_Motion.mp4";

const projects = [
  {
    id: "project-1",
    className: "project-card project-kinjo",
    title: "Kinjo Sushi & Grill",
    type: "Professional",
    description: "✦ Graphic illustrations designed for a Japanese restaurant's bubble tea cups.",
    year: "2024",
    role: "Product Graphic Designer",
    software: "Illustrator, Clip Studio Paint",
    src: iconKinjo,

    details:
      "✦ In the summer of 2024, I was working at the Calgary-based Kinjo Sushi & Grill restaurant, as a server and bartender. I was approached by the management staff, as they were aware I was passionate about graphic design and illustration, and they granted me the opportunity to create new bubble tea designs for the company. ✦ I was able to produce one main design that would be displayed on the side of the cup, and several designs that would be displayed on top of the cup. I was given a limited colour palette, however I did want to display the wide arrange of colours of the bubble tea, so I ended up incorporating some clear elements in my designs as I wanted those bubble tea colours to shine too.",

    images: [kinjoThumbnail, kinjoProj1, kinjoProj2, kinjoProj3, kinjoProj4, kinjoProj5, kinjoProj6, kinjoProj7, kinjoProj8, kinjoProj9],

    videos: []
  },

  {
    id: "project-2",
    className: "project-card project-shuuujo",
    title: "Shuuujo.jp",
    type: "Personal",
    description: "✦ A personal brand that follows my passion for art.",
    year: "2026",
    role: "Owner",
    software: "Illustrator, Photoshop, InDesign",
    src: iconShuuujo,

    details:
      "Add all of the information about this project here.",

    images: [shuuujoProj1],
    videos: []
  },

  {
    id: "project-3",
    className: "project-card project-cove",
    title: "Cove Soda Concept Flavour",
    type: "School",
    description: "✦ Cove Soda is a soft drink company from Canada, that focuses on producing classic & nostalgia sodas but replaces common sugar & artifical ingredients, with more gut-friendly alternatives.",
    year: "2026",
    role: "Marketing Design / Brand Matching",
    software: "Illustrator, Photoshop",
    src: iconCove,

    details:
      "✦ In this project, we were required to create a new flavour for a soda/beer company, and design 2 advertisements in the style of the parent company.",

    images: [coveProj4, coveProj1, coveProj3, coveProj2],
    videos: []
  },

  {
    id: "project-4",
    className: "project-card project-clover",
    title: "Clover Market",
    type: "School",
    description: "✦ A capstone project exploring a vendor-first approach towards local markets.",
    year: "2026",
    role: "Brand Design / Web Design",
    software: "Illustrator, Photoshop, InDesign, Visual Studio Code",
    src: iconClover,

    details:
      "✦ Clover Market is a capstone project that focuses on human-made art and products. We wanted to elevate and encourage local artists by supporting them throughout their creative journey. Clover Market is a local beginner-friendly market that helps make the application process much easier for starting vendors, while also showcasing them to a broader audience. \n ✦ Clover Market is a capstone project",

    images: [cloverProj1],
    videos: []
  },

  {
    id: "project-5",
    className: "project-card project-iris",
    title: "iris OBSCURA",
    type: "School",
    description: "✦ iris OBSCURA is a fashion magazine brand that was created by myself for a school project that focused on typography and layout.",
    year: "2026",
    role: "Editorial Designer",
    software: "InDesign, Illustrator, Photoshop",
    src: iconIris,

    details:
      "✦ This project features a front cover, editor's letter + table of contents spread, a 2-page spread focusing on typography, a 2-page spread focusing on layout design, and a back cover showcasing a custom advertisement that follows the theme of our magazine.",

    images: [magazineThumbnail, magazineProj2, magazineProj3, magazineProj4, magazineProj5, magazineProj6, magazineProj7, magazineProj8],
    videos: []
  },

  {
    id: "project-6",
    className: "project-card project-motion",
    title: "Motion Graphics",
    type: "Personal",
    description: "✦ A variety of motion graphics made as a hobby.",
    year: "2026",
    role: "Motion Graphic Designer",
    software: "After Effects, Premerie Pro, Illustrator",
    src: iconIris,

    details:
      "✦ A collection of general motion graphics.",

    images: [],
    videos: [motionProj1]
  },

  {
    id: "project-7",
    className: "project-card project-poster",
    title: "Poster Designs",
    type: "Personal",
    description: "✦ A variety of poster designs made as a hobby.",
    year: "2026",
    role: "Graphic Designer",
    software: "Photoshop, Illustrator, Clip Studio Paint",
    src: iconIris,

    details:
      "✦ A collection of general poster designs.",
    images: [],
    videos: []
  },

  {
    id: "project-8",
    className: "project-card project-logo",
    title: "Logo Designs",
    type: "Personal",
    description: "✦ A variety of logo designs made as a hobby.",
    year: "2026",
    role: "Graphic Designer",
    software: "Photoshop, Illustrator, Clip Studio Paint",
    src: iconIris,

    details:
      "✦ A collection of general logo designs.",
    images: [],
    videos: []
  }

]

export default projects
