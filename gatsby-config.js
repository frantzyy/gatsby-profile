module.exports = {
  pathPrefix: "/gatsby-profile",
  siteMetadata: {
    siteUrl: `https://frantzyy.github.io/gatsby-profile/`,
    name: `Chris Frantz`,
    role: `Solutions Engineer`,
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
    <p>To advance my career by taking on a Software Engineering Manager or similar Solutions Architect position that enables me to bring my passion for development and leadership abilities to help drive forward thinking solutions across multiple teams and systems while helping coach and mentor teammates to grow their skill set and breadth of knowledge.</p>
`,
    about: `
      <p>Natural leader with 19 years of experience in large scale, complex, data intensive, distributed web applications who thrives on pushing the boundaries and thinking outside the box.
      </p>
      <p>Passionate about architecting and developing web applications to be faster, more secure, more reliable, easier to maintain, and cost less.</p>
      <p>Constantly pushing myself to learn more and do more.</p>
      `,

    certifications: [
      {
        vendor: "AWS",
        type: "Solutions Architect - Associate",
        when: "2018-2023",
        certID:
          "<a href='https://www.youracclaim.com/badges/5f7a0abd-940b-472f-b509-3aa9190d9d4d/public_url'>5QXSV6RKLB41QTCL</a>",
        badge: "ssa_badge",
      },
      {
        vendor: "AWS",
        type: "Coud Practioner",
        when: "2020-2023",
        certID:
          "<a href='https://www.youracclaim.com/badges/ee00a0c2-8941-4ceb-9c62-667c5d1b9258/public_url'>63EMS54JKFQ1QT5L</a>",
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
        degree: "Semster Abroad",
        major: "",
        when: "2000",
        school: "Royal Melbourne Institute of Technology",
        where: "Melbourne, Australia",
        moreInfo: "",
      },
    ],
    experience: [
      {
        role: "Solutions Engineer | GRMUS | Service",
        when: "2018-Present",
        company: "Liberty Mutual",
        where: "Remote",
        moreInfo: `<p>Technical lead and mentor for three agile teams that develop and support 15 applications for our internal and external users across Liberty and Safeco brands. <p>
        <ul><li>Change leader who defined vision and technical roadmap while influencing business and IT leaders to modernize our legacy applications by re-platforming to a PaaS and replacing capabilities using React/NodeJS in AWS for a savings of $400K year over year</li>
        <li>Upgraded our security to use OIDC standards</li>
        <li>Solved session affinity issues while running a PaaS platform</li>
        <li>Enabled our legacy applicaitons to use modern browsers</li>
        <li>Reduced errors by 80% </li>
        <li>Technical lead to onboard a vendor CMS product</li>
        <li>Mentored teams on building cloud native applications and technical excellence to improve their skill set and proficiency to deliver quality features.</li></ul>
        `,
      },
      {
        role: "Solutions Engineer | GRMUS | Distribution",
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
        role: "Principal Software Developer | GRMUS | Digital",
        when: "2011-2013",
        company: "Liberty Mutual",
        where: "Portsmouth, NH",
        moreInfo: `<p>Lead developer for front-end team’s rewrite of Liberty’s public facing quoting web application using Dojo and REST APIs in a SOA architecture.</p>
        <ul><li>Successfully met a $6+ million project’s delivery</li></ul>
        `,
      },
      {
        role: "Senior Software Developer | GRMUS | Digital ",
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
    skills: [
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
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
