
# Angular To Do App

A web app for keeping track and saving your to dos / tasks




## Features


- Add a todo
- Delete a todo
- Cross off todo once completed
- Bootstrap CSS
- Utlizes local storage


## Demo
Live site!
https://angular-to-do-app-beige.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/benjahmin-koenigsberg/Angular-To-Do-App.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ng serve
```


## Usage/Examples
Include data binding where appropriate, as appropriate.

```javascript
  <tr *ngFor="let todo of todos;let i = index;">
              <th scope="row">{{i+1}}</th>
              <td class="{{todo.isComplete?'complete':''}}" (click)="handleComplete(i)">{{todo.name}}</td>
              <td><img src="../assets/trash-can-icon.png" style="width: 1.5rem;" (click)="handleDelete(i)" /></td>
            </tr>
```


## Acknowledgements

- Per Scholas (https://www.perscholas.org)
- Angular To App Tutotial (https://www.youtube.com/watch?v=hdxaL551G_Q)


## Screen Shot

![Alt text](<src/assets/Screen Shot 2024-01-09 at 12.42.09 PM.png>)

## Lessons Learned

What did you learn while building this project?
```
I got some practice / exposire to generate compnents with the CLI and basic familiarility with Angular
```

 What challenges did you face and how did you overcome them?

```
I faced challenges with TypeScript and the ts.config, understanding what all the errors are and the special Angular modules to import.

I learned about the ngFor and a little bit about dependency injection

I watched several tutorials and looked up documentation to understand a little bit more
```
