// Mongo db Questions

export const MongoDBQuestions = [
  {
    question: "What type of database is MongoDB?",
    options: [
      "Relational database",
      "Document-oriented NoSQL database",
      "Graph database",
      "Key-value store"
    ],
    correctOption: "Document-oriented NoSQL database"
  },
  {
    question: "Which data format does MongoDB use to store documents?",
    options: ["XML", "YAML", "JSON/BSON", "CSV"],
    correctOption: "JSON/BSON"
  },
  {
    question: "What is the command to insert one document into a MongoDB collection?",
    options: ["insertAll()", "insertOne()", "add()", "push()"],
    correctOption: "insertOne()"
  },
  {
    question: "Which method is used to update a document in MongoDB?",
    options: ["change()", "updateOne()", "modify()", "editOne()"],
    correctOption: "updateOne()"
  },
  {
    question: "Which method is used to retrieve all documents from a collection?",
    options: ["find()", "getAll()", "fetch()", "read()"],
    correctOption: "find()"
  },
  {
    question: "What is the default `_id` field in MongoDB?",
    options: [
      "A string provided by the user",
      "A foreign key",
      "A unique ObjectId automatically generated",
      "A timestamp"
    ],
    correctOption: "A unique ObjectId automatically generated"
  },
  {
    question: "Which operator is used to match documents with a value greater than a specific value?",
    options: ["$lt", "$gt", "$gte", "$ne"],
    correctOption: "$gt"
  },
  {
    question: "What does the `$set` operator do in MongoDB?",
    options: [
      "Deletes a field",
      "Replaces the whole document",
      "Updates or adds a field",
      "Filters a document"
    ],
    correctOption: "Updates or adds a field"
  },
  {
    question: "What is a collection in MongoDB?",
    options: [
      "A group of databases",
      "A set of tables",
      "A group of documents",
      "A list of columns"
    ],
    correctOption: "A group of documents"
  },
  {
    question: "Which aggregation stage is used to group documents?",
    options: ["$match", "$project", "$group", "$sort"],
    correctOption: "$group"
  },
  {
    question: "Which method deletes all documents that match a condition?",
    options: ["removeAll()", "deleteAll()", "deleteMany()", "dropMany()"],
    correctOption: "deleteMany()"
  },
  {
    question: "What is indexing in MongoDB used for?",
    options: [
      "Adding styles to data",
      "Connecting databases",
      "Improving query performance",
      "Encrypting data"
    ],
    correctOption: "Improving query performance"
  },
  {
    question: "Which command is used to view all databases in MongoDB shell?",
    options: ["show collections", "db.getAll()", "show dbs", "list databases"],
    correctOption: "show dbs"
  },
  {
    question: "How can you limit the number of documents returned in a query?",
    options: ["skip()", "limit()", "slice()", "filter()"],
    correctOption: "limit()"
  },
  {
    question: "What is the use of `$match` in MongoDB aggregation?",
    options: [
      "To match keys with a regex",
      "To filter documents in the pipeline",
      "To join two collections",
      "To sort fields"
    ],
    correctOption: "To filter documents in the pipeline"
  }
];


// Express js Questions

