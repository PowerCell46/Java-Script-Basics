function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit = 0;
    let shoes = 0;
    
    if (degrees >= 10 && degrees <= 42) {
    switch(timeOfTheDay) {
      case "Morning":
      if(degrees >= 10 && degrees <= 18) {
    outfit = "Sweatshirt";
    shoes = "Sneakers";
      } else if(degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if(degrees >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";}
        break;
      case "Afternoon":
        if(degrees >= 10 && degrees <= 18) {
    outfit = "Shirt";
    shoes = "Moccasins";
      } else if(degrees > 18 && degrees <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if(degrees >= 25) {
        outfit = "Swim suit";
        shoes = "Barefoot"; }
        break;
      case "Evening":
          if(degrees >= 10 && degrees <= 18) {
    outfit = "Shirt";
    shoes = "Moccasins";
      } else if(degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins"; 
        break;
      } else if(degrees >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins"; }
        break;
    }
     console.log("It's " + degrees + " degrees, get your " + outfit + " and " + shoes + ".");
    }
    }