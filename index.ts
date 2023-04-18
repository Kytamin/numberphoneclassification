function classification(phoneNumbers:string[]) {
    let Viettel=[]
    let Mobifone=[]
    let Vinaphone=[]
    for (let i = 0; i < phoneNumbers.length; i++) {
        if((phoneNumbers[i].substring(0,3)==='096')||(phoneNumbers[i].substring(0,3)==='097')||(phoneNumbers[i].substring(0,3)==='098')){
              Viettel.push(phoneNumbers[i])
        }else if((phoneNumbers[i].substring(0,3)==='090')||(phoneNumbers[i].substring(0,3)==='093')){
              Mobifone.push(phoneNumbers[i])
        }else if((phoneNumbers[i].substring(0,3)==='091')||(phoneNumbers[i].substring(0,3)==='094')){
            Vinaphone.push(phoneNumbers[i])
        }
    }
    return`Viettel:${Viettel},Mobi:${Mobifone},Vinaphone:${Vinaphone}`
}



let phoneNumbers1 =['0988215979','09632532890','09023818283','0932521456','0911848572','0942818295']


console.table(classification(phoneNumbers1))