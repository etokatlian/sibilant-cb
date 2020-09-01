Initially I thought I might try to build an adjacency list and use a topological sort to get the correct order, but I was not able to implement a working solution.

I ended up doing BFS, keeping track of dependencies between tasks and managing a queue. Because we traverse the task list until we find the root task, I actually end up storing my ordered list in reverse. In order to account for this I end up reversing the output list and cast it to a native JS Set to account for duplicates that might arise from multiple chosen-task inputs.

I created multiple functions to handle Sibilant's behavior of returning from conditional blocks, which was breaking the while loop; this also made the code easier to read and allowed for some code re-use.