export const ExpressQuestions = [
  {
    question: "What is Express.js?",
    options: ["Database", "Templating engine", "Web framework for Node.js", "JavaScript compiler"],
    correctOption: "Web framework for Node.js"
  },
  {
    question: "Which command installs Express?",
    options: ["npm install express", "install express", "express install", "node install express"],
    correctOption: "npm install express"
  },
  {
    question: "Which method is used to handle GET requests in Express?",
    options: ["app.get()", "app.send()", "app.post()", "get.app()"],
    correctOption: "app.get()"
  },
  {
    question: "Which object is used to send response in Express?",
    options: ["req", "res", "response", "send"],
    correctOption: "res"
  },
  {
    question: "What does `app.listen()` do?",
    options: ["Stops server", "Routes to pages", "Starts server", "Runs JavaScript"],
    correctOption: "Starts server"
  },
  {
    question: "Which method is used to parse JSON in Express?",
    options: ["app.use(json())", "express.json()", "app.json()", "parse.json()"],
    correctOption: "express.json()"
  },
  {
    question: "What is middleware in Express?",
    options: [
      "A template",
      "A way to handle HTTP methods",
      "A function that has access to req, res, and next",
      "A layout file"
    ],
    correctOption: "A function that has access to req, res, and next"
  },
  {
    question: "Which HTTP method is used to update a resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctOption: "PUT"
  },
  {
    question: "What is the default HTTP port?",
    options: ["8080", "3000", "80", "5000"],
    correctOption: "80"
  },
  {
    question: "How do you define a dynamic route in Express?",
    options: ["/user:id", "/user/:id", "/:id/user", "/id=user"],
    correctOption: "/user/:id"
  },
  {
    question: "Which Express method is used for deleting resources?",
    options: ["app.remove()", "app.delete()", "delete()", "app.del()"],
    correctOption: "app.delete()"
  },
  {
    question: "Which module handles routing in Express?",
    options: ["router", "express.Router()", "app.Route", "routeHandler"],
    correctOption: "express.Router()"
  },
  {
    question: "Which middleware is used to handle form data?",
    options: ["express.text()", "express.urlencoded()", "express.json()", "body-parser"],
    correctOption: "express.urlencoded()"
  },
  {
    question: "Which status code means ‘Not Found’?",
    options: ["200", "500", "404", "403"],
    correctOption: "404"
  },
  {
    question: "What is the use of `next()` in Express?",
    options: [
      "To close the app",
      "To go to the next line",
      "To move to the next middleware",
      "To restart the server"
    ],
    correctOption: "To move to the next middleware"
  }
];


// React js Question

export const ReactQuestions = [
  {
    question: "What is the Virtual DOM in React?",
    options: [
      "A lightweight copy of the real DOM",
      "A backend database",
      "A browser API",
      "A server-side rendering tool"
    ],
    correctOption: "A lightweight copy of the real DOM"
  },
  {
    question: "What is JSX in React?",
    options: [
      "A templating language",
      "A syntax extension for JavaScript",
      "A new browser language",
      "A CSS preprocessor"
    ],
    correctOption: "A syntax extension for JavaScript"
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    correctOption: "useState"
  },
  {
    question: "What is the purpose of useEffect in React?",
    options: [
      "To create a new component",
      "To handle events",
      "To perform side effects in function components",
      "To style components"
    ],
    correctOption: "To perform side effects in function components"
  },
  {
    question: "How do you pass data from a parent component to a child component?",
    options: ["Using state", "Using props", "Using hooks", "Using reducers"],
    correctOption: "Using props"
  },
  {
    question: "What is the default behavior of React with respect to component rendering?",
    options: [
      "Components never re-render",
      "Components re-render when state or props change",
      "Components re-render every second",
      "Components re-render only on mount"
    ],
    correctOption: "Components re-render when state or props change"
  },
  {
    question: "What is a key prop and why is it important in React?",
    options: [
      "To set styling",
      "To uniquely identify list items",
      "To pass secret tokens",
      "To track API requests"
    ],
    correctOption: "To uniquely identify list items"
  },
  {
    question: "What does 'lifting state up' mean in React?",
    options: [
      "Moving state to a child component",
      "Moving state to a common ancestor component",
      "Deleting unused state",
      "Creating new hooks"
    ],
    correctOption: "Moving state to a common ancestor component"
  },
  {
    question: "Which hook is used to access context in a functional component?",
    options: ["useState", "useContext", "useRef", "useReducer"],
    correctOption: "useContext"
  },
  {
    question: "How can we optimize React performance?",
    options: [
      "By using CDN",
      "By using useMemo, useCallback, React.memo, etc.",
      "By avoiding CSS",
      "By using only class components"
    ],
    correctOption: "By using useMemo, useCallback, React.memo, etc."
  },
  {
    question: "Which method is used to update state in a class component?",
    options: ["this.setState()", "useState()", "updateState()", "changeState()"],
    correctOption: "this.setState()"
  },
  {
    question: "What does React.memo do?",
    options: [
      "Creates new hooks",
      "Prevents unnecessary re-renders for functional components",
      "Creates a global state",
      "Adds new DOM elements"
    ],
    correctOption: "Prevents unnecessary re-renders for functional components"
  },
  {
    question: "What is the difference between controlled and uncontrolled components?",
    options: [
      "Controlled components use props; uncontrolled use state",
      "Controlled components use state; uncontrolled access the DOM directly",
      "They are the same",
      "Uncontrolled components use Redux only"
    ],
    correctOption: "Controlled components use state; uncontrolled access the DOM directly"
  },
  {
    question: "What does the 'key' prop help React identify?",
    options: [
      "The structure of the DOM",
      "The styling of the app",
      "Which items have changed, are added, or removed",
      "The parent component"
    ],
    correctOption: "Which items have changed, are added, or removed"
  },
  {
    question: "How do you conditionally render components in React?",
    options: [
      "Using if statements or ternary operators",
      "Using switch in HTML",
      "Using React.show()",
      "Using CSS only"
    ],
    correctOption: "Using if statements or ternary operators"
  }
];


