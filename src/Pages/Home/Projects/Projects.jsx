import axios from "axios";
import  { useEffect, useState } from "react";
import ProjectCard from "../../../Component/ProjectCard";



const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        axios.get('/data.json')
        .then(res=> {
          console.log(res.data)
          setProjects(res.data)
        })
        .catch(error=> {
          console.error(`Error fetching data: ${error.message}`)
        })
    },[])
  return (
    <div className="my-10 pb-10 px-5">
      <h3 className="text-center text-3xl font-bold mb-10">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
            {
              projects.map(project=> <ProjectCard key={project.id} project={project}></ProjectCard>)
            }
      </div>
    </div>
  );
};

export default Projects;
