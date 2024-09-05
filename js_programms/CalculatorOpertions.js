function Addition()
{
    let a=eval(document.getElementById("n1").value)
    let b=eval(document.getElementById("n2").value)
    let sum=a+b;
    document.getElementById("Sum").innerHTML=sum
   
}
function substraction()
{
    let a=eval(document.getElementById("n1").value)
    let b=eval(document.getElementById("n2").value)
    let substraction=a-b;
    document.getElementById("sub").innerHTML=substraction

}
function multiplication()
{
    let a=eval(document.getElementById("n1").value)
    let b=eval(document.getElementById("n2").value)
    let multiplication=a*b;
    document.getElementById("mul").innerHTML=multiplication

}
function division()
{
    let a=eval(document.getElementById("n1").value)
    let b=eval(document.getElementById("n2").value)
    let division=a/b;
    document.getElementById("div").innerHTML=division

}
function moddivision()
{
    let a=eval(document.getElementById("n1").value)
    let b=eval(document.getElementById("n2").value)
    let moddivision=a%b;
    document.getElementById("moddiv").innerHTML=moddivision

}
