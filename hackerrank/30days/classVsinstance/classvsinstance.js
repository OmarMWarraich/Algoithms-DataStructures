
/**
*   Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter.
*   The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; 
*   if a negative argument is passed as initialAge, the constructor should set to 0
*   and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:
*   
*   1. yearPasses() should increase the instance variable by 1.
*   2. amIOld() should perform the following conditional actions:
*       If age < 13, print You are young..
*       If age >= 13 and age < 18, print You are a teenager..
*       Otherwise, print You are old..
*/
    
function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if (initialAge < 0) {
        console.log("Age is not valid, setting age to 0.");
        this.age = 0;
    } else {
        this.age = initialAge;
    }
  
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
        console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
        console.log("You are a teenager.");
    } else {
        console.log("You are old.");
    }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          this.age++;
   };
}