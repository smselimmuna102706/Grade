var Marks = prompt("Enter the Grade : ");

if(Marks>=80 && Marks<=100){
    document.write("Grade A+");
}
else if(Marks>=70 && Marks<=79){
    document.write("Grade A");
}
else if(Marks>=60 && Marks<=69){
    document.write("Grade A-");
}

else if(Marks>=50 && Marks<=59){
    document.write("Grade B");
}

else if(Marks>=40 && Marks<=49){
    document.write("Grade C");
}

else if(Marks>=33 && Marks<=39){
    document.write("Grade D");
}

else{
    document.write("Grade fale");
}

