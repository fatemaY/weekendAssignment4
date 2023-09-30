const carMarket = {
sellers: [
    {
      agencyName: "Best Deal",
      cash: 1245000,
      credit: 200000,
      agencyId: "Plyq5M5AZ",

      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "3",
              year: 2015,
              price: 137000,
              carNumber: "AZJZ4",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "X6",
              year: 2020,
              price: 966500,
              carNumber: "S6DL1",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2020,
              price: 336300,
              carNumber: "6rvXw",
              ownerId: "Plyq5M5AZ",
            },
            {
                name: "Corolla",
                year: 2020,
                price: 111900,
                carNumber: "hCzl-",
                ownerId: "Plyq5M5AZ",
              },
            ],
        },
            {
                brand: "Ford",
                models: [
                  {
                    name: "Focus",
                    year: 2020,
                    price: 98200,
                    carNumber: "kN3HP",
                    ownerId: "Plyq5M5AZ",
                  },
                  {
                    name: "Focus",
                    year: 2005,
                    price: 6502,
                    carNumber: "LJTCs",
                    ownerId: "Plyq5M5AZ",
                  },
                ],
            },
        ],
    },
    {
        agencyName: "CarMax",
        cash: 968541,
        credit: 500000,
        agencyId: "26_IPfHU1",
        cars: [
          {
            brand: "bmw",
            models: [
              {
                name: "X5",
                year: 2015,
                price: 218000,
                carNumber: "4Ixb0",
                ownerId: "26_IPfHU1",
              },
              {
                name: "Impala",
                year: 2016,
                price: 65042,
                carNumber: "vbeAo",
                ownerId: "26_IPfHU1",
              },
              {
                name: "Savannah",
                year: 2016,
                price: 76505,
                carNumber: "WelWa",
                ownerId: "26_IPfHU1",
              },
            ],
          },
        ],
      },
    ],
    customers: [
        {
          name: "Lilah Goulding",
          id: "BGzHhjnE8",
          cars: [
            {
              name: "Corolla",
              year: 2013,
              price: 40570,
              carNumber: "16da1",
              ownerId: "BGzHhjnE8",
            },
          ],
          cash: 35000,
        },
        {
          name: "Ravi Murillo",
          id: "2RprZ1dbL",
          cars: [
            {
              name: "M5",
              year: 2019,
              price: 578054,
              carNumber: "WIh0U",
              ownerId: "2RprZ1dbL",
            },
            {
              name: "Spider",
              year: 2012,
              price: 81520,
              carNumber: "RLS4q",
              ownerId: "2RprZ1dbL",
            },
          ],
          cash: 278542,
        },
        {
          name: "Aleksander Carr",
          id: "pAuFtn_WA",
          cars: [
            {
              name: "Highlander",
              year: 2018,
              price: 214503,
              carNumber: "2WU_y",
              ownerId: "pAuFtn_WA",
            },
          ],
          cash: 125402,
        },
        {
            name: "Will Reyes",
            id: "FQvNsEwLZ",
            cars: [
              { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
              {
                name: "Land Cruiser",
                year: 2020,
                price: 336300,
                carNumber: "vaJvd",
                ownerId: "FQvNsEwLZ",
              },
              {
                name: "Romeo Julia",
                year: 2020,
                price: 275406,
                carNumber: "qLoYR",
                ownerId: "FQvNsEwLZ",
              },
              {
                name: "Explorer",
                year: 2020,
                price: 265200,
                carNumber: "tlGRq",
                ownerId: "FQvNsEwLZ",
              },
            ],
            cash: 1547242,
          },
        ],
        taxesAuthority: {
            totalTaxesPaid: 0,
            sumOfAllTransactions: 0,
            numberOfTransactions: 0,
          },
        };

        console.log(carMarket.sellers[0])

