Why we need useMemo?
To improve the performance of the application by eliminating repeating heavy computations.
The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.

We can wrap the expensive function call with useMemo.

The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

In the following example, the expensive function will only run when count is changed and not when todo's are added.