
import zaynSrc from './assets/zayn3.jpg';
import signSrc from './assets/sign.png';
import zaynSrc2 from './assets/zaynbg.jpg';
import award1 from './assets/award1.jpg';
import award2 from './assets/award2.jpg';
import award3 from './assets/award3.jpg';
import award4 from './assets/award4.jpg';
import awardc from './assets/awardc.jpg';
import awarda from './assets/awarda.jpg';
import awardb from './assets/awardb.jpg';
import good from './assets/good.jpg';
import tryout2 from './assets/tryout2.jpg';
import d1 from './assets/d1.jpg';
import d2 from './assets/d2.jpg';
import d3 from './assets/d3.jpg';
import d4 from './assets/d4.jpg';
import d5 from './assets/d5.jpg';
import br1 from './assets/br1.jpg';
import br2 from './assets/br2.jpg';
import br3 from './assets/br3.jpg';
import br4 from './assets/br4.jpg';
import br5 from './assets/br5.jpg';
import ph1 from './assets/ph1.jpg';
import ph2 from './assets/ph2.jpg';
import ph3 from './assets/ph3.jpg';
import ph4 from './assets/ph4.jpg';
import ph5 from './assets/ph4.jpg';

const data = {
  homeSec1: {
    heading: "Hello!  \nMy Name is Beckham Roy",
    paragraph: "I design thoughtful digital experiences & beautiful brand aesthetics. I provide high quality web development services.",
    zaynSrc,
    signSrc
  },
  homeSec2: {
    heading: "I am Creative\nUI/UX Designer",
    paragraph: "Working with a strong focus on design and user experience. I create digital experiences for brands and companies.",
    buttonText: "Read More",
    buttonIconClass: "fa fa-long-arrow-right",
    zaynSrc2
  },
  homeSec3: {
    heading: "Yes I Believe in Quality",
    paragraph: "We design websites with conversions in mind, our websites look great, but each page has a clearly defined conversion goal.",
    buttonText: "Read More",
    buttonIconClass: "fa fa-long-arrow-right",
    zaynSrc2
  },
  aboutSection: {
    title: "about_me",
    backgroundImage: zaynSrc,
    tableData: [
      { label: "Name:", value: "(123) - 456-7890" },
      { label: "Email:", value: "23 February 1986" },
      { label: "Nationality:", value: "United States" },
      { label: "Fax:", value: "(123) - 456-7890" },
      { label: "Date of birth:", value: "23 February 1986" },
      { label: "Nationality:", value: "United States" }
    ],
    resumeButton: {
      text: "Download Resume",
      iconClass: "fa fa-long-arrow-right"
    },
    shortHistory: {
      heading: "short History",
      introText: "I'm a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.",
      detailedText: "Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Met with project manager, business analyst and architect right from beginning of project, creating rough mock-ups that were refined and extended over many iterations. Adjustments to mock-ups as necessary to address problems encountered."
    }
  },
  skillsSection: {
    title: "Skills",
    quoteHeading: "Good Design Keeps the User Happy, the Manufacturer in the Black and the Aesthete Unoffended.",
    quoteSubheading: "We're creative minds",
    description: "Ensured mock-ups met both visual and textual branding standards. Defined and documented website design standards when needed. Designed adaptive layouts to maintain a consistent user experience across the product. Created clickable prototypes when needed.",
    buttonText: "View Skills",
    buttonIconClass: "fa fa-long-arrow-right",
    image: zaynSrc
  },
  educationSection: {
    title: "education",
    backgroundImage: good,
    introParagraph: "Education is not the learning of facts, but the training of the mind to think. Education is a gift that none can take away. I am still learning every day.",
    educationList: [
      { university: "University of Design", degree: "Visual art & Design", years: "2011 - 2012" },
      { university: "Boston University", degree: "Visual art & Design", years: "2011 - 2012" },
      { university: "Boston University", degree: "Degree of Design", years: "2009 - 2011" },
      { university: "Design University", degree: "Degree of Web Design", years: "2007 - 2009" }
    ]
  },
  employmentSection: {
    title: "employment",
    introParagraph: "Education is not the learning of facts, but the training of the mind to think. Education is a gift that none can take away. I am still learning every day.",
    employmentList: [
      { years: "2016 - 2013", organization: "University of Design", description: "Execute all visual design stages from concept to final hand-off to engineering." },
      { years: "2016 - 2013", organization: "University of Design", description: "Execute all visual design stages from concept to final hand-off to engineering." },
      { years: "2016 - 2013", organization: "University of Design", description: "Execute all visual design stages from concept to final hand-off to engineering." },
      { years: "2016 - 2013", organization: "University of Design", description: "Execute all visual design stages from concept to final hand-off to engineering." }
    ],
    quote: "Awards can give you a tremendous amount of encouragement to keep getting better, no matter how young or old you are.",
    image: zaynSrc
  },
  portfolioSection: {
    title: "Portfolio",
    heading: "Other Things I have Designed.",
    introParagraph: "Education is not the learning of facts, but the training of the mind to think. Education is a gift that none can take away. I am still learning every day.",
    image: tryout2,
    designs: [
      "Design is not just what it looks and feels like.",
      "The details are not the details. They make the design.",
      "Good design does not date. Bad design does.",
      "Design is not just what it looks and feels like."
    ],
    tabs: [
      { title: "Design", images: [d1, d2, d3, d4, d5] },
      { title: "Branding", images: [br1, br2, br3, br4, br5] },
      { title: "Photography", images: [ph1, ph2, ph3, ph4, ph5] }
    ],
    buttonText: "View Portfolio",
    buttonIconClass: "fa fa-long-arrow-right"
  },
  awardSections: [
    {
      id: "section1",
      title: "I am not Aiming for an award",
      description: "Ensured mock-ups met both visual and textual branding standards. Defined and documented website design standards when needed. Designed adaptive layouts to maintain a consistent user experience across the product. Created clickable prototypes when needed.",
      images: [award1, award2, award3, award4],
      backgroundImage: tryout2
    },
    {
      id: "section2",
      slides: [
        {
          image: awardc,
          title: "Award Title 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat quisquam quasi id! Aliquid provident cumque deserunt quisquam blanditiis aliquam dolorum sunt, nobis perspiciatis, soluta molestiae ut illum pariatur vitae? Cupiditate quia aliquid architecto distinctio sed dolores nobis. Cumque, magni? Magnam voluptates rem quam nostrum nisi necessitatibus asperiores et reiciendis. Soluta, ex eligendi ullam impedit temporibus accusamus sint cum illo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, accusantium? Voluptas blanditiis dignissimos distinctio expedita facere officia, rerum debitis aperiam nihil esse impedit corrupti odit magni quia est numquam illo! Iure recusandae modi quos blanditiis, cum a ducimus obcaecati placeat accusantium animi excepturi sint ratione. Cum eaque dolorum officiis soluta voluptas, ratione consequuntur temporibus cupiditate et deleniti at iure eum!"
        },
        {
          image: awarda,
          title: "Award Title 2",
          description: "Here goes the explanation about the award... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, nam sunt! Provident, pariatur error exercitationem commodi iste nobis itaque cupiditate. Impedit consequuntur architecto quos ea incidunt esse excepturi magnam placeat. Ab similique consequatur odio culpa nobis, velit veritatis dolorum aperiam soluta distinctio expedita, accusantium cum inventore molestiae?"
        },
        {
          image: awardb,
          title: "Award Title 3",
          description: "Here goes the explanation about the award... Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro iure, excepturi aperiam libero nobis temporibus doloribus culpa beatae. Impedit at veritatis, debitis officia tempore amet eveniet velit mollitia nesciunt. Optio iusto veniam aspernatur numquam. Dicta blanditiis dolorem qui provident, quasi repellat?"
        }
      ]
    }
  ]
};

export default data;
