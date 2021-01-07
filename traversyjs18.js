function Person(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.dob = new Date(dob)
  this.getBirthYear = function () {
    return this.dob.getFullYear()
  }
  //something is wrong with the line below
  this.getFullName = function () {
    {
      this.firstName
    }
    {
      this.lastName
    }
  }
}

const person1 = new Person("Stewie", "Griffin", "01-02-1990")
const person2 = new Person("Luke", "Skywalker", "03-15-1984")

//console.log(person1)
//console.log(person1.dob)
//console.log(person1.dob.getFullYear())

console.log(person1.getBirthYear())
console.log(person1.getFullName())
