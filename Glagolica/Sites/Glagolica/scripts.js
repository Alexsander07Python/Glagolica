function Information(){
    window.open("../Information/information.html");
}
function gitHubAccount(){
    window.open("https://github.com/Alexsander07Python")
}


function TranslateText(){
    let glagolica = ["Ⰰ", "Ⰱ", "Ⰲ", "Ⰳ", "Ⰴ", "Ⰵ", "Ⰶ", "Ⰹ", "Ⰺ", "Ⰻ", "Ⰽ", "Ⰾ", "Ⰿ", "Ⱀ", "Ⱁ", "Ⱂ", "Ⱃ", "Ⱄ", "Ⱅ", "Ⱆ", "Ⱇ", "Ⱈ", "Ⱋ", "Ⱌ", "Ⱍ", "Ⱎ", "Ⱏ", "Ⱐ", "Ⱓ", "Ⱔ", "Ⰸ"];
    let bulgarian = ["а", "б", "в", "г", "д", "е", "ж", "й", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "щ", "ц", "ч", "ш", "ъ", "ь", "ю", "я", "з"];
    var sizeGlagolitic=glagolica.length;
    //var sizeBulgarian=bulgarian.length;
    var inputTextBulgarian=document.getElementById("boxBulgarian").value;
    var inputTextBulgarian=prompt("Bulgarian - ");
    var inputText2="";
    var inputTextLenght=inputTextBulgarian.length;
    var outputText="";
    var counter1=0;
    var counter2=0;
    var space=0;

    alert("Text lenght - "+inputTextLenght);

    for(let i=0; i<inputTextLenght; i++){
        if(inputTextBulgarian[i]==" "){
            inputText2=inputText2+"_";
        }
        else{
            alert(inputTextBulgarian[i]);
            inputText2=inputText2+inputTextBulgarian[i];
        }
    }

    alert("Text2-"+inputText2);
    inputTextBulgarian=inputText2;
    alert("Text-"+inputTextBulgarian);

    while(counter1<inputTextLenght){
        alert("input letter - "+inputTextBulgarian[counter1]);
        while(counter2<sizeGlagolitic){
            if(inputTextBulgarian[counter1]==bulgarian[counter2]){
                outputText=outputText+glagolica[counter2];
                alert(glagolica[counter2]);
            }
            if(inputTextBulgarian[counter1]=="_"){
                if(space==0){
                    outputText=outputText+" ";
                    space=1;
                }
                //alert("__");
            }
            if(inputTextBulgarian[counter1]!="_" && inputTextBulgarian[counter1]!=bulgarian[counter2]){
                //alert("-");
            }
            counter2=counter2+1;
            //alert("Count2-"+counter2);
        }
        counter1=counter1+1;
        //alert("Count1-"+counter1);
        counter2=0;
        space=0;
    }

    //alert("Input text - "+inputTextBulgarian);
    alert(outputText);
    document.getElementById("Glagolica").innerHTML=outputText;
    console.log("Output text - "+outputText);
    //for(let i=0; i<31; i++){
    //    alert(glagolica[i]);
    //}
}