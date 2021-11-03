const {
  kitties
} = require('./datasets/kitties');
const {
  clubs
} = require('./datasets/clubs');
const {
  mods
} = require('./datasets/mods');
const {
  cakes
} = require('./datasets/cakes');
const {
  classrooms
} = require('./datasets/classrooms');
const {
  breweries
} = require('./datasets/breweries');
const {
  nationalParks
} = require('./datasets/nationalParks');
const {
  books
} = require('./datasets/books');
const {
  weather
} = require('./datasets/weather');
const {
  instructors,
  cohorts
} = require('./datasets/turing');
const {
  bosses,
  sidekicks
} = require('./datasets/bosses');
const {
  constellations,
  stars
} = require('./datasets/astronomy');
const {
  weapons,
  characters
} = require('./datasets/ultima');
const {
  dinosaurs,
  humans,
  movies
} = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {

  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter((kitty) => {
      return kitty.color === 'orange';
    }).map((kitty) => {
      return kitty.name;
    });
    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age
    const result = kitties.sort((a, b) => {
      return b.age - a.age;
    });
    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map((kitty) => {
      kitty.age += 2;
      return kitty;
    });
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    // input an array of club objects
    // output an object of names with a value of their clubs

    const result = clubs.reduce((allMemberClubs, club) => {
      club.members.forEach((member) => {
        if (!allMemberClubs[member]) {
          allMemberClubs[member] = []
        };
        allMemberClubs[member].push(club.club);
      })
      return allMemberClubs;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    // input an array of objects
    // output an array of objects with students/instructors with a new key of studentsPerInstructor

    const result = mods.map((mod) => {
      return {
        mod: mod.mod,
        studentsPerInstructor: mod.students / mod.instructors
      }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    // input an array of objects
    // output an array of objects with just flavor and how much inStock

    const result = cakes.map((cake) => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },




  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((sum, cake) => {
      sum += cake.inStock
      return sum
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    // input an array of objects
    // output an array of just the toppings

    const result = cakes.reduce((toppings, cake) => {
      cake.toppings.forEach((topping) => {
        if (!toppings.includes(topping)) {
          toppings.push(topping)
        }
      })
      return toppings;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    // input an array of cakes
    // output an object with toppings as keys and amounts as values

    const result = cakes.reduce((groceryList, cake) => {
      cake.toppings.forEach((topping) => {
        if (!groceryList[topping]) {
          groceryList[topping] = 0;
        }
        groceryList[topping]++;
      })
      return groceryList;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    // input an array of objects which are classrooms
    // output an array of a different length that only returns the FE classrooms

    const result = classrooms.filter((room) => {
      return room.program === 'FE';
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // input an array of objects that represent classrooms
    // an object with two new keys and sums of capacity for fe and be

    const result = classrooms.reduce((obj, room) => {
      const feSum = classrooms.reduce((sum, room) => {
        if (room.program === 'FE') {
          sum += room.capacity
        }
        return sum;
      }, 0)
      const beSum = classrooms.reduce((sum, room) => {
        if (room.program === 'BE') {
          sum += room.capacity
        }
        return sum;
      }, 0)
      if (room.program === 'FE') {
        obj.feCapacity = feSum;
      } else {
        obj.beCapacity = beSum;
      }
      // object.beCapacity
      return obj;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    // input an array of objects of classrooms
    // output an array of the same length that organizes the classrooms from capacity size
    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    // input an array of objects of books
    // output an array of a different length of books not in horror or true crime

    //
    // const result = books.filter((book) => {
    //   book.title != 'Horror' || 'True Crime';
    //   book.title;
    // });
    //
    // return result;

    // const result = books.reduce((newArray, book) => {
    //   if (book.genre !== "Horror" && book.genre !== "True Crime") {
    //     newArray.push(book.title)
    //   }
    //   return newArray;
    // }, []);
    //
    // return result;


    const result = books.filter((book) => {
      return book.genre !== 'Horror' && book.genre !== "True Crime"
    }).map((book) => {
      return book.title
    })

    return result

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // input an array of objects of books
    // output an array of a different length that only returns books published
    // in the 90s and 00s, create new object with the title and year

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((newArray, book) => {
      if (book.published >= 1990) {
        newArray.push({
          title: book.title,
          year: book.published
        })
      }
      return newArray;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    // input an array of objects
    // output an array of only the average temperatures. high+low/2

    const result = weather.reduce((average, city) => {
      average.push((city.temperature.high + city.temperature.low) / 2);
      return average
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    // input an array of objects
    // output an array of a different length that is filtered by sunny places
    // and returns an array of sentences

    const result = weather.filter((city) => {
      return city.type.includes('sunny')
    }).map((city) => {
      return `${city.location} is ${city.type}.`
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => {
      return a.humidity - b.humidity;
    });
    return result.pop();

    // const result = weather.reduce((obj, city) => {
    //   (obj.humidity > city.humidity?obj:city).obj
    //   return obj;
    // }, {})
    //
    // return result;


    // input an array of objects
    // output one object that has the highest humidity;
    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    // input an array of objects
    // output an object with keys parksToVisit and parksVisited
    // assigned to an array full of national parks

    const result = nationalParks.reduce((travelInfo, park) => {
      const visited = nationalParks.filter((park) => {
        return park.visited;
      }).map((park) => {
        return park.name;
      })
      const notVisited = nationalParks.filter((park) => {
        return !park.visited
      }).map((park) => {
        return park.name
      })
      travelInfo = {
        parksToVisit: notVisited,
        parksVisited: visited
      }
      return travelInfo;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    // input an array of objects
    // output is an array of objects with a dynamic key of the location
    // and a value of the name of the national park

    //

    const result = nationalParks.map((park) => {
      return {
        [park.location]: park.name
      }
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    // input an array of objects including an array
    // output an array of a different length that includes what was inside another array

    const result = nationalParks.reduce((array, park) => {
      park.activities.forEach((activity) => {
        if (!array.includes(activity)) {
          array.push(activity);
        }
      })
      return array
    }, []);
    return result;


    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    const result = breweries.reduce((sum, brewery) => {
      sum += brewery.beers.length;
      return sum;
    }, 0);
    return result;


    // Return the total beer count of all beers for every brewery e.g.
    // 40

    // input an array of objects
    // output a number that it the total amount of beers for all breweries
    // this will be the beers.length of each brewery

  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // input an array of objects with another array of objects
    // output is an array of objects with key of name and ket of getBeerCount
    // same length array ..map or ..reduce
    //

    const result = breweries.map((brewery) => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length
      }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    // input is an array of objects
    // output is an object from inside the beers array
    // therefore we will need to iterate over that area as well
    // //

    // const result = breweries.map((brewery) => {
    //   return brewery.beers;
    // }).flat().sort((a, b) => {
    //   return a.abv-b.abv;
    // }).pop()

    const result = breweries.map((brewery) => {
      return brewery.beers;
    }).reduce((beersArray, beer) => {
      beersArray.push(beer)
      return beersArray
    }, []).sort((a, b) => {
      return a.abv - b.abv
    }).pop().sort((a, b) => {
      return a.abv - b.abv
    }).pop()

    return result;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    // const result = instructors.map((instructor) => {
    //   const obj = {name: instructor.name, studentCount: 0}
    //   cohorts.forEach((cohort) => {
    //     if (instructor.module === cohort.module) {
    //       obj.studentCount = cohort.studentCount
    //     }
    //   })
    //   return obj
    // });
    // return result;

    const instructorStudentCounts = instructors.reduce((newArr, instructor) => {
      cohorts.forEach(group => {
        if (group.module === instructor.module) {
          newArr.push({
            name: instructor.name,
            studentCount: group.studentCount
          })
        }
      })
      return newArr;
    }, []);
    return instructorStudentCounts;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    // input two arrays of objects
    // output to be an object with key values of cohort1806 which are in cohorts array
    // and values of students per teacher. student count is in cohort array,
    // but we need to match the module in each array have a counter for teachers for that mod?
    // then divide those counters by studentcount to get value of object

    const teachersPerCohort = instructors.reduce((modules, teacher) => {
      if (!modules[teacher.module]) {
        modules[teacher.module] = 0
      }
      modules[teacher.module]++
      return modules
    }, {})

    return cohorts.reduce((obj, cohort) => {
      obj[`cohort${cohort.cohort}`] = cohort.studentCount / teachersPerCohort[cohort.module];
      return obj
    }, {})

    // const studentsPerInstructorByCohort = cohorts.reduce((cohorts, group) => {
    //   let numOfTeachersPerModule = instructors.filter(instructor => {
    //     return group.module === instructor.module;
    //   })
    //
    //   cohorts[`cohort${group.cohort}`] = group.studentCount / numOfTeachersPerModule.length;
    //
    //   return cohorts;
    // }, {})
    // return studentsPerInstructorByCohort;


    // Annotation:
    // Write your annotation here as a comment
    // },
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    // input two arrays of objects - one being instructors the other being cohorts
    // output an object with keys of teacher names (same length as instructors array) and
    // a value that is an array of numbers (which are the mods they can teach)
    // to get the mods they can teach need to compare instructors.teaches array to
    // cohorts.curriculum array
    // then create a new array that has those numbers in it and is equal to the name of instructor

    const result = instructors.reduce((obj, instructor) => {
      obj[instructor.name] = [];
      cohorts.forEach((cohort) => {
        cohort.curriculum.forEach((subject) => {
          if (instructor.teaches.includes(subject) && !obj[instructor.name].includes(cohort.module)) {
            obj[instructor.name].push(cohort.module)
          }
        })
      })
      return obj
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    // input two arrays of objects
    // output an object with keys equal to the curriculum subject
    // the values will be an array of instructors who teach that subject
    // first want to reduce down to an object
    // create the keys of curriculum (need to iterate over curriculum to get these)
    // set those equal to an empty array
    // then iterate over the instructors.teaches array to push in a name if not already
    // so a conditional will be needed to check if that instructor is in that array already or not

    const result = cohorts.reduce((obj, cohort) => {
      cohort.curriculum.forEach((subject) => {
        obj[subject] = []
        instructors.forEach((instructor) => {
          if (instructor.teaches.includes(subject) && !obj[subject].includes(instructor.name)) {
            obj[subject].push(instructor.name)
          }
        })
      })

      return obj;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    // input an object of objects for the bosses and an array
    // of objects for the sidekicks
    // output is an array of objects with keys of bossName and sidekickLoyalty
    // and values of the boss name
    // sidekickLoyalty value is equal to the name of sidekick+=loyalty
    // want to check if sidekicks.boss === bossName
    // than if so add together the loyaltyToBoss and assign to the sidekickLoyalty

    // const bossLoyalty = () => {
    //   const array = Object.keys(bosses);
    //   return array.map((bossName) => {
    //     let loyalty = 0;
    //     sidekicks.forEach((sidekick) => {
    //       if (sidekick.boss.toLowerCase() === bossName) {
    //         loyalty += sidekick.loyaltyToBoss
    //       }
    //     })
    //     return {bossName: bossName, sideKickLoyalty: loyalty}
    //   }).reverse()
    // }

    const result = Object.keys(bosses).map(boss => {
      const loyalty = {
        bossName: bosses[boss].name,
        sidekickLoyalty: 0
      };
      sidekicks.forEach(sidekick => {
        if (sidekick.boss === loyalty.bossName) {
          loyalty.sidekickLoyalty += sidekick.loyaltyToBoss;
        }
      });
      return loyalty;
    });
    return result;
  }

  // Annotation:
  // Write your annotation here as a comment
}







// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

// input an array of stars
// output an arrays of stars that will be a different length than original
 // will need to see if star.constellation.includes(constellations[star.constellation].stars
    const result = stars.reduce((array, star) => {
      const galaxy = Object.keys(constellations);
      const answer = galaxy.forEach((constellation) => {
        if (constellations[constellation].stars.includes(star.name)) {
          array.push(star)
      }
    })
    return array;
  }, [])
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    // input an array of objects representing stars
    // output an object with keys of colors of stars and values of the star that is that color
    // want to reduce down to an object
    // make a key with star.color
    // the value will be pushed into an array and will be the star
    // for each star if the color matches the key then push into array.

    const result = stars.reduce((obj, star) => {
        if (!obj[star.color]) {
          obj[star.color] = []
          }
        let keys = Object.keys(obj)
        keys.forEach((color) => {
          if (color === star.color) {
            obj[star.color].push(star)
          }
        })
        return obj;
      }, {});

      return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


  const result = stars.sort((a, b) => {
      return a.visualMagnitude - b.visualMagnitude;
    }).filter((star) => {
      return star.constellation.length > 1;
    }).map((star) => {
      return star.constellation;
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((sum, character) => {
      const keys = Object.keys(weapons)
        character.weapons.forEach((weapon) => {
          keys.forEach((key) => {
            if (weapon === key) {
              sum += weapons[key].damage
            }
          })
        })
        return sum
      }, 0)
      return result
  },



  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {

    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    // input an object of objects holding the dinosaurs and an array of objects holding the movies
    // an object with a key of the title of the movie

    countAwesomeDinosaurs() {
       const dinoNames = Object.keys(dinosaurs);
       const result = movies.reduce((obj, movie) => {
         obj[movie.title] = 0;
         dinoNames.forEach((dino) => {
           if (movie.dinos.includes(dino) && dinosaurs[dino].isAwesome) {
             obj[movie.title] += 1
           }
         })
         return obj;
       }, {});
       return result;


    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