// Node js Questions 

export const NodeQuestions = [
  {
    question: "What is Node.js?",
    options: ["A frontend framework", "A runtime for executing JavaScript on the server", "A database", "A browser engine"],
    correctOption: "A runtime for executing JavaScript on the server"
  },
  {
    question: "Which module is used to create a web server in Node.js?",
    options: ["http", "fs", "url", "net"],
    correctOption: "http"
  },
  {
    question: "Which keyword is used to export a module in Node.js?",
    options: ["export", "module.exports", "require", "include"],
    correctOption: "module.exports"
  },
  {
    question: "Which function is used to include external modules in Node.js?",
    options: ["include()", "import()", "require()", "getModule()"],
    correctOption: "require()"
  },
  {
    question: "What is npm?",
    options: ["Node process manager", "Node private module", "Node package manager", "New project maker"],
    correctOption: "Node package manager"
  },
  {
    question: "Which module is used for file operations in Node.js?",
    options: ["http", "url", "fs", "path"],
    correctOption: "fs"
  },
  {
    question: "What is the default port for Node.js apps?",
    options: ["3000", "80", "5000", "8080"],
    correctOption: "3000"
  },
  {
    question: "Which method is used to read a file in Node.js?",
    options: ["fs.readFile()", "fs.openFile()", "read()", "open()"],
    correctOption: "fs.readFile()"
  },
  {
    question: "Node.js uses which engine to execute JS code?",
    options: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"],
    correctOption: "V8"
  },
  {
    question: "What does 'event-driven' mean in Node.js?",
    options: [
      "It uses HTML events",
      "It responds to user clicks",
      "It handles requests asynchronously",
      "It triggers animations"
    ],
    correctOption: "It handles requests asynchronously"
  },
  {
    question: "Which global object in Node is used to access command-line arguments?",
    options: ["args", "process.argv", "console.args", "node.args"],
    correctOption: "process.argv"
  },
  {
    question: "Which Node.js method is used to create a server?",
    options: ["http.createServer()", "server.create()", "new Server()", "initServer()"],
    correctOption: "http.createServer()"
  },
  {
    question: "Which keyword is used to handle errors in Node.js?",
    options: ["try-catch", "throw", "if-else", "handle"],
    correctOption: "try-catch"
  },
  {
    question: "Which method is used to install a Node.js package?",
    options: ["node install", "npm install", "install package", "add module"],
    correctOption: "npm install"
  },
  {
    question: "Which statement is used to import a module?",
    options: ["include()", "require()", "import()", "load()"],
    correctOption: "require()"
  }
];


