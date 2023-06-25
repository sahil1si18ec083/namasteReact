Why we need useMemo?
To improve the performance of the application by eliminating repeating heavy computations.
The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.

We can wrap the expensive function call with useMemo.

The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

In the following example, the expensive function will only run when count is changed and not when todo's are added.

The best use case of useMemo is that if you have a child component and if any state of parent component changes and that state is not send as props to the child component, then we donot need to render the child componet, so we can wrap the child inside the useMemo , so that it will not be re rendered if any state of parent chnages which is not passed via props to child

useMemo accepts two parameters one is a call back function and other is a dependency

If you want any function to be not called unneessarily on any state change(or render ) and want it to called on any particular state chnage that wrap that function inside useMemo and put a depenedency as that state value.
