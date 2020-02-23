//button to txt
document.getElementById("txtBtn").addEventListener("click",cargarData)
//Button to process json
document.getElementById("jsonBtn").addEventListener("click",cargarJson)
//This is to show an answer
const res=document.getElementById("resultado")

//Functions
function cargarData(){
    fetch("datos.txt")
        .then((ans)=>{
            return ans.text()
        })
        .then((data)=>{
            res.innerHTML=data
        })
        .catch((error)=>{
            res.innerHTML=error
        })
}
//Load JSON
function cargarJson(){
    fetch('empleados.json')
        .then((connection)=>{
            return connection.json()
        })
        .then((data)=>{
            data.forEach(element => {
                console.log(element)
                let employee=document.createElement("li")
                employee.innerHTML=`Nombre: ${element.nombre}, puesto: ${element.puesto}`
                res.appendChild(employee)
            });
        })
}