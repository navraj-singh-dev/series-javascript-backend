## Learning & Accomplishements In This Folder

- continuation of data modelling with mongoose...

  - practice data models & schemas created in this 04 folder:
    - E-Commerce (category, order, product, user) 4 schemas + 4 models.
    - Hospital Management (doctor, patient, hospital, medical_record) 4 schemas + 4 models.

- mongoose usage:
  - mongoose will be heavily used here.
  - how references to other models are given.
  - how data mini schemas for a main schema is created.
  - how complex schemas and mini schemas are approached and coded.

<br>

## Mongoose Understanding:

- used `enum` property to make predefined options and values for a document field.
- create mini schemas to tackle more complex schemas and connections.

<br>

## Industry Practices Learned:

- dont store images, pdf, multimedia etc in mongoDB or databases in general directly.reason is that it is slow to fetch and work with (databases are bad and slow with files.).

- instead, store them on aws, google drives etc or anywhere else and just use links to refer to that image or file.
