

function Start(ob){
    clearInterval(Start.interval);
    
    let oneHeight=80; // размер одного элемента
    let numImage=10; // количество элементов
    speedStep=0.2; // скорость изменения скорости
    const arr=[];
    
    for(let i in{A:1,B:1,C:1,D:1}){
            object={
                ob:ob,
            a:document.getElementById(i), // это наш контрол с классом data
          
            speed:Math.sqrt(((ob*numImage)* oneHeight)* speedStep*2), // скорость
            scr:0 
        }; 
        arr.push(object);

    }
            console.log(arr)

    Start.interval=setInterval(
        function (){
            document.getElementById('btn1').disabled=true;
            document.getElementById('btn2').disabled=true;

            let i = arr.length, complete=true;
            while(i--){ 
                let a=arr[i];
                a.scr+=a.speed;
                if(a.speed>2*speedStep){ 
                    a.speed-=speedStep;complete=false;
                } else if(a.speed>0) { 
                    var t= Math.round(a.scr / oneHeight);// по одной линии
                    if(t>=numImage) t=0;
                    a.scr=oneHeight*t;
                    a.speed=0;
                    complete=false;
                }
                if(a.scr>(oneHeight*numImage))
                    a.scr-=oneHeight*numImage;
                a.a.scrollTop=(a.scr);
            
            }
           
         
            if(complete) {   
                document.getElementById('btn1').disabled=false;
                clearInterval(Start.interval)}
            
            
            document.getElementById('btn1').disabled===true? document.getElementById('btn2').disabled=false: document.getElementById('btn2').disabled=true
        },20)
}





