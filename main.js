class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food++;
    this.food++;
    // this.food += 2
  }
  eat() {
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
      // if (this.food < 1) {
      //   this.isHealthy = this.food;
      // } else {
      //   this.isHealthy = false;
      // }
    }
  }
}
class Wagon {
  constructor(cap) {
    this.capacity = cap;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
    if (this.getAvailableSeatCount() >= 1) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
      return false;
    }
  }

  totalFood() {
    let total = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      total += this.passengers[i].food;
    }
    return total;
  }
}
