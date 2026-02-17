/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// Task 1

export function cookingStatus(timeRemaining){
  switch(timeRemaining) {
    case 0:
      return 'Lasagna is done.';
      break;
    case undefined:
      return 'You forgot to set the timer.';
      break;
    default:
      return 'Not done, please wait.';
      break;
  }
}

// Task 2

export function preparationTime(layers, avgTimePerLayer = 2) {
  return layers.length * avgTimePerLayer;
}

// Task 3

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  layers.forEach(layer => {
    if (layer === 'noodles') noodles += 50;
    if (layer === 'sauce') sauce += 0.2;
  });

  return { noodles, sauce };
}


// Task 4

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

// Task 5
export function scaleRecipe(recipe, portions) {
  const scaled = {};
  Object.keys(recipe).forEach(key => {
    scaled[key] = recipe[key] * (portions / 2);
  });
  return scaled;
}





