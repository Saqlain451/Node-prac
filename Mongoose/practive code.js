
const compare = (str,letter)=>{
    let count=0;
    const arrStr = str.split("") 
    arrStr.forEach(element => {
        if(element === letter){
            count++;
        }
    });
    console.log(count);
}

compare("saqlain","a")


const vowelChecker = (str)=>{
    const strArr = str.split("");
    const vowel = ['a','e','i','o','u']
    let vowelNewArr = [];
    let constArr = [];
    strArr.forEach((ele)=>{
        if (vowel.indexOf(ele) === -1){
            // push consonent
            constArr.push(ele);
        }else{
          // push vowel
          vowelNewArr.push(ele);
        }
    })
    console.log(vowelNewArr);
    console.log(constArr);
}

vowelChecker("saqlain")

const resversStr = (str)=>{
    const strArr = str.split("");
    console.log(strArr);
    let revArr = []
    // for(let i=strArr.length-1; i>=0; i--){
    //     console.log(strArr[i])
    //     revArr.push(strArr[i]);
    // }

    for(let i=0; i<strArr.length; i++){
        console.log(strArr[i])
        revArr.unshift(strArr[i]);
    }
    // console.log(revArr);
    console.log(revArr.join(""));
}

resversStr("saq");

// 543%10 = 3
// 543/10 = 54

const revNum = (num)=>{
    let  x= num;
    let sum = 0;
    while(x>=1){
        let temp = Math.floor (x%10);
        console.log(temp)
        sum = sum*10+temp;
        console.log(sum)
        x= x/10; 
        
    }
    console.log(sum);
}

revNum(345)


const arr1 = [8,4,56,23,45];
const sort = (arr)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            let c = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = c;
        }
    }

    let revSort = [];
    arr.forEach((ele)=>{
        console.log(ele)
        revSort.unshift(ele)
    })
    console.log(revSort)
}


console.log(sort(arr1))

