const carMarket =  require("./obj.js");

//------------------ 1. Agency Operations:---------------------------------------------
//----------------- Search for a car agency by its name or ID.----------------------
console.log("EX-1.1")
function searchCarAgency(search) {
    for (const seller of carMarket.sellers) {
      if (seller.agencyName.toLowerCase() === search.toLowerCase() || seller.agencyId === search) {
        console.log("a car agency found.");
        return;
      }
    }
    console.log("a car agency not found.");
}
 searchCarAgency("Best Deal");
 searchCarAgency("26_IPfHU1");


// ----------------------Retrieve all agencies' names.-------------------
console.log("EX-1.2")
function getAllAgencyNames() {
    const agencyNames = [];
    for (const seller of carMarket.sellers) {
      agencyNames.push(seller.agencyName);
    }
    console.log(agencyNames);
    return;
  }
 getAllAgencyNames();
  

// --------------Add a new car to an agency's inventory.--------------------
console.log("EX-1.3")
function addCarToAgency(agencyId, car) {
    const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);
      if (agency) {
      agency.cars.push(car);
      console.log(`Car added to ${agency.agencyName}'s inventory.`);
    } 
    else {
      console.log(`Agency with ID ${agencyId} not found.`);
    }
  }
    const newCar = {
    brand: "Ford",
    models: [
      {
        name: "Focus",
        year: 2022,
        price: 30000,
        carNumber: "12345",
        ownerId: "Plyq5M5AZ",
      },
    ],
  };
  addCarToAgency("Plyq5M5AZ", newCar);

// ---------------Remove a car from an agency's inventory.----------------
console.log("EX-1.4")
function removeCarFromAgency(agencyId, carNumber) {
    const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);
    let carIndex=-1;
      if (agency) 
        {
            for(const car of agency.cars){
                for(let i=0 ; i< car.models.length ;i++){
                  if (car.models[i].carNumber===carNumber){
                    carIndex=i;
                    // console.log( carIndex)
                    // console.log(car.models[i])
                  }
                }
            }
            if (carIndex !== -1) {
                agency.cars.splice(carIndex, 1);
                console.log(`Car with car number ${carNumber} deleted from ${agency.agencyName}'s inventory.`);
              } 
              else {
                console.log(`Car with car number ${carNumber} not found in ${agency.agencyName}'s inventory.`);
              }

        }
        else {
            console.log(`Agency with ID ${agencyId} not found.`);
       }
    }
   
  removeCarFromAgency("Plyq5M5AZ", "S6DL1");
  

// ---------------------Change the cash or credit of an agency.---------------

console.log("EX-1.5")
  function changeAgencyFinances(agencyId, type, amount) {
    const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);
    if (agency) {
      if (type === "cash") {
        agency.cash += amount;
        console.log(`Cash for ${agency.agencyName} updated to ${agency.cash}`);
      } 
      else if (type === "credit") {
        agency.credit += amount;
        console.log(`Credit for ${agency.agencyName} updated to ${agency.credit}`);
      } 
      else {
        console.log(`Invalid type. Use 'cash' or 'credit'.`);
      }
    } 
    else {
      console.log(`Agency with ID ${agencyId} not found.`);
    }
  }
  changeAgencyFinances("Plyq5M5AZ", "cash", 50000);


//-----------------Update the price of a specific car in an agency (Method: updateCarPrice ).-----------------
console.log("EX-1.6")
  function updateCarPrice(agencyId, carNumber, newPrice) {
    const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);
    if (agency) {
      for (const car of agency.cars) {
        const carIndex = car.models.findIndex((model) => model.carNumber === carNumber);
        if (carIndex !== -1) {
          car.models[carIndex].price = newPrice;
          console.log(`Price for car ${carNumber} updated to ${newPrice}`);
          return;
        }
      }
      console.log(`Car with number ${carNumber} not found in the inventory of ${agency.agencyName}`);
    } 
    else {
      console.log(`Agency with ID ${agencyId} not found.`);
    }
  }
