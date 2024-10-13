interface Project
{
  name: string,
  budget: number,
}

const project: Project =
{
  name: 'Project',
  budget: 30000
}

interface MainProject {
  name: string,
  mainBudget: number
}

// const mainProject: MainProject = {
//   ...project,
//   mainBudget: 1000000
// }
// console.log( mainProject ) //! { name: 'Project', budget: 30000, mainBudget: 1000000 }

const mainProject: MainProject = {
  name: project.name,
  mainBudget: 1000000
}
console.log(mainProject) //! { name: 'Project', mainBudget: 1000000 }
