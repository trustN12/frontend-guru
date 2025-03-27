const BlogPost2 = () => {
  return (
    <div className="min-h-screen py-24 md:py-32 flex-col items-center">
      <div className="container mx-auto px-4 md:px-6 shadow-lg rounded-lg overflow-hidden">
        {/* Blog Content */}
        <div className="p-6">
          {/* Title and Meta Info */}
          <h1 className="text-4xl font-bold text-gray-900">
            System Design for Frontend Engineers
          </h1>
          <div className="text-gray-600 text-sm mt-2 flex justify-between">
            <p>
              By <span className="font-semibold">Nabarun Biswas</span>
            </p>
            <p>📅 April 28, 2024 | ⏳ 10 mins read</p>
          </div>

          {/* Tags */}
          <div className="mt-3 flex gap-2">
            {["System Design", "Architecture", "Career"].map((tag, index) => (
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
            Frontend system design is crucial for engineers building scalable,
            maintainable, and high-performance web applications. Whether you're
            preparing for an interview or designing large-scale applications,
            understanding key architecture principles is essential.
          </p>

          {/* Blog Sections */}
          <h2 className="text-2xl font-semibold mt-6">
            1. Understanding Frontend Architecture
          </h2>
          <p className="text-gray-700 mt-2">
            A well-structured frontend architecture ensures modularity, performance, and maintainability.
            The key principles include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Component-driven development</li>
            <li>State management strategies</li>
            <li>Performance optimizations</li>
            <li>Efficient API integration</li>
            <li>Code scalability and maintainability</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            2. Component-Driven Development
          </h2>
          <p className="text-gray-700 mt-2">
            Modern frontend applications follow a component-driven architecture. Libraries like React
            encourage breaking UI into reusable components, improving scalability.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`const Button = ({ label, onClick }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
      {label}
    </button>
  );
};`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            3. State Management Strategies
          </h2>
          <p className="text-gray-700 mt-2">
            Choosing the right state management approach is crucial for performance and maintainability.
            Options include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><code>useState</code> – Local state for simple UI changes</li>
            <li><code>useContext</code> – Context API for sharing state across components</li>
            <li>Redux, Zustand, or Recoil for global state management</li>
          </ul>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            4. Performance Optimization Techniques
          </h2>
          <p className="text-gray-700 mt-2">
            Performance bottlenecks can slow down applications. Some key optimizations include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Using <code>useMemo</code> and <code>useCallback</code> to optimize re-renders</li>
            <li>Lazy loading components with <code>React.lazy</code></li>
            <li>Using virtualization for large lists with libraries like <code>react-window</code></li>
          </ul>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`import { useMemo } from "react";

const ExpensiveComponent = ({ value }) => {
  const computedValue = useMemo(() => {
    console.log("Computing...");
    return value * 2;
  }, [value]);

  return <p>Computed Value: {computedValue}</p>;
};`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            5. API Design and Integration
          </h2>
          <p className="text-gray-700 mt-2">
            Frontend applications rely on APIs for data fetching. Choosing the right API design pattern is key.
            RESTful APIs and GraphQL are the most common approaches.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
            {`import { useEffect, useState } from "react";

const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  return response.json();
};

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            6. Scalability and Maintainability
          </h2>
          <p className="text-gray-700 mt-2">
            Large-scale applications require a scalable structure. Using patterns like MVC or MVVM helps in long-term maintainability.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Modular folder structure for clear separation of concerns</li>
            <li>Consistent naming conventions and code formatting</li>
            <li>Automated testing to ensure reliability</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>
          <p className="text-gray-700 mt-2">
            System design is an essential skill for frontend engineers. Understanding architecture principles,
            state management, performance optimization, and API design helps in building scalable, maintainable applications.
          </p>

          <p className="text-gray-800 font-semibold mt-4">Happy coding! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
