const packageJson = require("./package.json")

module.exports = {
  pathPrefix: "/gatsby-profile",
  siteMetadata: {
    siteUrl: `https://frantzyy.github.io/gatsby-profile`,
    version: packageJson.version,
    name: `Chris Frantz`,
    jobTitle: `Senior Portfolio Architect`,
    role: `Distribution Technology Domain`,
    department: `US Retail Markets Architecture`,
    company: `Liberty Mutual`,
    email: `christopher.j.frantz@gmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/frantzyy",
      },
      { name: "linkedin", link: "https://linkedin.com/in/chrisfrantz2002" },
      { name: "twitter", link: "https://twitter.com/frantz_chris" },
    ],
    objective: `
    <p>Seeking a Platform or Enterprise Architecture position where I can leverage my passion for designing innovative software solutions and my 
    leadership skills to drive forward-thinking strategies across SBU or enterprise while enhancing business outcomes and efficiency</p>
`,
    about: `
      <p>Over 20 years of experience in large scale, complex, data intensive,
       distributed systems who thrives on problem solving and thinking outside the box.
      </p>
      <p>Passionate about architecting solutions that make our systems more performant, more secure, more reliable and resillient, 
      easier to maintain, and cost less. All the while keeping up with my 6-year-old, 3-year-old, and energetic and advenurous wife.</p>
      <p>Constantly pushing myself to learn more and do more.</p>
      `,

    certifications: [
      {
        vendor: "AWS",
        type: "Solutions Architect - Associate",
        when: "2024-07-25 to 2027-07-25",
        certID:
          "<a href='https://www.credly.com/badges/70d9ed90-96af-46cb-abe5-f8190fc5b025/public_url'>verify</a>",
        badge: "ssa_badge",
      },
      {
        vendor: "AWS",
        type: "Coud Practioner",
        when: "2024-06-27 to 2027-06-27",
        certID:
          "<a href='https://www.credly.com/badges/56ca2218-26b9-437d-9060-2bf2b8b4c6e1/public_url'>verify</a>",
        badge: "cp_badge",
      },
    ],
    education: [
      {
        degree: "Bachelor Science",
        major: "Computer Information Systems",
        when: "1998-2002",
        school: "Bentley University",
        where: "Waltham, MA",
        moreInfo: "",
      },
      {
        degree: "Semester Abroad",
        major: "",
        when: "2000",
        school: "Royal Melbourne Institute of Technology",
        where: "Melbourne, Australia",
        moreInfo: "",
      },
    ],
    experience: [
      {
        role: "Senior Portfolio Architect | USRM | Architecture",
        when: "2022-Present",
        company: "Liberty Mutual",
        where: "Remote",
        moreInfo: `<p>Aligned to leading our Distribution Technology Domain architecture direction in alignment with our overall north star architecture for USRM and the enterprise.<p>
        <ul><li>Helped redefine how our people are organized around our software to align better with architecture direction and creating a more lean, product mindeset operating model.</li>
        <ul>`,
      },
      {
        role: "Senior Solutions Architect | USRM | Architecture",
        when: "2021-2022",
        company: "Liberty Mutual",
        where: "Remote",
        moreInfo: `<p>Tasked with defining our API Strategy and our overall Service
         Portfolio's user experiences.<p>
        <ul><li>Within a few months of the new role was able to define an API 
        Strategy that set expectations for our API direction and iniated the 
        convergence of multiple efforts across Liberty for our API technical decisions, standards, and eventually 
        enablement patterns</li>
        <li>Helped put a newly defined architecture process to the test by 
        providing valuable feedback and setting an example for peers to follow with the API Strategy and related artifacts </li>
        <li>Driving collaboration by bringing together key knowledge experts, regardless of org, for specific
        working groups around API Security, API Gateways, API architecture patterns and API implementation needs such as GraphQL Federation.</li>
        <li>Pushing business architecture to re-imagine how we define our business 
        capabilities to better align with our vision to become an API-First company</li>
        </ul>
        `,
      },
      {
        role: "Solutions Engineer | USRM | Service",
        when: "2018-2021",
        company: "Liberty Mutual",
        where: "Remote",
        moreInfo: `<p>Technical lead and mentor for three agile teams that develop and support 15 applications for our internal and external users across Liberty and Safeco brands. <p>
        <ul><li>Change leader who defined vision and technical roadmap while influencing business and IT leaders to modernize our legacy applications by re-platforming to a PaaS and replacing capabilities using React/NodeJS in AWS for a savings of $400K year over year</li>
        <li>Upgraded our security to use OIDC standards</li>
        <li>Solved session affinity issues while migrating to a PaaS platform</li>
        <li>Enabled our legacy applications to use modern browsers</li>
        <li>Reduced errors by 80% </li>
        <li>Technical lead to onboard a vendor CMS product</li>
        <li>Mentored teams on building cloud native applications and technical excellence to improve their skill set and proficiency to deliver quality features.</li></ul>
        `,
      },
      {
        role: "Solutions Engineer | USRM | Distribution",
        when: "2014-2018",
        company: "Liberty Mutual",
        where: "Remote",
        moreInfo: `<p>Part of core team tasked with architecting a shared platform for 21 front-end applications to use.
        <ul><li>Assessed new technologies and frameworks</li>
        <li>Championed common libraries and inner source</li>
        <li>Help lead migration scm strategy from RTC to Git</li>
        <li>Advocated and mentored teams in BDD adoption, test automation, and cloud adoption</li><ul>
        `,
      },
      {
        role: "Principal Software Developer | USRM | Digital",
        when: "2011-2013",
        company: "Liberty Mutual",
        where: "Portsmouth, NH",
        moreInfo: `<p>Lead developer for front-end team’s rewrite of Liberty’s public facing quoting web application using Dojo and REST APIs in a SOA architecture.</p>
        <ul><li>Successfully met a $6+ million project’s delivery</li></ul>
        `,
      },
      {
        role: "Senior Software Developer | USRM | Digital ",
        when: "2008-2010",
        company: "Liberty Mutual",
        where: "Portsmouth, NH",
        moreInfo: `<p>Lead developer for front-end team’s reskin of Liberty’s public facing quoting web application.<p>
        <ul><li>Advocated and delivered use web standards and CSS frameworks into existing code base</li></ul>
        `,
      },
      {
        role: "Senior Software Developer | Commercial Insurance | Claims",
        when: "2005-2008",
        company: "Liberty Mutual",
        where: "Portsmouth, NH",
        moreInfo: `<p>Designed and developed an Electronic Data Interchange (EDI) system to batch load claims from large customers (ex: UPS).<p>
        <ul><li>Worked with analysts to map data to ACCORD  XML schema (XSD)</li>
        <li>Maintained the current application by fixing defects, adding web chat, and providing on-call support
        </li></ul>
        `,
      },
      {
        role: "Software Developer | Technical Development Program",
        when: "2002-2004",
        company: "Liberty Mutual",
        where: "Portsmouth, NH",
        moreInfo: `
        <ul><li>classroom training</li>
        <li>4 project rotations (Business, Middleware, Claims, Architecture)</li>
        <li>Implemented updates and bug fixes within a mature 24/7 call center claim reporting application with over 30,000 users
        </li></ul>
        `,
      },
    ],
    skillsExperience: [
      {
        name: "JavaScript",
        level: "85",
        experience: "20 years",
      },
      {
        name: "HTML",
        level: "85",
        experience: "20 years",
      },
      {
        name: "CSS",
        level: "65",
        experience: "20 years",
      },
      {
        name: "React",
        level: "85",
        experience: "3 years",
      },
      {
        name: "Express",
        level: "85",
        experience: "3 years",
      },
      {
        name: "NodeJS",
        level: "85",
        experience: "3 years",
      },
      {
        name: "Java",
        level: "50",
        experience: "10 years",
      },
    ],
    skills: [
      {
        category: "Languages/Markup",
        skills: "Javascript, Java, JSON, HTML, CSS, XML, YML, MD, SQL",
      },
      {
        category: "Libraries/Frameworks",
        skills: "AWS, CloudFoundry, React, Node.js, Express, NGINX",
      },
      {
        category: "Security",
        skills:
          "OIDC, OAuth2, SAML, LDAP, AD, Azure AD, Ping, Siteminder, CDN, Apigee, Passport.js",
      },
      {
        category: "Databases/Storage",
        skills: "S3, Redis, DynamoDB, DB2",
      },
      {
        category: "Build Tools",
        skills: "Gradle, Maven, Ant, Bamboo, Jenkins, npm, Webpack",
      },
      {
        category: "Testing Tools",
        skills:
          "Nightwatch, Jasmine, Karma, Jest, Cucumber, Postman, TestCafe, Cypress.io, Selenium, Saucelabs",
      },
      {
        category: "Concepts",
        skills:
          "API Strategy, API-First, API Products, Cloud Native Architectures, Single Page Applications, MVC, REST, GraphQL, Behavior Driven Design, CQRS, Event Driven Architectures, Analytics, Monitoring, Responsive Web Design, Test Driven Development, Continuous Integration and Continuous Delivery, Component Based Design, Functional Programming",
      },
    ],
    interests: [
      "Surfing",
      "Disc Golf",
      "Kiteboarding",
      "Home DIY projects",
      "VW Vans",
      "Nachos",
      "Travelling",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "luke-lightsaber",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-WNKFZ0WFPV"
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Mono`],
        display: "swap",
      },
    },
  ],
}
