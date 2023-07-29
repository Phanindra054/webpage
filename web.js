let x=[];
function doit(){
    let v1=document.getElementById("x1").value;
    let v2=document.getElementById("x2").value;
    let n="";
    let c=0;
    while(v1[c]!="@")
    {
        n+=v1[c];
        c++;
    }
    x.push(n);
    show();
    window.alert("Hi "+n)
    document.getElementById("x1").value="";
    document.getElementById("x2").value="";
}
function show(){
    
    
}
function search(){
    let a=document.getElementById("searchbar").value;
    if(a == "Python Programming Course" || a == "R Programming Course" ||
    a == "SAS Programming Course" || a == "JavaScript Course" ||
    a == "Java Programming Course" || a == "AngularJS Course" ||
    a == "C Programming Course" || a == "Linux Programming Course" ||
    a == "Node.js Course" || a == "C++ Programming Course")
    {
        window.open("https://www.youtube.com/@CodeWithHarry", "_blank");
    }
}