updateCarPrice("Plyq5M5AZ", "S6DL1", 980000);
  

// -----------Calculate and return the total revenue for a specific agency (Method:getTotalAgencyRevenue ).
console.log("EX-1.7")
function getTotalAgencyRevenue(agencyId) {
    const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);
  
    if (agency) {
      let totalRevenue = 0;
  
      for (const car of agency.cars) {
        for (const model of car.models) {
          totalRevenue += model.price;
        }
      }
      return totalRevenue;
    } 
    else {
      console.log(`Agency with ID ${agencyId} not found.`);
      return ;
    }
  }
const agencyRevenue = getTotalAgencyRevenue("Plyq5M5AZ");
console.log(`Total agency revenue: $${agencyRevenue}`);
  
//---------------------- Transfer a car from one agency to another (Method: transferCarBetweenAgencies).
console.log("EX-1.8")
function transferCarBetweenAgencies(carNumber, firstAgencyId, anotherAgencyId) {
    const firstAgency = carMarket.sellers.find((seller) => seller.agencyId === firstAgencyId);
    if (!firstAgency) {
      console.log(`Source agency with ID ${firstAgency} not found.`);
      return;
    }
   const anotherAgency = carMarket.sellers.find((seller) => seller.agencyId === anotherAgencyId);
    if (!anotherAgency) {
      console.log(`Destination agency with ID ${anotherAgencyId} not found.`);
      return;
    }
   let carToRemove = null;
    for (const car of firstAgency.cars) {
      for (const model of car.models) {
        if (model.carNumber === carNumber) {
          carToRemove = model;
          break;
        }
      }
      if (carToRemove)
       break;
    }
    if (!carToRemove) {
      console.log(`Car with number ${carNumber} not found in the source agency.`);
      return;
    }
    const sourceIndex = firstAgency.cars.indexOf(carToRemove);
    if (sourceIndex !== -1) {
        firstAgency.cars.splice(sourceIndex, 1);
    }
      anotherAgency.cars.push({
      brand: carToRemove.brand,
      models: [carToRemove],
    });
    console.log(`Car with number ${carNumber} transferred from ${firstAgency.agencyName} to ${anotherAgency.agencyName}.`);
  }
  
  transferCarBetweenAgencies("AZJZ4", "Plyq5M5AZ", "26_IPfHU1");

  
//***********************************************************************************************************************
//--------------------- 2. Customer Operations:-----------------------------------------------------------------------
// --------------------Search for a customer by their name or ID.------------------------------------------------------
console.log("EX-2.1")
function searchCustomer(search) {
    for (const customer of carMarket.customers) {
      if (customer.name.toLowerCase() === search.toLowerCase() || customer.id === search) {
        console.log("The customer  with " +search+ " is found");
        return;
      }
    }
    console.log("The customer  with " +search+ " is not found");
}
searchCustomer("Lilah Goulding");
searchCustomer("BGzHhjnE8");

// --------------------Retrieve all customers' names.---------------------------------------------
console.log("EX-2.2")
function getAllcustomersNames() {
    const customersNames = [];
    for (const customer of carMarket.customers) {
        customersNames.push(customer.name);
    }
    console.log(customersNames);
    return;
  }
  getAllcustomersNames();

// ----------------------------Change the cash of a customer.-------------------------------------------
console.log("EX-2.3")
function changeCustomerCash(customerId, newCashAmount) {
    const customer = carMarket.customers.find((customer) => customer.id === customerId);
    if (customer) {
      customer.cash += newCashAmount;
      console.log("Cash changed successfully.");
      return ; 
    }
    else {
      console.log("Customer not found.");
      return ; 
    }
  }
  
  changeCustomerCash("BGzHhjnE8", 40000);
  
