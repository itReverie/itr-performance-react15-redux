//TODO:This needs to be replaced for an API url
const concepts = [
  { id: 1, name: "Steve", debt: 200000, lastActivityDate: "6th June 2017" },
  { id: 2, name: "Damian", debt: 550000, lastActivityDate: "6th June 2017" },
  { id: 3, name: "Anna", debt: 130000, lastActivityDate: "6th June 2017" },
  { id: 4, name: "Olvia", debt: 200000, lastActivityDate: "6th June 2017" },
  { id: 5, name: "Luke", debt: 550000, lastActivityDate: "6th June 2017" },
  { id: 6, name: "Karla", debt: 130000, lastActivityDate: "6th June 2017" }
];

class conceptAPI {

  static getAllConcepts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], concepts));
      });
    });
  }
}

export default conceptAPI;
