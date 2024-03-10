//  export default function Todo({task,isdone}){
//     return (
//         <li>Task : {task}</li>
//     )
// }

// conditional rendering option  1
//  export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>Finished :{task}</li>
//     }
//     else{
//         return <li>Work On :{task}</li>
//     }
// }

// conditional rendering option 2
//  export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finish :{task}</li>
//     }
//     else{
//         return <li>Work On : {task}</li>
//     }
// }


// conditional rendering option 3 ternary
 export default function Todo({task,isDone}){
   return(
    <li> {isDone ? 'Finished': 'Work One'} :{task}</li>
   )
}

