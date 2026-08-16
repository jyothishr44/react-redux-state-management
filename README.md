React Redux State Management

A React application demonstrating global state management using Plain Redux and Redux Toolkit. This project showcases how to create a centralized store, manage application state, dispatch actions, and access shared data across multiple components without prop drilling.

---

🚀 Features

- Implemented global state management using Plain Redux
- Implemented global state management using Redux Toolkit
- Shared cart count data across multiple components
- Updated state from the Products component
- Displayed state in the Navbar component
- Demonstrated Redux data flow and centralized state management
- Compared traditional Redux and modern Redux Toolkit approaches

---

🛠️ Technologies Used

- React.js
- Redux
- React Redux
- Redux Toolkit
- JavaScript
- Vite

---

📚 Concepts Covered

Plain Redux

- Store Creation
- Action Types
- Action Creators
- Reducers
- Dispatching Actions
- Reading State from Store
- Provider Configuration
- useDispatch()
- useSelector()

Redux Toolkit

- configureStore()
- createSlice()
- Auto-generated Actions
- Slice Reducers
- Provider Configuration
- useDispatch()
- useSelector()

---

🔄 Redux Flow

User Action
     ↓
Dispatch Action
     ↓
Reducer / Slice Reducer
     ↓
Store Update
     ↓
useSelector()
     ↓
Component Re-render

---

📂 Project Structure

src
│
├── components
│   ├── Navbar.jsx
│   └── Products.jsx
│
├── redux
│   ├── actions.js
│   ├── reducer.js
│   ├── store.js
│   └── cartSlice.js
│
├── App.jsx
├── main.jsx
└── index.css

---

🎯 Implementation

Plain Redux

- Created a centralized store using "createStore()"
- Defined action types and action creators
- Implemented reducers to update state
- Connected React with Redux using "Provider"
- Accessed state using "useSelector()"
- Updated state using "useDispatch()"

Redux Toolkit

- Created slices using "createSlice()"
- Configured store using "configureStore()"
- Generated actions automatically through slices
- Managed state updates with reducers inside slices
- Accessed and updated global state using React Redux hooks

---

💡 What I Learned

- State management in React applications
- Importance of centralized state management
- How Redux eliminates prop drilling
- Redux architecture and data flow
- Difference between Plain Redux and Redux Toolkit
- Managing and sharing data globally across components
- Best practices for scalable React state management

---

▶️ Getting Started

Clone the Repository

git clone <repository-url>

Navigate to Project Directory

cd react-redux-state-management

Install Dependencies

npm install

Start Development Server

npm run dev

---

👨‍💻 Author

Jyothish R

React Developer | Java Full Stack Developer
