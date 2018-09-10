import navicatMonitorLogo from './assets/navicat-monitor-logo.png';
import mavieLogo from './assets/mavie-logo.jpg';
import grabForIGLogo from './assets/grab-for-ig-logo.jpg';
import instagrabLogo from './assets/instagrab-logo.png';
import dreamPocketLogo from './assets/dream-pocket-logo.png';
import perfectPocketLogo from './assets/perfect-pocket-logo.png';

const resume = {
  fullname: 'Choi Chi Piu',
  name: 'Morty Choi',
  title: 'Full Stack Developer',
  phone: '(852) 6218-6482',
  email: 'mortyccp@gmail.com',
  website: 'https://mortyccp.github.io',
  summary:
    'Developer interested in learning new techonologies and tools to solve chanllenging tasks.',
  profiles: {
    github: 'https://github.com/mortyccp',
    stackOverflow: 'https://stackoverflow.com/users/2215977/morty-choi'
  },
  languages: [
    { name: 'Cantonese', level: 'Native' },
    { name: 'English', level: 'Proficient' },
    { name: 'Mandarin', level: 'Proficient' }
  ],
  educations: [
    {
      institution: 'Hong Kong University of Science and Technology',
      title: 'BSc in Computer Science',
      start: 'Sep 2011',
      end: 'Nov 2014'
    }
  ],
  employments: [
    {
      employer: 'PremiumSoft CyberTech Limited',
      url: 'https://www.navicat.com/en/company/aboutus',
      position: 'Senior Developer',
      start: 'Jun 2014',
      end: 'May 2018',
      projects: [
        {
          title: 'Navicat Monitor',
          url: 'https://www.navicat.com/en/products/navicat-monitor',
          description: 'Agentless database monitoring tool',
          logo: navicatMonitorLogo
        },
        {
          title: 'Mavie',
          url:
            'https://itunes.apple.com/cn/app/%E5%90%8C%E4%BA%AB-%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB/id1215979862?mt=8',
          description: 'Social network app targeting China market',
          logo: mavieLogo
        },
        {
          title: 'Grab for IG',
          url: 'https://itunes.apple.com/us/app/grab-for-ig/id546639267?mt=8',
          description: 'Instagram companion app',
          logo: grabForIGLogo
        },
        {
          title: 'Instagrab',
          url:
            'https://www.crunchbase.com/organization/instagrab#section-overview',
          description:
            'Instagram companion app which is terminated due to instagram api policy',
          logo: instagrabLogo
        }
      ],
      highlights: [
        'Designed the overall service architecture for databse monitoring web application',
        'Built CI/CD pipelines for web application with cross compliation using Docker and Makefile',
        'Built mobile application with microservice architecture',
        'Designed multiple frontend applications architecture',
        'Developed award winning(Webby Awards) android, iOS and web application'
      ]
    }
  ],
  projects: [
    {
      title: 'Perfect Pocket',
      url: 'https://play.google.com/store/apps/details?id=com.soapsign.perfect',
      description: 'Tool for Pokemon Go with 100k downloads and 4.7 rating',
      logo: perfectPocketLogo
    },
    {
      title: 'Dream Pocket',
      url:
        'https://play.google.com/store/apps/details?id=com.blackseal.dreampocket',
      description: 'Tool for Pokemon Go with material design style',
      logo: dreamPocketLogo
    }
  ],
  skills: [
    'reactjs',
    'vue.js',
    'css3',
    'html5',
    'webpack',
    'git',
    'docker',
    'android',
    'ios',
    'rest',
    'graphql',
    'mircoservice',
    'java',
    'swift',
    'objective-c',
    'javascript',
    'golang',
    'mysql'
  ]
};

export default resume;