//-------------------Calculate the total value of all cars owned by a specific customer (Method: getCustomerTotalCarValue ).
console.log("EX-2.4")

function getCustomerTotalCarValue(customerId) {
    const customer = carMarket.customers.find((customer) => customer.id === customerId);
    if (customer) {
        ((accumulator, currentValue)=>{
                    return accumulator + currentValue
                }, 0);
      const totalCarValue = customer.cars.reduce((total, car) => {
        return total + car.price
      },0);

      if (totalCarValue > 0) {
      console.log(`Total car value for customer ${customerId}: $${totalCarValue}`);
      return ;
      } 
    }
    else {
      console.log("Customer not found or has no cars.");
      return ; 
    }
}
getCustomerTotalCarValue("BGzHhjnE8");
  


//**************************************************************************************************************************************
//------------------- 3. Car Operations:-----------------------------------------------------------------------------------
// -----------------------Retrieve all cars available for purchase------------------------------------------------------
console.log("EX-3.1")
function getAllAvailableCars() {
    const availableCars = [];
    carMarket.sellers.forEach((seller) => {
      seller.cars.forEach((car) => {
        if (!car.ownerId) {
          availableCars.push(car);
        }
      });
    });
   
        return availableCars;
      } 
      
  
  const availableCars = getAllAvailableCars();

  if (availableCars.length > 0) {
    console.log("Available cars for purchase:");
    availableCars.forEach((car) => {
      console.log(`- ${car.brand} ${car.models[0].name}, Year: ${car.models[0].year}, Price: $${car.models[0].price}`);
    });
  } 
  else {
    console.log("No cars available for purchase.");
  } 


//----------------------------------  Search for cars based on certain criteria. The search parameters should include the
console.log("EX-3.2")
function searchCars(year, price, brand = null) {
    const matchingCars = [];
    carMarket.sellers.forEach((seller) => {
      seller.cars.forEach((car) => {
        car.models.forEach((model) => {
          if (model.year === year &&  model.price <= price &&
            (brand === null || car.brand.toLowerCase() === brand.toLowerCase())
             ){
            matchingCars.push({
              brand: car.brand,
              modelName: model.name,
              year: model.year,
              price: model.price,
              carNumber: model.carNumber,
            });
          }
        });
      });
    });
    if (matchingCars.length > 0) {
        console.log(`Matching cars for year ${year}, max price $${price}, and brand ${brand}:`);
        matchingCars.forEach((car) => {
          console.log(`- ${car.brand} ${car.modelName}, Year: ${car.year}, Price: $${car.price}`);
        });
        return;
      } 
      else {
        console.log("No cars match the search criteria.");
        return ;
    }
}
 searchCars(2020, 900000, "BMW");

  
  


// -------------- Return the most expensive car available for sale (Method: getMostExpensiveCar ).-------------------------
console.log("EX-3.3")
function getMostExpensiveCar() {
    let mostExpensiveCar = null;
    let highestPrice = 0;
    let carsAvailableArr= getAllAvailableCars();
    for(const car of carsAvailableArr){
        for(const model of car.models){
            if (model.price > highestPrice) {
                highestPrice = model.price;
                mostExpensiveCar = {
                  brand: car.brand,
                  modelName: model.name,
                  year: model.year,
                  price: model.price,
                  carNumber: model.carNumber,
                };
              }

        }
    }
    if (mostExpensiveCar !== null) {
        console.log("The most expensive car available for sale is:");
        console.log(`- ${mostExpensiveCar.brand} ${mostExpensiveCar.modelName}, Year: ${mostExpensiveCar.year}, Price: $${mostExpensiveCar.price}`);
        return;
     } 
     else {
        console.log("No cars are available for sale.");
        return;
     }
 
    }

  getMostExpensiveCar();
  
  

