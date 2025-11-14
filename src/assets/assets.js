import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import blueswim from './blueswim.webp'
import voltage from './voltage.webp'
import zesty from './zesty.webp'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Szindore Blue Swim",
      price: "RM79",
      brand: "Szindore",
      image: blueswim
    },
    {
      title: "Emajie Voltage",
      price: "RM79",
      brand: "Emajie",
      image: voltage
    },
    {
      title: "Harumme Zeste Royale",
      price: "RM100",
      brand: "Harumme",
      image: zesty
    },
    {
      title: "Malaya Perfumery Rainforest",
      price: "RM130",
      brand: "Malaya Perfumery",
      image: project_img_4
    },
    {
      title: "Avwa Cola Infusion",
      price: "RM100",
      brand: "Avwa",
      image: project_img_5
    },
    {
      title: "Rirana Coconut Nanas",
      price: "RM150",
      brand: "Rirana",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Syazlan Ahmad",
        title: "Harumme Sunday Swim",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "The fragrance recommendations were absolutely perfect for my personality. They took the time to understand my preferences and suggested scents I never would have discovered on my own. Exceptional service!"
    },
    {
        name: "Abu Latif",
        title: "Szindore Ex Talisman",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "Sebagai seseorang yang sensitif dengan bauan kuat, saya ragu-ragu untuk membeli wangian. Tetapi kakitangan mereka yang berpengetahuan membantu saya mencari pilihan yang halus dan sofistikated. Sangat kagum!"
    },
    {
        name: "Muslim Ahmad",
        title: "MF Prometheus",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "The quality of their fragrances is outstanding and the longevity is remarkable. I've received countless compliments since switching to their signature collection. A truly premium experience from start to finish."
    }
];