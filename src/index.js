class Sorter {
    constructor() {
        this.store = [];
        this.compareFunction = this.defaultNumbersCompare;
    }

    defaultNumbersCompare(a, b) {
        return a-b;
    }

    add(element) {
        this.store.push(element);
    }

    at(index) {
        return this.store[index];
    }

    get length() {
        return this.store.length;
    }

    toArray() {
        return this.store;
    }

    sort(indices) {
      indices = indices.sort(this.defaultNumbersCompare);

      let sortedArray = this.store.filter((item, index) => {
          if (indices.some((element) => {
                  return index===element
              })
          ) {
              return true;
          }
      }).sort(this.compareFunction);

      indices.forEach((item, index) => {
          this.store[item] = sortedArray[index];
      });
    }

    setComparator(compareFunction) {
      this.compareFunction = compareFunction;
    }

}
module.exports = Sorter;
