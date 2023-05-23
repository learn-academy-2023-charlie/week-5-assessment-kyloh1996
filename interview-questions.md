# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:
it references a connection between a parent and child
Researched answer:
In Ruby, calling super within a method of a subclass invokes the corresponding method in the parent class. It allows the subclass to inherit the behavior of the parent class's method and then extend or modify it as needed. The super keyword is typically used when overriding a method in the subclass but still wanting to utilize the functionality provided by the parent class's implementation.
2. What is a gem?

Your answer:
library for ruby
Researched answer:
In Ruby, a gem refers to a packaged library or software component that can be easily installed and used in Ruby projects. Gems are the fundamental unit of code distribution in Ruby, and they follow a specific structure and format that allows them to be easily shared and integrated. Gems can contain reusable code, libraries, frameworks, or even complete applications. They are managed and distributed through the RubyGems package manager, which provides a command-line interface for installing, updating, and removing gems.
3. What is a relational database? Are there other kinds of databases?

Your answer:
 its a database that uses SQL 
Researched answer:
A relational database is a type of database that organizes and stores data into tables consisting of rows and columns. The relationships between these tables are established based on common attributes, and the data is structured using a defined schema. Relational databases use Structured Query Language (SQL) for querying, manipulating, and managing data.

Apart from relational databases, there are several other types of databases, including:

NoSQL databases: These databases provide a non-relational approach to storing and managing data. They are designed to handle unstructured, semi-structured, and rapidly changing data. NoSQL databases offer high scalability, flexible data models, and horizontal scaling capabilities.
Graph databases: These databases are designed to represent and store data in the form of a graph, with nodes representing entities and edges representing relationships between the entities. Graph databases excel at handling complex relationships and are used in applications such as social networks, recommendation systems, and knowledge graphs.
Document databases: Document databases store and retrieve data in the form of flexible, self-describing documents, typically in JSON or BSON format. They allow for schema flexibility and can handle semi-structured data.
Key-value stores: Key-value stores store data as a collection of key-value pairs. They provide simple and efficient storage and retrieval based on keys and are commonly used for caching, session management, and storing frequently accessed data.
4. What are primary keys? Why purpose does a primary key serve?

Your answer:
defines specific columns or rows with the attribute information, allows for organization and makes it elements easier to locate. 
Researched answer:
A primary key is a special column or set of columns in a database table that uniquely identifies each record or row within the table. The primary key serves several purposes:

Uniquely identifies records: The primary key ensures that each record in the table has a unique identifier. No two rows can have the same primary key value, allowing for unambiguous identification of individual records.

Data integrity: The primary key enforces data integrity by preventing duplicate or null values in the key column(s). This constraint ensures that the data remains consistent and accurate.

Indexing: Primary keys are often indexed, which improves the performance of queries that involve searching, sorting, or joining data based on the primary key. Indexing allows for efficient retrieval of records based on the primary key value.

Relationship establishment: Primary keys play a crucial role in establishing relationships between tables in a relational database. In related tables, the primary key of one table is referenced as a foreign key in another table, creating a link or association between the two tables.

Overall, the primary key is a fundamental concept in relational databases, providing a unique identifier for records, maintaining data integrity, enabling efficient data access, and facilitating relationships between tables.
5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
CRUD :
Create 
Read 
Updare
delete
The pillers of a web application because these are things expected from a user. 
Get, Post, Put, Patch, and Delete are the 5 verbs.  Get correlates with read. Post correlates with create. Put and patch correlate with update. Delete correlates to delete.

Researched answer:
The five HTTP verbs, also known as CRUD verbs, are:

GET: Corresponds to the "Read" operation in CRUD. It is used to retrieve or fetch data from a server. GET requests should only retrieve data and should not have any other side effects. They are idempotent, meaning that making the same GET request multiple times should not change the server's state.

POST: Corresponds to the "Create" operation in CRUD. It is used to submit data to the server to create a new resource. POST requests may cause side effects, such as creating new records or updating existing records. They are not idempotent, as making the same POST request multiple times may result in multiple resource creations.

PUT: Corresponds to the "Update" operation in CRUD. It is used to update or replace an existing resource on the server with the provided data. PUT requests are idempotent, meaning that making the same PUT request multiple times should have the same effect as a single request.

PATCH: Corresponds to the "Update" operation in CRUD. It is used to partially update an existing resource on the server with the provided data. PATCH requests are typically used when you want to modify specific fields or properties of a resource without replacing the entire resource. Like PUT requests, PATCH requests are idempotent.

DELETE: Corresponds to the "Delete" operation in CRUD. It is used to delete an existing resource on the server. DELETE requests are idempotent, meaning that making the same DELETE request multiple times should have the same effect as a single request.
## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:

2. RESTful routes:

3. ERB:

4. Params:

5. API:
