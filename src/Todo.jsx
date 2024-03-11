// export default function Todo({task}){
//     return(
//         <li>Task: {task} </li>
//     )
// }


// // Conditional rendering 1:
// export default function Todo({task, isDone}){
//     if( isDone === true){
//         return <li> Kha kichu: {task} </li>
//     }
//     else{
//         return <li> khaisha kichu: {task} </li>
//     }
// }

// // Conditional rendering 2:
// export default function Todo({task, isDone}){
//     if( isDone){
//         return <li> Kha kichu: {task} </li>
//     }
//         return <li> khaisha kichu: {task} </li>
    
// }

// // Conditional rendering 3:
// export default function Todo({task, isDone}){
//   return(
//     <li> {isDone ? 'Finished' : 'Work on'} : {task} </li>
//   )
// }

// Conditional rendering 4:
// export default function Todo({task , isDone }){
//     return(
//         <li> {task} {isDone && ':Done'} </li>
//     )
// }

// Conditional rendering 5:
export default function Todo({task , isDone }){
    return(
        <li> {task} {isDone || ':Done'} </li>
    )
}