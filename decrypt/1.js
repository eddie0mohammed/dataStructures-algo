
// const str = '6092811431065039510571141117510710354110410331207041011821010109811181200034210911194121203681123113711461111107212080563037209161092112210341177118510850397106010031167106311941062037';
// const str = '6092010651127124604071141118003400993037211961098109512131066124';
// const str = '6092807900858094';
const str = '8094811431100117003471147124203681260106610910352106811501160117212020366116310671243120511871197041510861268111812471307041410901138121811080421118011461295039511461187120012131206054';
// console.log(str.length);
// console.log((str.length / 4));
// this is a secret
const salt = 2;
// shifter = 0 - 8

// length of 4 each

// var ascii = str.charCodeAt(i);
// var newCode = parseInt(salt) + parseInt(ascii) + parseInt(shifter);
// encrypted += shifter.toString() + newCode.toString().padStart(3,"0");

// for (let i = 0; i < str.length - 3; i++){
//     let temp = '';
//     for (j = i; j < i + 4; j++){
        
//     }
//     console.log(temp);
// }

let newStr = '';
for (let i = 0; i < str.length; i += 4){
    let temp = str.slice(i, i + 4);
    // console.log(temp);
    let shifter = parseInt(temp[0]);

    let rest = temp.slice(1, );
    let num = parseInt(rest);
    // if (rest[0] === '0'){
    //     num = parseInt(rest.slice(1, ));
    // }else {
    //     num = parseInt(rest);
    // }
    let asciCode = num - (2 + shifter);
    newStr += String.fromCharCode(asciCode);
}

console.log(newStr);