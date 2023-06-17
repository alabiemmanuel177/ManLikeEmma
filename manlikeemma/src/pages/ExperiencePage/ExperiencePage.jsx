import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './experiencepage.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const ExperiencePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  return (
    <div className={`experience-page-root ${fadeIn ? "fade-in" : ""}`}>
      <div className="page-head">
        <h2 style={{ marginTop: '40px' }}>Where I've Worked</h2>
        <hr style={{ width: '200px', border: '2px solid white' }} />
      </div>
      <div className="experience-page-body" style={{ marginTop: '20px' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', height: '192px', p: 0 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            className="custom-tabs"
            TabIndicatorProps={{
              style: { backgroundColor: 'var(--primary-color)' },
            }}
          >
            (//hsl(0, 0%, 67%))
            <Tab
              label="TechGate"
              {...a11yProps(0)}
              className={value === 0 ? 'active-tab' : '#fff'}
              sx={{ color: 'var(--primary-color)', fontFamily: 'Montserrat', fontWeight: '300' }}
            />
            <Tab
              label="ATB Tech"
              {...a11yProps(1)}
              className={value === 1 ? 'active-tab' : '#fff'}
              sx={{ color: 'var(--primary-color)', fontFamily: 'Montserrat', fontWeight: '300' }}
            />
            <Tab
              label="Botosoft"
              {...a11yProps(2)}
              className={value === 2 ? 'active-tab' : '#fff'}
              sx={{ color: 'var(--primary-color)', fontFamily: 'Montserrat', fontWeight: '300' }}
            />
            <Tab
              label="RoyalGate"
              {...a11yProps(3)}
              className={value === 3 ? 'active-tab' : '#fff'}
              sx={{ color: 'var(--primary-color)', fontFamily: 'Montserrat', fontWeight: '300' }}
            />

          </Tabs>
          <TabPanel value={value} index={0} sx={{ fontFamily: 'Montserrat', fontWeight: '300' }}>
            <div className="work-experience">
              <div className="work-experience-title">
                <h2>CEO and Co-founder <span>@ TechGate and Attendity</span></h2>
                <h4>September 2022</h4>
              </div>
              <div className="work-experience-body">
                <h3>As the CEO of TechGate and Co-founder of Attendity, I am responsible for driving innovation and leading a dynamic team. My skill set encompasses management, web development (using technologies like React and Next.js), mobile app development (leveraging React Native), backend development (utilizing Node.js, Express, and MongoDB), DevOps (with proficiency in Vercel, GitHub, Kubernetes, and Docker), and UI/UX design (utilizing Figma).</h3>
                <h3>I bring a strategic vision and a passion for creating comprehensive solutions to the table. Combining my technical prowess with effective leadership, I steer TechGate and Attendity towards success. With my deep understanding of cutting-edge technologies and industry best practices, I ensure that both companies deliver exceptional digital experiences to our clients. Innovation, quality, and user-centric design are at the core of my approach.</h3>
                <h3>In my role, I handle various aspects of the tech industry, from management and web development to mobile app development, backend systems, DevOps, and UI/UX design. This versatility allows me to navigate the complexities of the industry and make a significant impact. I am driven by a commitment to pushing the boundaries of what is possible in the digital landscape.</h3>
                <h3>With my leadership and expertise, I play a pivotal role in driving the growth and success of TechGate and Attendity. My ability to seamlessly navigate different areas of technology positions me as a versatile and influential force in shaping the future of digital innovation.</h3>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} sx={{ fontFamily: 'Montserrat' }}>
            <div className="work-experience">
              <div className="work-experience-title">
                <h2>Full-stack Engineer intern <span>@ ATB TechSoft</span></h2>
                <h4>Februrary - September 2022</h4>
              </div>
              <div className="work-experience-body">
                <h3>As a Full-stack Engineer Intern at ATB Tech Limited, I had the opportunity to work extensively with React JS and Node Express, honing my skills in both front-end and back-end development. Throughout my internship, I also focused on strengthening my knowledge of data structures and algorithms, essential foundations for building robust software solutions.</h3>
                <h3>During my time at ATB Tech Limited, I gained valuable hands-on experience in the fintech industry. This immersive environment provided me with a comprehensive understanding of the unique challenges and requirements within the financial technology sector. Moreover, my internship allowed me to develop not only technical expertise but also essential non-technical skills such as effective communication, teamwork, and problem-solving.</h3>
                <h3>My experience as a Full-stack Engineer Intern at ATB Tech Limited equipped me with a solid foundation in full-stack development, combined with a deep understanding of the fintech industry. I am confident that the skills and insights gained during this internship will enable me to make a meaningful impact as I pursue a career in the software engineering field.</h3>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} sx={{ fontFamily: 'Montserrat' }}>
            <div className="work-experience">
              <div className="work-experience-title">
                <h2>Software Engineering Intern <span>@ Botosoft Technologies Limited</span></h2>
                <h4>June – September 2021</h4>
              </div>
              <div className="work-experience-body">
                <h3>During my tenure as a Software Engineering Intern at Cornfield Group of Companies, I actively contributed to various projects, showcasing my proficiency in Python scripting, data extraction automations, UI/UX designs, and frontend development. One of my notable contributions was in the field of student registration for the West African Senior School Certificate Examination (WASSCE).</h3>
                <h3>In this role, I worked on a project specifically focused on detecting and preventing ghost or duplicate students from registering for the examination. I developed Python scripts that utilized image comparison techniques and name matching algorithms to identify similarities and discrepancies between student records. This automation significantly enhanced the accuracy and efficiency of the registration process, ensuring the integrity of the examination system.</h3>
                <h3>Through my experience as a Software Engineering Intern, I gained valuable insights into various aspects of software development and demonstrated my ability to contribute effectively to real-world projects while utilizing a diverse skill set.</h3>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} sx={{ fontFamily: 'Montserrat' }}>
            <div className="work-experience">
              <div className="work-experience-title">
                <h2>IT Manager <span>@ Royal Gate Commercial and Marketing Limited</span></h2>
                <h4>2014-2022</h4>
              </div>
              <div className="work-experience-body">
                <h3>As an IT Manager, I was responsible for the efficient operation of computer systems, Wi-Fi networks, and CCTV systems. I ensured their seamless functionality by promptly addressing any issues that arose. I conducted troubleshooting and diagnostics to identify and resolve technical problems, minimizing downtime and optimizing productivity.</h3>
                <h3>In addition, I played a crucial role in the installation, upgrading, and maintenance of computer hardware and accessories. This included mounting new systems and implementing necessary software updates. I collaborated with vendors to procure computer equipment and negotiate favorable pricing, ensuring cost-effectiveness and timely delivery.</h3>
                <h3>Overall, my role as an IT Manager involved a comprehensive range of tasks, from ensuring the smooth operation of existing systems to acquiring and implementing new technology solutions.</h3>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};
