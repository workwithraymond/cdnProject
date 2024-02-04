import {useFetchProjects} from './fetchProjects';

const Project = () => {
  const {loading, projects} = useFetchProjects();


  if(loading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    )
  }

  console.log(loading, projects);
  return (
    <h2>Project</h2>
  )
}
export default Project