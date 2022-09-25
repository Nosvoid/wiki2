import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooking-sp',
  templateUrl: './cooking-sp.component.html',
  styleUrls: ['./cooking-sp.component.css']
})
export class CookingSpComponent implements OnInit {

  cookingSkills = [
    {
      icon: "chop_ingredients",
      name: "Chop Ingredients",
      level: "1",
      actions: [
        { action: "You can chop Lettuce/Tomato/Onions/Mango/Fish" } 
      ]
    },
    {
      icon: "roast",
      name: "Roast",
      level: "1",
      actions: [
        { action: "To cook some basic meals" }
      ]
    },
    {
      icon: "finish_cooking",
      name: "Finish Cooking",
      level: "1",
      actions: [
        { action: "When the meal is ready, click on the skill" }
      ] 
    },
    {
      icon: "simmer",
      name: "Simmer",
      level: "5",
      actions: [
        { action: "To cook some soup meals" }
      ] 
    },
    {
      icon: "voila",
      name: "Voila!",
      level: "5",
      actions: [
        { action: "You can show what you cooked to everyone!" }
      ] 
    },
    {
      icon: "cooking_preparation",
      name: "Cooking Preparation",
      level: "10",
      actions: [
        { action: "Cooking experience gain is increased by 50%" }
      ] 
    },
    {
      icon: "stir_fry",
      name: "Stir Fry",
      level: "14",
      actions: [
        { action: "To cook end-game meals" }
      ] 
    },
    {
      icon: "secret_spice",
      name: "Secret Spice",
      level: "16",
      actions: [
        { action: "Provides a 10% chance to not consume ingredients" }
      ] 
    },
    {
      icon: "healthy_eating",
      name: "Healthy Easting",
      level: "18",
      actions: [
        { action: "Provides a 50% chance spices aren't consumed when cooking" }
      ]
    },
    {
      icon: "sharpen_knife",
      name: "Sharpen Knife",
      level: "20",
      actions: [
        { action: "Provides a 10% chance to receive extra ingredients" },
        { action: "Provides a 10% chance to receive extra meals" }
      ]
    }
  ]

  cookingMeals = [
    {
      skill: "From Roast Skill",
      meals: [
        {
          icon: "roast_pork",
          name: "Roast Pork",
          buff: "+2% Gold"
        },
        {
          icon: "piranha_fish_skewer",
          name: "Piranha Fish Skewer",
          buff: "+5% Cooking EXP"
        },
        {
          icon: "burger",
          name: "Burger",
          buff: "+5% Elemental Properties"
        },
        {
          icon: "sweet_marinated_roast",
          name: "Sweet Marinated Roast",
          buff: "+10% Bonus EXP"
        },
        {
          icon: "mixed_piranha_skewer",
          name: "Mixed Piranha Skewer",
          buff: "+5% Damage on monsters"
        },
        {
          icon: "carp_skewer",
          name: "Carp Skewer",
          buff: "+1 Movement Speed"
        },
        {
          icon: "salmon_fillet",
          name: "Salmon Fillet",
          buff: "+5% Fairy Element"
        },
        {
          icon: "chocolate_shark_fillet",
          name: "Chocolat Shark Fillet",
          buff: "+10% Fairy EXP"
        },
        {
          icon: "bbq_coelacanth",
          name: "BBQ Coelacanth",
          buff: "+5% Damage in Family Tower"
        },
        {
          icon: "roast_lamb",
          name: "Roast Lamb",
          buff: "+10% Chance of catching a bigger fish"
        }
      ]
    },
    {
      skill: "From Simmer Skill",
      meals: [
        {
          icon: "fish_stew",
          name: "Fish Stew",
          buff: "+5% Reduce Elemental Resistance"
        },
        {
          icon: "moss_porridge",
          name: "Moss Porrigde",
          buff: "+10 Champion EXP"
        },
        {
          icon: "owlbear_moss_stew",
          name: "Owlbear and Moss Stew",
          buff: "+5% Gold"
        },
        {
          icon: "sweet_marinated_roast",
          name: "Sweet Marinated Roast",
          buff: "+10% Bonus EXP"
        },
        {
          icon: "noodles",
          name: "Noodles",
          buff: "+10% Cooking EXP"
        },
        {
          icon: "carp_stew",
          name: "Carp Stew",
          buff: "+10% Fishing EXP"
        },
        {
          icon: "cold_desert_stew",
          name: "Cold Desert Stew",
          buff: "+5% Chance materials aren't consumed when cooking"
        }
      ]
    },
    {
      skill: "From Stir Fry Skill",
      meals: [
        {
          icon: "fried_strawberries",
          name: "Fried Strawberries",
          buff: "+5% HP/MP"
        },
        {
          icon: "double_apple_omelette",
          name: "Double Apple Omelette",
          buff: "+5% Damage in Raid"
        },
        {
          icon: "burger",
          name: "Burger",
          buff: "+5% Elemental Properties"
        },
        {
          icon: "pancakes",
          name: "Pancakes",
          buff: "+2% Double Box"
        },
        {
          icon: "crispy_noodles",
          name: "Crispy Noodles",
          buff: "+2% More R7/R8 when betting"
        },
        {
          icon: "spicy_fried_fish",
          name: "Spicy Fried Fish",
          buff: "+2% Success when Perfing SP"
        },
        {
          icon: "fried_fish_noodle",
          name: "Fried Fish Noodle",
          buff: "+2% Attack/Defense"
        }
      ]
    },
  ]

