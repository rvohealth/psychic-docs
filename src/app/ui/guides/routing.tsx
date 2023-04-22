import React from "react";
import CodeExample from "../code-example";

export default function GuidesRouting() {
  return (
    <React.Fragment>
      <h2 id="routing">Routing</h2>

      <CodeExample
        id="routing-configuration"
        expandLevel={2}
        description={
          <p>
            Your route configuration is located at{" "}
            <span className="hl">conf/routes.ts</span>. It contains&nbsp; all
            entries which are exposed as endpoints to your server.
          </p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.get('/helloworld', 'todos#helloworld')
}
`}
      ></CodeExample>

      <h3 id="routing-crud">CRUD</h3>

      <CodeExample
        id="routing-crud-example"
        expandLevel={2}
        description={
          <p>
            You can add routes using the standard http methods, such as&nbsp;
            <span className="hl">GET</span>,&nbsp;
            <span className="hl">POST</span>,&nbsp;
            <span className="hl">PUT</span>,&nbsp;
            <span className="hl">PATCH</span>, and&nbsp;
            <span className="hl">DELETE</span>. In the below example, all the
            different http&nbsp; verbs will be pointing to the ping controller's
            ping method.
          </p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.get('/ping', 'ping#ping')
  r.post('/ping', 'ping#ping')
  r.put('/ping', 'ping#ping')
  r.patch('/ping', 'ping#ping')
  r.delete('/ping', 'ping#ping')
}
`}
        results={`\
GET     /ping  ping#ping
POST    /ping  ping#ping
PUT     /ping  ping#ping
PATCH   /ping  ping#ping
DELETE  /ping  ping#ping
`}
      ></CodeExample>

      <h3 id="routing-resources">Resourceful routes</h3>

      <CodeExample
        id="routing-resources-example-1"
        expandLevel={2}
        description={
          <p>
            You can also use resourceful routing as shorthand to quickly model
            standard http routes for one of your underlying models, like so:
          </p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.resources('user')
}
`}
        results={`\
GET     /users      users#index
POST    /users      users#create
GET     /users/:id  users#show
PUT     /users/:id  users#update
PATCH   /users/:id  users#update
DELETE  /users/:id  users#destroy
`}
      ></CodeExample>

      <CodeExample
        id="routing-resources-example-2"
        expandLevel={2}
        description={
          <p>
            You can use resourceful routes, but restrict the routes to only a
            collection, like so:
          </p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.resources('user', { only: ['create', 'index'] })
  // same as:
  r.resources('user', { except: ['show', 'update', 'destroy'] })
}
`}
        results={`\
GET     /users  users#index
POST    /users  users#create
`}
      ></CodeExample>

      <CodeExample
        id="routing-resource-example"
        expandLevel={2}
        description={
          <p>
            Additionally, use the <span className="hl">resource</span> method to
            do the same, but with a singularized route endpoint. This is
            generally done when you do not need to pass an id to identify the
            resource, such as when the resource will always belong to the
            authenticated user.
          </p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.resource('user')
}
`}
        results={`\
GET     /user  user#show
PUT     /user  user#update
PATCH   /user  user#update
DELETE  /user  user#destroy
`}
      ></CodeExample>

      <h3 id="routing-nesting">Nested resources</h3>

      <CodeExample
        id="routing-nesting-example"
        expandLevel={2}
        description={
          <p>
            Passing a third argument to our resources method, we can create edge
            routes against our resource, like so:
          </p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.resources('users', { only: ['create'] }, r => {
    r.get('hi', 'users#hi')
  })
}
`}
        results={`\
POST /users    users#create
GET  /users/hi users#hi
`}
      ></CodeExample>

      <h3 id="routing-namespacing">Namespaced routes</h3>

      <CodeExample
        id="routing-namespacing-example"
        expandLevel={2}
        description={
          <p>
            You can also use namespacing to reflect folder and uri structures at
            once. The following&nbsp; example would require the respective users
            controller to be located at&nbsp;
            <span className="hl">app/controllers/api/v1/users.ts</span>
          </p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.namespace('api', r => {
    r.namespace('v1', r => {
      r.get('hi', 'users#hi')
    })
  })
}
`}
        results={`\
GET api/v1/hi api/v1/users#hi
`}
      ></CodeExample>
    </React.Fragment>
  );
}
