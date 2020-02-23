document.getElementById("txtBtn").addEventListener("click",cargarData)
const res=document.getElementById("resultado")
function cargarData(){
    fetch("datos.txt")
        .then((ans)=>{
            return ans.text()
        })
        .then((data)=>{
            res.innerHTML=data
        })
}