// ----------------------  Return the cheapest car available for sale (Method: getCheapestCar ).----------------------
console.log("EX-3.4")
function getCheapestCar() {
    let cheapestCar = null;
    let lowestPrice = Number.MAX_VALUE;;
    let carsAvailableArr= getAllAvailableCars();
    for(const car of carsAvailableArr){
        for(const model of car.models){
            if (model.price < lowestPrice) {
                lowestPrice = model.price;
                cheapestCar = {
                  brand: car.brand,
                  modelName: model.name,
                  year: model.year,
                  price: model.price,
                  carNumber: model.carNumber,
                };
              }
            }
        }
            if (cheapestCar !== null) {
                console.log("The cheapest car available for sale is:");
                console.log(`- ${cheapestCar.brand} ${cheapestCar.modelName}, Year: ${cheapestCar.year}, Price: $${cheapestCar.price}`);
                return;
            } 
            else {
                console.log("No cars are available for sale.");
                return;
            }
        }
    
  getCheapestCar();




//*********************************************************************************************************************** */
// ------------------------  Car Purchase Operations:----------------------------------------------------------------------
//---------- Implement a sellCar function that sells a car to a specific customer. This function-------------------------
// ----------should:
// ----------Check the availability of the car at the agency.
// ----------Verify if the customer has enough cash to purchase the car.
// ----------Update the cash and credit for both the agency and the customer accordingly.
// ----------Update the tax authority's records.
console.log("EX-4.1")
function sellCar(customerId, agencyId, carNumber) {
    const customer = carMarket.customers.find((c) => c.id === customerId);
    const agency = carMarket.sellers.find((s) => s.agencyId === agencyId);
    if (!customer || !agency) {
      console.log("Customer or agency not found.");
      return;
    }
  
    let carToSell=null;
    agency.cars.forEach((car) => {
        car.models.forEach((model) => {
          if (model.carNumber === carNumber) {
            carToSell = model;
          }
        });
      });
    
    if (!carToSell) {
      console.log("Car not found in the agency's inventory.");
      return;
    }
    console.log(carToSell.price);
    console.log(customer.cash)
    if (customer.cash < carToSell.price) {
      console.log("Customer does not have enough cash to purchase the car.");
      return;
    }
    const agencyCashBeforeSale = agency.cash;
    const customerCashBeforeSale = customer.cash;
  
    agency.cash += carToSell.price;
    agency.credit -= carToSell.price;
    customer.cash -= carToSell.price;
  
    carMarket.taxesAuthority.totalTaxesPaid += (carToSell.price * 0.1);
    carMarket.taxesAuthority.sumOfAllTransactions += carToSell.price;
    carMarket.taxesAuthority.numberOfTransactions++;
  
    console.log(`Car sold successfully to ${customer.name}.`);
    console.log(`Agency's cash before sale: $${agencyCashBeforeSale}`);
    console.log(`Agency's cash after sale: $${agency.cash}`);
    console.log(`Customer's cash before sale: $${customerCashBeforeSale}`);
    console.log(`Customer's cash after sale: $${customer.cash}`);
  }
  
  sellCar("BGzHhjnE8", "Plyq5M5AZ", "LJTCs");


  
//-----------------Calculate and return the total revenue of the entire market (Method:getTotalMarketRevenue ).-----------

// function getTotalMarketRevenue() {
//     let totalRevenue = 0;
//     carMarket.sellers.forEach((agency) => {
//       agency.cars.forEach((car) => {
//         car.models.forEach((model) => {
//           totalRevenue += model.price;
//         });
//       });
//     });
//     console.log(`Total market revenue: $${totalRevenue}`);
//     return ;
//   }
console.log("EX-4.2")
  function getTotalMarketRevenue() {
    let totalRevenue = 0;
    for(const agency of carMarket.sellers){
        totalRevenue += getTotalAgencyRevenue(agency.agencyId);
    }
    console.log(`Total market revenue: $${totalRevenue}`);
    return ;
  }
   getTotalMarketRevenue();

// console.log(carMarket.sellers[0])