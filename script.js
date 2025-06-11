function calculateAge(){
    const dob = new Date(document.getElementById('dob').value);
    let age=2025-dob.getFullYear();
    document.getElementById("result").innerText=`u are ${age} year old;`
}