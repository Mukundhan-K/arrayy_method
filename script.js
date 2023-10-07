
let subbtn = document.getElementById('subbtn');

subbtn.onclick = () => {
    let sringg = document.getElementById('sringg').value;
    var splited_arr = sringg.split(' ')
    let inputt = document.getElementById('inputt');
    let startval = document.getElementById('startval').value;
    let endval = document.getElementById('endval').value;
    let str2 = document.getElementById('str2').value;
    let rs_span = document.getElementById('rs_span');
    let result = document.getElementById('result');


    console.log('hi');
    console.log(sringg);

    // option
    let optionn = inputt.options[inputt.selectedIndex].value;

    console.log(optionn);

    //  switch case
    let resstr = 0;
    let resstr2 = 0 ;

    switch (optionn) {

        case 'LENGTH':
            resstr = splited_arr.length;
            break;

        case 'SLCICE':
            resstr = splited_arr.slice(Number(startval), Number(endval));;
            break;

        case 'SPLICE':
            resstr2 = splited_arr.splice(Number(startval), Number(endval));;
            resstr =splited_arr;
            break;

        case 'TOSTRING':
            resstr = splited_arr.toString();
            break;

        case 'POP':
            resstr2 = splited_arr.pop();
            resstr=splited_arr;
            break;

        case 'PUSH':
            resstr2 = splited_arr.push(Number(str2));
            resstr=splited_arr;
            break;

        case 'SHIFT':
            resstr2 = splited_arr.shift();
            resstr=splited_arr;
            break;

        case 'UNSHIFT':
            resstr2 = splited_arr.unshift(Number(str2));
            resstr=splited_arr;
            break;

        case 'CONCAT':
            let spl_concat = str2.split(' ');
            resstr = splited_arr.concat(spl_concat);
            break;

        case 'JOIN':
            resstr = splited_arr.join(str2);
            break;

        case 'delete':
            resstr2 = delete splited_arr[str2];
            resstr=splited_arr;
            break;

        default:
            break;
    }


    console.log(resstr);

    rs_span.textContent = inputt.options[inputt.selectedIndex].text;
    result.textContent = resstr;
    result.classList.add('border', 'border-2', 'border-warning');

};


function changee(){
    let enstr = document.getElementById('enstr');
    sringg = document.getElementById('sringg').value;

    console.log(sringg);
     splited_arr = sringg.split(' ')
    enstr.innerText =splited_arr;
}

let optta= document.querySelectorAll('option');
console.log(optta);

function artt(){

        let spadis= document.getElementById('spadis');
        let spadis2= document.getElementById('spadis2');  
        let inputt = document.getElementById('inputt');      
        let optionn = inputt.options[inputt.selectedIndex].value;  

        console.log(`in artt ${optionn} `);

        if(optionn == 'SLCICE'||optionn == 'SPLICE'){
            
            spadis.style.display="flex";

            spadis2.style.display="none";

        }

        else if(optionn == 'PUSH'||optionn == 'UNSHIFT'||optionn == "CONCAT" || optionn == "JOIN" || optionn == "delete" ) {
    
            spadis2.style.display="flex";
            spadis.style.display="none";

        }

        else{
            spadis.style.display="none";
            spadis2.style.display="none";

        };

        let startval = document.getElementById('startval');
        let endval = document.getElementById('endval');
        let str2 = document.getElementById('str2');
    
        startval.value="";
        endval.value="";
        str2.value="";
    };




