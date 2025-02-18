import React from "react";

const Services = () => {

    const child1 = () => {

    }
    const child2 = () => {

    }
    const child3 = () => {

    }
    return (
        <>
            <div style={{fontSize:"2rem",fontWeight:"bold"}}>Mini Projects</div>
            <div class="SEcontainer1">
                <div class="SEchild1" onMouseEnter={child1}>
                    <div>
                    <div className="content">Mini_Project_1</div>
                        <h1 style={{color:"red"}}>To Do List</h1>
                        <h3>React.js and JavaScript</h3>
                        <b>I had created the todo list application in which i can be able to grasp the input from the user 
                            and can be store in the local machine, for some while and being able to track the previous list 
                            in the application when opened it again</b>
                            <img src="./ToDoList.png" alt="not available" style={{width:"20vw", height:"25vh", display:"block",alignItems:"center"}} />
                    </div>
                </div>
                <div class="SEchild2" onMouseEnter={child2}>
                    <div className="content">Mini_Project_2</div>
                    <h1 style={{color:"red"}}>TicTacToe</h1>
                        <h3>java script</h3>
                        <b>Tic-Tac-Toe is a classic two-player strategy game played on a 3x3 grid. Players take turns marking X or O in an empty cell, 
                            aiming to form a horizontal,vertical, or diagonal line of three identical symbols. The first player to achieve this wins, 
                            while a full grid without a winner results in a draw. Simple yet engaging, Tic-Tac-Toe is a fun way to test logical thinking 
                            and strategy.</b>
                        <img src="./Tictactoe.png" alt="img not available" style={{width:"20vw", height:"25vh", display:"block",alignItems:"center"}}/>
                </div>
                <div class="SEchild3" onMouseEnter={child3}>
                    <div className="content">Mini_Project_3</div>
                    <h1 style={{color:"red"}}>Figma Table</h1>
                        <h3>React.js and JavaScript</h3>
                        <b>I created a Figma-inspired table using React.js that allows for efficient data visualization in a structured row 
                            format. The table supports various operations, including sorting, searching within individual columns, and deleting
                            selected rows. Additionally, it enables data entry in a nested tree structure and incorporates pagination for 
                            better navigation. </b>
                        <img src="./FigmaTable.png" alt="img not available" style={{width:"20vw", height:"25vh", display:"block",alignItems:"center"}}/>
                </div>
            </div>
        </>
    )
}

export default Services;