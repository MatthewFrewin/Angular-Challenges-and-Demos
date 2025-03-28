# Angular Challenges and Demos


Challenge 1: Hello Angular (1 hour)
Concepts:

    Setting up an Angular project

    Creating a basic component

    Data binding

Task:

    Install Angular CLI (npm install -g @angular/cli) and create a new project:

ng new hello-angular
cd hello-angular
ng serve

Create a component called welcome:

ng generate component welcome

Modify welcome.component.ts to define a message variable.

Bind message in welcome.component.html:

    <h2>{{ message }}</h2>

    Display <app-welcome></app-welcome> in app.component.html.

✅ Goal: Understand Angular's structure and basic data binding.
🚀 Challenge 2: Interactive Counter (1-2 hours)
Concepts:

    Event binding ((click))

    Property binding ([disabled])

    Two-way data binding ([(ngModel)])

Task:

    Create a counter component:

    ng generate component counter

    Add a count variable in counter.component.ts, initialized to 0.

    Display the count and two buttons to increment/decrement it.

    Use event binding to handle button clicks.

    Disable the decrement button if count === 0.

✅ Goal: Learn event handling and binding techniques.
📊 Challenge 3: Simple Todo List (2-3 hours)
Concepts:

    *ngFor (Looping over arrays)

    User input (<input> and [(ngModel)])

    Component interaction

Task:

    Create a todo component.

    Allow users to add and remove items from an array.

    Display the list dynamically using *ngFor.

    Style completed tasks differently.

✅ Goal: Work with user input and dynamic UI updates.
📡 Challenge 4: Fetch Data from an API (3-4 hours)
Concepts:

    HTTP requests (HttpClient)

    Services

    Async operations (Observable)

Task:

    Create a service to fetch random users from https://randomuser.me/api.

    Inject the service into a users component.

    Display user names and images.

✅ Goal: Understand dependency injection and asynchronous data fetching.
🎨 Challenge 5: Mini Portfolio Site (5-6 hours)
Concepts:

    Routing (RouterModule)

    Multiple components

    Styling with SCSS

Task:

    Create pages: Home, Projects, Contact.

    Use the Angular router to navigate between them.

    Style with a modern look (Bootstrap or Material UI optional).

✅ Goal: Learn routing and build a presentable mini-site.
🏆 Challenge 6: Real-Time Chat App (1 day)
Concepts:

    WebSockets (with Firebase or SignalR)

    Reactive programming (RxJS)

    Forms

Task:

    Use Firebase or a WebSocket server.

    Implement a simple chat UI.

    Update messages in real time.

✅ Goal: Demonstrate real-time updates and RxJS.