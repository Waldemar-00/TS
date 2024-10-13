var project = {
    name: 'Project',
    budget: 30000
};
// const mainProject: MainProject = {
//   ...project,
//   mainBudget: 1000000
// }
// console.log( mainProject ) //! { name: 'Project', budget: 30000, mainBudget: 1000000 }
var mainProject = {
    name: project.name,
    mainBudget: 1000000
};
console.log(mainProject); //! { name: 'Project', mainBudget: 1000000 }
