/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Database from '@ioc:Adonis/Lucid/Database'

import Route from '@ioc:Adonis/Core/Route'

// Route.group(() =>{
// Route.get('/', ('ProductsController.getAll') );
// Route.get('/:id', ('ProductsController.getInit') );
// Route.post('/', ('ProductsController.create') );
// Route.put('/:id', ('ProductsController.update') );
// Route.delete('/:id', ('ProductsController.destory') );}).prefix('/Products')

//Route.get('/posts', 'FilmsController.getFilm');


Route.group(() =>{
Route.get('/', ('FilmsController.getFilm') );
}).prefix('/film')


// Route.group(() =>{
//     Route.get('/', (' ActorsController.getById') );
//     }).prefix('/films')



// Route.get('/users', (' ActorsController.getById') );


Route.group(() => {
    Route.group(() => {
      Route.get("/init", "UsersController.getInit");
      Route.get("/:variable/orders", "UsersController.getUserOrders");
      Route.get("/:variable", "UsersController.getById");
      Route.get("/", "UsersController.getAll");
      Route.post("/", "UsersController.create");
      Route.put("/", "UsersController.update");
      Route.delete("/", "UsersController.destroy");
    }).prefix("/users");
  
  
    Route.group(() => {
      Route.get("/", "FilmsController.getAll");
    }).prefix("/films");
  
// Route.group(() => {
//   Route.get('/', 'ActorsController.getActors')
//   Route.get('/:id', 'ActorsController.getId')
//   Route.post('/', 'ActorsController.create')
//   Route.put('/:id', 'ActorsController.update')
// //   Route.delete('/:id', 'ActorsController.destroy')
// }).prefix('/actors')
    Route.group(() => {
      Route.get('/:id', "ActorsController.getById");
      Route.get("/", "ActorsController.getAll");
      Route.post("/", "ActorsController.create");
      Route.put("/", "ActorsController.update");
      Route.delete('/:id', 'ActorsController.destroy')
      
    }) .prefix("/actors");
    Route.group(() => {
        Route.get("/:id", "CategoriesController.getById");
        Route.get("/", "CategoriesController.getAll");
        Route.post("/", "CategoriesController.create");
        Route.put("/", "CategoriesController.update");
        Route.delete("/:id", "CategoriesController.destory");
      }) .prefix("/categories");

      Route.group(() => {
        Route.get("/:id", "CountriesController.getById");
        Route.get("/", "CountriesController.getAll");
        Route.post("/", "CountriesController.create");
        Route.put("/", "CountriesController.update");
        Route.delete("/:id", "CountriesController.destory");
      }) .prefix("/countries");
      Route.group(() => {
        Route.get("/:id", "StoresController .getById");
        Route.get("/", "StoresController .getAll");
        Route.post("/", "StoresController .create");
        Route.put("/", "StoresController .update");
        Route.delete("/:id", "StoresController.destory");
      }) .prefix("/stores");

}).prefix("api");


Route.get("/users", "ActorsController.create1")

