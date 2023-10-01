public class StackClone {
    int[] stackArr = new int[100];
    int pushPointer = -1;


    /*
    * Basic push: array is not full, we check the pointer and add  and increment pointer
    *
    * */
    public void push(int element){
      // if array if full, pointer is at length of array -1
      if(pushPointer == stackArr.length -1){

          return;
      }
      pushPointer++;
      stackArr[pushPointer] = element;
    }

    public int pop(){
        // Stack is not initialized
        if(pushPointer < 0){
            return -1;
        }


        int poppedElement = stackArr[pushPointer];

        // remove that element from array
        pushPointer--;

        return poppedElement;
    }
}
