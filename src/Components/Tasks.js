import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import todos from './Todos'
// import '../App.css';
// import classnames from "classnames"
// import JsonData from "../mockturtle.json"
import  "./Tasks.css"

export default function Tasks() {
    const [tasks, setTasks] = useState(todos.slice(0,20));
    const [pageNumber, setPageNumber] = useState(0)

    const tasksPerPage = 5
    const pagesVisited = pageNumber * tasksPerPage

    const displayTasks = tasks.slice(pagesVisited, pagesVisited + tasksPerPage).map(task => {
        return(
            <div className='task'>
                <table>
                <h2>{task.name}</h2>
                <h3>{task.duedate}</h3>
                </table>
            </div>
        )
    })

    const pageCount = Math.ceil(tasks.length/ tasksPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

  return (
    <div>
        {displayTasks}
        <ReactPaginate
        previousLabel = {"Previous"}
        nextLabel = {"Next"}
        pageCount = {pageCount}
        onPageChange = {changePage}
        containerClassName = {"paginationBttns"}
        previousLinkClassName = {"previousBttn"}
        nextLinkClassName = {"nextBttn"}
        disabledClassName = {"paginationDisabled"}
        activeClassName = {"paginationActive"}
        />
    </div>
  )
}