  cookingIngredients = [
    {
      type: "Can be found in the wild",
      ingr: [
        {
          icon: "big_lettuce",
          name: "Big Lettuce",
          location: "Can be found in NosVille"
        },
        {
          icon: "big_tomato",
          name: "Big Tomato",
          location: "Can be found in Prestige 1 Map"
        },
        {
          icon: "big_onion",
          name: "Big Onion",
          location: "Can be found in Prestige 2 Map"
        },
        {
          icon: "big_mango",
          name: "Big Mango",
          location: "Can be found in Prestige 3 Map"
        },
        {
          icon: "big_strawberry",
          name: "Big Strawberry",
          location: "Can be found in Prestige 4 Map"
        },
        {
          icon: "big_cherry_apple",
          name: "Big Cherry Apple",
          location: "Can be found in Prestige 6 Map"
        },
        {
          icon: "pricly_pear",
          name: "Pricly Pear",
          location: "Can be found in Prestige 7 Map"
        },
        {
          icon: "big_cherries",
          name: "Big Cherries",
          location: "Can be found in Prestige 8 Map"
        }
      ] 
    },
    {
      type: "Can be fished",
      ingr: [
        {
          icon: "blue_piranha",
          name: "Blue Piranha",
          location: "Can be fished in NosVille"
        },
        {
          icon: "green_piranha",
          name: "Green Piranha",
          location: "Can be fished in NosVille"
        },
        {
          icon: "silver_piranha",
          name: "Silver Piranha",
          location: "Can be fished in NosVille"
        }
      ] 
    },
    {
      type: "Can be bought",
      ingr: [
        {
          icon: "chilli_powder",
          name: "Chilli Powder",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "pepper",
          name: "Pepper",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "garlic_powder",
          name: "Garlic Powder",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "cinnamon",
          name: "Cinnamon",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "chopping_board",
          name: "Chopping Board",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "meat",
          name: "Meat",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "owlbear_meat",
          name: "Owlbear Meat",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "pikanya_meat",
          name: "Pikanya Meat",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "chicken_meat",
          name: "Chicken Meat",
          location: "Can be bought at Chef Terry NPC"
        },
        {
          icon: "triceratops_meat",
          name: "Triceratops Meat",
          location: "Can be bought at Chef Terry NPC"
        }
      ] 
    }
  ]

  showPack() {
    $(document).ready(function() {
      $('.show-pack').click(function(event){
        let btn = event.target;
        let nextChild = btn.nextElementSibling;

        if(nextChild?.classList.contains('display-none')) {
          nextChild.classList.remove('display-none');
          nextChild.classList.add('display-flex');
        } else if(nextChild?.classList.contains('display-flex')) {
          nextChild.classList.remove('display-flex');
          nextChild.classList.add('display-none');
        }
        $('.close-pack').click(function(event) {
          nextChild?.classList.remove('display-flex');
          nextChild?.classList.add('display-none');
        });

        window.addEventListener('click', (e) => {
          if(e.target == nextChild) {
            nextChild?.classList.remove('display-flex');
            nextChild?.classList.add('display-none');
          }
        });
      });
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.showPack();
  }

}