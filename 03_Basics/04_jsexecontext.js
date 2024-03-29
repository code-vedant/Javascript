// Javascript Execution Context

// {} -global Execution/enviornment  //allocate in This

// ->Function Execution Context
// ->eval Execution Context

//{} -> memory phase/memory creation phase
//   -> execution phase

////////////////////////////////

// 1. Global execution=>this 
// 2. Memory Phase 
    //    val1 -> undefined
    //    val2 -> undefined
    //    addnum -> defination   (function)
    //    result -> undefined
// 3. Execution phase
    //    val1 -> 10
    //    val2 -> 5
    //    addnum -> [new varible env + execution thread] - get delete after work
    //    result -> undefined        |
    //                               |
    //                               |
    //                               |
    //           !-------------------|
//       memory phase            |
    //    val1 -> undefined      |
    //    val2 -> undefined      |
    //    total -> undefined     |
    //                    execution context
                              //    val1 -> 10
                              //    val2 -> 5
                              //    total -> 15
          

