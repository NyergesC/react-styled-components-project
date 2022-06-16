import React from 'react';
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP, ProjectH4, GithubButton} from './ProjectElements';


const Project = () => {
  return (
    <>
        <ProjectContainer id='project'>
            <ProjectH1>My Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1}/>
                    <GithubButton href='https://github.com/NyergesC/swiper-node-project' target="_blank">Github</GithubButton>
                    <ProjectH2>Image Gallery</ProjectH2>
                    <ProjectH4>Technologies:</ProjectH4>
                    <ProjectP>Vanilla Javascript, Swiper.js, Node.js, Pure CSS</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}/>
                    <GithubButton href='https://github.com/NyergesC/weather-app-project' target="_blank">Github</GithubButton>
                    <ProjectH2>Weather App</ProjectH2>
                    <ProjectH4>Technologies:</ProjectH4>
                    <ProjectP>Vanilla Javascript, Fetch, Animations</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}/>
                    <GithubButton href='https://github.com/NyergesC/react-styled-components-project' target="_blank">Github</GithubButton>
                    <ProjectH2>Portfolio</ProjectH2>
                    <ProjectH4>Technologies:</ProjectH4>
                    <ProjectP>React, Styled Components</ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    </>
  )
}

export default Project