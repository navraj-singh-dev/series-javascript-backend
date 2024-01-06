## Learning & Accomplishements In This Folder

- this folder is dedicated to just understanding what is data modelling for backend.
- spending more time on data modelling and data understanding and diagrams, rather than straight
  jumping to coding.
- spending more time on data modelling and data understanding will always help.
- many practice data models and schemas are created like:

  - todo.model.js
  - user.model.js
  - sub_todo.model.js

- here focus is more on:

  - how to create diagrams and connections and mind-map about the data.
  - how many fields will be created.
  - which data those fields will accept.
  - what will be the data-type of the data being stored.
  - how these fields are connected to overall other fields.
  - basically overall structuring and modelling of incoming data to backend.

- here focus will be mild/less on:
  - mongoose code.
  - overall coding.

<br>

## Mongoose Understanding:

- it is a ODM for mongoDB.
- it helps make Schemas and Models for mongoDB.
- using mongoose all the database queries and tasks can be handled easily without directly dealing with mongoDB.
- 3 main lines of code for mongoose:
  - import it, make a schema, make and export the model. thats it.
- while making different Schemas in different files, there is a concept to give some schema's property, the reference of another Model, this is how to do it:
  ```javascript
  createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ```
  just give `type: mongoose.Schema.Types.ObjectId` and `ref: name_of_any_other_model_you_created_in_other_file`.
  this way that certain field is taking reference of another model.

<br>

## Industry Practices Learned:

- use mvc(model view controller) pattern basically. basically make seperate folders/files for models, controllers etc.
- use naming conventions like, if you are making a `model` inside `model folder`, name it `model_name.model.js`,
  instead of only `model_name.js`.
- do the same naming convention for controllers and other different files.
- it greatly increases the readability about files names.
