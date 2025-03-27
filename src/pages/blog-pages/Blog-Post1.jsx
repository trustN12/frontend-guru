const BlogPost1 = () => {
  return (
    <div className="min-h-screen py-24 md:py-32 flex-col items-center">
      <div className="container mx-auto px-4 md:px-6 shadow-lg rounded-lg overflow-hidden">
        {/* Blog Content */}
        <div className="p-6">
          {/* Title and Meta Info */}
          <h1 className="text-4xl font-bold text-gray-900">
            Mastering React Hooks: Beyond the Basics
          </h1>
          <div className="text-gray-600 text-sm mt-2 flex justify-between">
            <p>
              By <span className="font-semibold">Nabarun Biswas</span>
            </p>
            <p>📅 May 12, 2024 | ⏳ 10 mins read</p>
          </div>

          {/* Tags */}
          <div className="mt-3 flex gap-2">
            {["React", "JavaScript", "Web Development"].map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Blog Introduction */}
          <p className="text-gray-700 mt-4">
            React Hooks have revolutionized the way developers build and manage
            state in functional components. While most developers are familiar
            with basic hooks like <code>useState</code> and{" "}
            <code>useEffect</code>, mastering advanced hooks and patterns can
            significantly improve component architecture, performance, and
            reusability.
          </p>

          {/* Blog Sections */}
          <h2 className="text-2xl font-semibold mt-6">
            1. Optimizing Performance with <code>useMemo</code> and{" "}
            <code>useCallback</code>
          </h2>
          <p className="text-gray-700 mt-2">
            When dealing with expensive calculations or unnecessary re-renders,{" "}
            <code>useMemo</code> and <code>useCallback</code> can be powerful
            tools.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`import { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return num * 2;
  }, [num]);

  return <p>Result: {result}</p>;
}`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            2. Creating Custom Hooks for Reusability
          </h2>
          <p className="text-gray-700 mt-2">
            Instead of duplicating logic across multiple components, we can
            extract shared logic into a custom hook.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            3. Controlling Components with <code>useReducer</code>
          </h2>
          <p className="text-gray-700 mt-2">
            For complex state management, <code>useReducer</code> can be more
            structured than <code>useState</code>.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`import { useReducer } from 'react';

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            4. Handling Side Effects with <code>useEffect</code> Best Practices
          </h2>
          <p className="text-gray-700 mt-2">
            Avoiding unnecessary re-renders is crucial for performance. Always
            specify dependencies correctly in <code>useEffect</code> and clean
            up effects when needed.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`useEffect(() => {
  const subscription = someAPI.subscribe();
  return () => {
    subscription.unsubscribe();
  };
}, []);`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            5. Leveraging Context with <code>useContext</code>
          </h2>
          <p className="text-gray-700 mt-2">
            Instead of prop drilling, use <code>useContext</code> to share
            global state across components.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`const ThemeContext = React.createContext();
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>
          <p className="text-gray-700 mt-2">
            Mastering React Hooks goes beyond just knowing how they work.
            Understanding advanced patterns and best practices helps build
            scalable, efficient, and maintainable applications. By optimizing
            performance, creating reusable hooks, using reducers, managing
            effects properly, and leveraging context, you can take your React
            development skills to the next level.
          </p>

          <p className="text-gray-800 font-semibold mt-4">Happy coding! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost1;
