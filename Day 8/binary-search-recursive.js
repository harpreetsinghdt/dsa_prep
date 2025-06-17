function search(arr, target,left=0,right=arr.length-1){
	if(left>right)return -1;
	const mid=Math.floor((left+right)/2);
	if(arr[mid]==target){
		return mid;
	}else if(arr[mid]<target){
		return search(arr,target, mid+1,right);
	}else{
		return search(arr, target, left, mid-1)
	}
}
console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1
console.log(search([5], 5)); // 0
console.log(search([], 1)); // -1