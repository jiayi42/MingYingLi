import React, {Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import styles from './home.module.scss'
import WorkLists from '../../components/WorkLists'
import WorkCV from  '../../components/WorkCV'
import worksData from '../works.json'
import Publications from '../Pubs.json'
import edu from '../edu.json'
import worksEXPData from '../workEXP.json'
  
const scrollToRef = (ref) =>     window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth"
  });
const useMountEffect = (fun) => useEffect(fun, [])

export default ()=>{
	const myRef1 = useRef(null) ;
    const myRef2 = useRef(null) ;
    const myRef3 = useRef(null) ;
    const myRef4 = useRef(null) ;
    return <div className={styles.wrap}>
 
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/avatar.jpg") } />
            <h2  className={ styles.ff }>Ming Ying, Li</h2>
            <p ><strong>misspog42@gmail.com</strong></p>
            <ul>
                <li> <strong>software engineer</strong></li>
                <li><strong>NLP Lover</strong></li>
                <li><strong>front-end engineer</strong></li>
            </ul> 
            <a href="https://www.linkedin.com/in/ming-ying-li-441930145/">
            <img className={ styles.icon } src={ require("../../assets/images/linkedin.png") } />
            </a>
            
            <p>I am a first year gruduate computer science student at Georgia Institute of Technology.</p>
            <p>I'm interested in Natural Language Processing, Computer Vision,  Machine Learning, and Embedded Systems.</p>
            <p>Recently, I have worked on question generation and answering over knowledge graphs.</p>
            <nav> 
                <ul>
                    <li >
                    <h6  onClick={()=>scrollToRef(myRef1)}>Work Experience</h6>
                    <span></span><span></span><span></span><span></span>
                    </li>
                    <li>
                    <h6  onClick={()=>scrollToRef(myRef2)}>Publications</h6>
                    <span></span><span></span><span></span><span></span>
                    </li>
                    <li>
                    <h6  onClick={()=>scrollToRef(myRef3)}>Projects</h6>
                    <span></span><span></span><span></span><span></span>
                    </li>
                    <li>
                    <h6  onClick={()=>scrollToRef(myRef4)}>Education</h6>
                    <span></span><span></span><span></span><span></span>
                    </li>
                </ul>
            </nav>
        </section>  
         
        {/* Experience */}
        <section className={ styles.work }>
            <div ref={myRef1} className={ styles.title }>
                <div  >
                    <h3 >Work Experience</h3>
                    <div className={ styles.inner } >&nbsp;<br></br></div>
                     
                </div>
                <p><br></br></p>
            </div>
            <WorkCV dataSource = { worksEXPData.data } /> 
        </section> 
        {/* Publications */}
        <section className={ styles.work }>
            <div ref={myRef2} className={ styles.title }>
                <div  >
                    <h3 >Publications</h3>
                    <div className={ styles.inner } >&nbsp;</div>
                </div>
                <p><br></br><br></br></p>
            </div>
             <WorkCV dataSource = { Publications.data } /> 
        </section> 
        {/* Selected Projects */}
        <section className={ styles.work }>
            <div ref={myRef3} className={ styles.title }>
                <div  >
                    <h3 >Selected Projects</h3>
                    <div className={ styles.inner } >&nbsp;</div>
                </div>
                <p><br></br><br></br></p>
            </div>
             <WorkLists dataSource = { worksData.data } /> 
        </section> 
        {/* Education */}
        <section className={ styles.work }>
            <div ref={myRef4}  className={ styles.title }>
                <div  >
                    <h3 >Education</h3>
                    <div className={ styles.inner } >&nbsp;</div>
                </div>
                <p><br></br>You can find more in the work overview.</p>
            </div>
            <WorkCV dataSource = { edu.data } /> 
        </section> 
    </div>
}