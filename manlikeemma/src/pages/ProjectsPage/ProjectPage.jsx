import React from 'react'
import './projectpage.css'
import { BsFolder } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { TbExternalLink } from 'react-icons/tb'

export const ProjectPage = () => {
  return (
    <div className="project-page-root">
      <div className="page-head">
        <h2>Some Things I’ve Built</h2>
        <hr style={{ width: "200px", border: "2px solid hsl(0, 0%, 67%)" }} />
      </div>
      <div className="project-page-body">
        <div className="project-card-container">
          <div className="project-card">
            <div className="project-card-icon-head">
              <BsFolder className='project-card-icon-folder' />
              <div className='project-card-icon-share'>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <FiGithub className='project-card-icon' />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <TbExternalLink className='project-card-icon' />
                </a>
              </div>
            </div>
            <div className="project-card-desc">
              <h3>Ibeji Foundation</h3>
              <h4>Building a fullstack website for a Non Govermantal Agency</h4>
            </div>
            <div className="project-card-tech">
              <h5>CSS</h5>
              <h5>MongoDB</h5>
              <h5>React JS</h5>
              <h5>Express JS</h5>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-head">
              <BsFolder className='project-card-icon-folder' />
              <div className='project-card-icon-share'>
                <a href={'https://github.com/alabiemmanuel177/finalyearproject_frontend.git'} target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <FiGithub className='project-card-icon' />
                </a>
                <a href={'https://finalyearproject-frontend.vercel.app/'} target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <TbExternalLink className='project-card-icon' />
                </a>
              </div>
            </div>
            <div className="project-card-desc">
              <h3>BUCODEL LMS</h3>
              <h4>Building a Learning Mangement System for
                Babcock University Center for Open and Distance Learning </h4>
            </div>
            <div className="project-card-tech">
              <h5>JavaScript</h5>
              <h5>CSS</h5>
              <h5>React JS</h5>
              <h5>MUI</h5>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-head">
              <BsFolder className='project-card-icon-folder' />
              <div className='project-card-icon-share'>
                <a href={'https://github.com/TechGateInc/RoyalGateGroups.git'} target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <FiGithub className='project-card-icon' />
                </a>
                <a href={'https://royal-gate-groups.vercel.app'} target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                    <TbExternalLink className='project-card-icon' />
                  </a>
                </a>
              </div>
            </div>
            <div className="project-card-desc">
              <h3>RoyalGate Groups</h3>
              <h4>Building a fullstack website for a Non Govermantal Agency</h4>
            </div>
            <div className="project-card-tech">
              <h5>Node</h5>
              <h5>MongoDB</h5>
              <h5>React JS</h5>
              <h5>Express JS</h5>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-head">
              <BsFolder className='project-card-icon-folder' />
              <div className='project-card-icon-share'>
                <a href={'/'} target="_blank" rel="noopener noreferrer" className='link_icon'> <FiGithub className='project-card-icon' style={{ textDecoration: "none" }} /></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <TbExternalLink className='project-card-icon' />
                </a>
              </div>
            </div>
            <div className="project-card-desc">
              <h3>BUCODEL LMS SERVER</h3>
              <h4>Building a fullstack website for a Non Govermantal Agency</h4>
            </div>
            <div className="project-card-tech">
              <h5>Node</h5>
              <h5>MongoDB</h5>
              <h5>Socket IO</h5>
              <h5>Express JS</h5>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-head">
              <BsFolder className='project-card-icon-folder' />
              <div className='project-card-icon-share'>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <FiGithub className='project-card-icon' />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <TbExternalLink className='project-card-icon' />
                </a>
              </div>
            </div>
            <div className="project-card-desc">
              <h3>Ibeji Foundation</h3>
              <h4>Building a fullstack website for a Non Govermantal Agency</h4>
            </div>
            <div className="project-card-tech">
              <h5>CSS</h5>
              <h5>MongoDB</h5>
              <h5>React JS</h5>
              <h5>Express JS</h5>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-head">
              <BsFolder className='project-card-icon-folder' />
              <div className='project-card-icon-share'>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <FiGithub className='project-card-icon' />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                  <TbExternalLink className='project-card-icon' />
                </a>
              </div>
            </div>
            <div className="project-card-desc">
              <h3>Ibeji Foundation</h3>
              <h4>Building a fullstack website for a Non Govermantal Agency</h4>
            </div>
            <div className="project-card-tech">
              <h5>CSS</h5>
              <h5>MongoDB</h5>
              <h5>React JS</h5>
              <h5>Express JS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
