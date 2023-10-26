# E-Commerce-Back-End-ORM
This project employs the Express.js API, which utilizes Sequelize for communication with a MySQL database, to construct the backend for an online store's website.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- View the GitHub [repository](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM)

## Table of Contents

- [About the Project](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#about-the-project)
  - [Usage](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#usage)

* [Start Your Own](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#start-your-own)
  - [Prerequisites](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#prerequisites)
  - [Installation](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#installation)
  - [Test Instructions](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#test-instructions)

- [License](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#license)
- [Roadmap](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#roadmap)
- [Contribute](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#contribute)
- [My Contact Information](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM#my-contact-information)

## About the Project

This project involves developing a back end for an e-commerce website for an internet retail company. The primary objective is to leverage the latest technologies to enhance the company's competitive edge in the e-commerce market. The implementation will utilize an Express.js API, with the requirement to configure database information in environment variables, allowing seamless connection to a MySQL database using Sequelize.

Additionally, the project includes commands for creating a development database and seeding it with test data. Upon invoking the application, the server will start, and Sequelize models will be synchronized with the MySQL database. Finally, the project aims to ensure that API routes for categories, products, and tags deliver formatted JSON data in response, and that Insomnia Core can successfully perform CRUD operations through API POST, PUT, and DELETE routes, allowing efficient data management in the database.

### Usage

The provided back end serves as a crucial component for the e-commerce website of an internet retail company, aiming to leverage the latest technologies for competitive advantage. To use this back end effectively, the manager must begin by ensuring that the Express.js API is fully functional. After that, they need to configure the database connection by adding the database name, MySQL username, and password to an environment variable file, facilitating seamless access to the database through Sequelize.

Once the database is set up, the manager can initiate the creation of a development database and populate it with essential test data by executing schema and seed commands. After this setup phase, invoking the application will not only start the server but also synchronize the Sequelize models with the MySQL database, ensuring that the system is ready for operation. Finally, the manager can test the API by utilizing Insomnia Core to access GET routes for categories, products, and tags, which will display the data in a user-friendly JSON format. Additionally, they can efficiently perform operations such as creating, updating, and deleting data in the database by testing API POST, PUT, and DELETE routes within Insomnia Core, effectively managing their e-commerce platform.

The following animation will show you how the application's GET routes return all catergories, all products, and all tags tested thru Insomnia.

![]()

The following animation will show you how the application's GET routes return a single catergory, single product, and a single tag tested thru Insomnia.

![]()

The following animation will show you how the application's POST, PUT, and DELETE routes for catergories tested thru Insomnia.

![]()

## Start Your Own

Copy this project on your local computer - follow these next steps.

- npm i
- npm run seed
- npm start

### Prerequisites

Read up on the inquirer and npm packages.

Clone the GitHub repository: git@github<i></i>.com:Thomas-Barnhart/E-Commerce-Back-End-ORM.git

### Test Instructions

Currently no test has been setup for this application.

### License

This is a brief and permissive license that necessitates only the retention of copyright and license notices. It allows the distribution of licensed works, modifications, and larger creations under varied terms, even without sharing the source code.

## Roadmap

Currently there are <u><b>NO</b></u> open issues. Please check the [issues](https://github.com/Thomas-Barnhart/E-Commerce-Back-End-ORM/issues) page on GitHub for any updates.

## Contribute

I welcome pull requests to enhance this project. If you intend to make significant alterations, please initiate an issue beforehand to deliberate on your proposed changes.

## My Contact Information

Email: tmbarnhart1@gmail.com

GitHub Page: [Thomas-Barnhart](https://github.com/Thomas-Barnhart)