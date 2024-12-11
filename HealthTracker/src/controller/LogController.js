import { createConnectionObject } from "../config/DbConfig.js";

const connection = createConnectionObject();

export function saveLog(request,response){
    try{
        const loge=request.body;
        const insertQry = `INSERT INTO logentry (exercisename, duration, meal, calories, hydration, sleep) 
                           VALUES ('${loge.exercisename}', ${loge.duration}, '${loge.meal}', ${loge.calories}, ${loge.hydration}, ${loge.sleep})`;

        connection.query(insertQry, (error)=>{
            if (error) {
                console.error(error);
                response.status(500).send({ message: "Something went wrong" });
            } else {
                 response.status(201).send({ message: "Log saved successfully" });
            }
        });
    } catch(error){
        response.status(500).send({ message: "Something went wrong" });
    }
}

export  function getAllLog(request,response){
    try{
        const fetchQry = "SELECT id, exercisename, duration,meal,calories, hydration,sleep FROM logentry";
        connection.query(fetchQry,(error,result)=>{
            if(error){
                console.log(error);
                response.status(500).send({message:"Something went wrong"});
            }
            else response.status(200).send(result);   
        })
    } catch(error) {
        console.log(error)
        response.status(500).send({message:"something went wrong"});
    }
}

export  function updateLog(request,response){
    const id = request.params.id;
    const {exercisename,duration,meal,calories,hydration,sleep}=request.body;
    const updateQuery = `UPDATE logentry SET  exercisename = ?, duration= ?, meal = ?, calories = ?, hydration = ?, sleep = ? WHERE id = ?`;
    connection.query(updateQuery,[exercisename,duration,meal,calories,hydration,sleep,id],(error,result)=>{
        if(error){
            console.error(error);
            response.status(500).send({message:"Error Updating User"});
        }
        else{
            if(result.affectedRows === 0 ){
                response.status(404).send({message :`Log Entries not found`});
            } else {
                response.status(200).send({message:`Log Entries Update Successfully`});
            }
        }  
    });
} 

export  function deleteLog(request,response){
    const id = request.params.id;
    const deleteQuery = `DELETE from logentry  WHERE id = ?`;
    connection.query(deleteQuery,[id],(error,result)=>{
        if(error){
            console.error(error);
            response.status(500).send({message:"Error Occur"});
        }
        else {
                response.status(200).send({message:`LogEntry delete Successfully`});
        }
        
    });
} 

