function firstNonRepeatedChar(str) {
 // Write your code here
	let count = 0;
	for(let i=0;i<str.length;i++){
	    let a = str.charAt(i);
	    count = 0;
	    for(let j=0;j<str.length;j++){
	        if(j==i){
	            continue;
	        }
	        if(str.charAt(j)==a){
	            count++;
	            break;
	        }
	    }
	    if(count==0){
	        return a;
	    }
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
