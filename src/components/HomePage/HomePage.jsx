import './HomePage.css';

import githubIcon from '../../assets/githubIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'

import giphy from '../../assets/giphy.webp'

import { motion } from 'framer-motion';

const container_x = (delay) => ({
    hidden: { x:-100,opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

const container_y = (delay) => ({
    hidden: { y:-100,opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

function HomePage(){
    return(
        <div id='about' className='homepage_container'>
            <motion.div 
            variants={container_x(0.3)}
            initial='hidden'
            animate='visible'
            className='homepage_left'>
                <p 
                
                className='homepage_left_p1'>
                    <span className='hi_span'>Hi,</span> My name is
                </p>

                <p className='homepage_left_p2'>
                    Rohit Gautam
                </p>

                <p className='homepage_left_p3'>
                    A <span className='hi_span'>Full Stack web developer</span>
                </p>

                <p className='homepage_left_description'>
                   A passionate and driven Computer Science and Engineering student at Lovely Professional University, graduating with the Class of 2026. With a specialization in Web Development, I am dedicated to using data-driven insights to solve real-world challenges. I have a strong foundation in programming, machine learning, and Web development, and I am always eager to explore innovative technologies. I am enthusiastic about contributing to meaningful projects, expanding my technical expertise, and helping build a smarter, more efficient future through intelligent systems and thoughtful solutions..
                </p>

                <div>
                    <a href='https://github.com/Rohitgautam02' target='_blank'>
                        <img 
                            src={githubIcon} 
                            alt="githubIcon" 
                            className='homepage_icons'
                        />
                    </a>
                    <a href='https://x.com/' target='_blank'>
                        <img 
                            src={twitterIcon} 
                            alt="twitterIcon" 
                            className='homepage_icons'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/rohit-gautam-67136b24b/' target='_blank'>
                        <img 
                            src={linkedinIcon} 
                            alt="linkedinIcon" 
                            className='homepage_icons'
                        />
                    </a>
                </div>

                <a href="mailto:gautamrohit73699@gmail.com">
                    <button className='homepage_left_button'>Get in touch</button>
                </a>
                
            </motion.div>

            <motion.div 
            variants={container_y(0.6)}
            initial='hidden'
            animate='visible'
            className='homepage_right'>
                {/* <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejhucHpkbWc4c2UyZ214MDFleHg2dWExY2lqb2xlNDIxaXB6dGw0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vLlpbDafjgHystuJ0a/giphy.webp" alt="profilePicture" /> */}
                <img src={giphy} alt="profilePicture" />
            </motion.div>
        </div>
    );
}

export default HomePage;
