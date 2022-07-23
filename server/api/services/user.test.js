const Usertestingservice = require("./User.sr");
const userModels = require("../../model/user.Schema");

const { expect } = require("chai");
const sinon = require("sinon");

describe("User services Unit Tests", () => {
  afterEach(() => {
    sinon.restore();
  });
  describe("get userbyid", () => {
    it("should return a user", async () => {
      const id = 123456789;
      const userobj = {
        id: "212563696",
        firstName: "rivki",
        lastName: "Zada",
        address: {
          city: "Elad",
          street: "Nisim Gaon",
          number: "4",
        },
        phone: "0556737338",
        email: "s0556737338@gmail.com",
        hight: 1.64,
        weight: {
          startWeight: 45,
          meeting: [
            {
              date: "12/03/2022",
              weight: 45,
            },
            {
              date: "12/03/2022",
              weight: 45.7,
            },
            {
              date: "12/03/2022",
              weight: 46,
            },
          ],
        },
        dairies: [
          {
            date: "12/03/2022",
            Breakfast: [
              "banana",
              "choclate",
              "cheese",
              "yellowcheese",
              "cucumber",
            ],
            Lanch: ["chicken", "rice", "tomato", "cucumber", "onion"],
            Dinner: ["shoko", "choclate", "egg", "chesse", "cucumber"],
          },
          {
            date: "2022-07-05",
            Breakfast: ["yellowchesse", "bread", "salad", "cheese", "onion"],
            Lanch: ["chicken", "rice", "cucumber", "tomato", "onion"],
            Dinner: ["pizaa", "salad", "shum", "shoko", "vanila"],
          },
          {
            date: "",
            Breakfast: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: [
              "milk",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: [
              "milkshik",
              "egg",
              "banana",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "2022-07-01",
            Breakfast: [
              "Milk",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: [
              "milk",
              "choclate",
              "bread",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "2022-07-08",
            Breakfast: [
              "milk",
              "choclate",
              "bread",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "2022-07-07",
            Breakfast: ["milk", "kola", "", "enter food", "enter food"],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: ["קרקר", "גבינה", "עוגיות", "שוקו", "קפה"],
            Lanch: ["שניצל", "תפוח אדמה", "אורז", "פיתה", "מתבל"],
            Dinner: ["דג", "אורז", "בטטה", "מלפפון", "עגבניה"],
          },
        ],
      };
      sinon.stub(userModels, "findById").returns(userobj);
      const returnuser = await Usertestingservice.getUserById(id);
      expect(returnuser.firstName).to.equal(userobj.firstName);
      expect(returnuser.lastName).to.equal(userobj.lastName);
    });
  });

  it("should return error if user is invalid", async () => {
    const id = 123456789;
    sinon.stub(userModels, "findById").returns(null);
    await Usertestingservice.getUserById(id).catch((error) => {
      expect(error.meeting).to.equal("not found user with this id");
    });
  });
  describe("updateUser", () => {
    it("should update user", async () => {
      const id = 123456789;
      const userobj = {
        id: "212563696",
        firstName: "rivki",
        lastName: "Zada",
        address: {
          city: "Elad",
          street: "Nisim Gaon",
          number: "4",
        },
        phone: "0556737338",
        email: "s0556737338@gmail.com",
        hight: 1.64,
        weight: {
          startWeight: 45,
          meeting: [
            {
              date: "12/03/2022",
              weight: 45,
            },
            {
              date: "12/03/2022",
              weight: 45.7,
            },
            {
              date: "12/03/2022",
              weight: 46,
            },
          ],
        },
        dairies: [
          {
            date: "12/03/2022",
            Breakfast: [
              "banana",
              "choclate",
              "cheese",
              "yellowcheese",
              "cucumber",
            ],
            Lanch: ["chicken", "rice", "tomato", "cucumber", "onion"],
            Dinner: ["shoko", "choclate", "egg", "chesse", "cucumber"],
          },
          {
            date: "2022-07-05",
            Breakfast: ["yellowchesse", "bread", "salad", "cheese", "onion"],
            Lanch: ["chicken", "rice", "cucumber", "tomato", "onion"],
            Dinner: ["pizaa", "salad", "shum", "shoko", "vanila"],
          },
          {
            date: "",
            Breakfast: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: [
              "milk",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: [
              "milkshik",
              "egg",
              "banana",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "2022-07-01",
            Breakfast: [
              "Milk",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: [
              "milk",
              "choclate",
              "bread",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "2022-07-08",
            Breakfast: [
              "milk",
              "choclate",
              "bread",
              "enter food",
              "enter food",
            ],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "2022-07-07",
            Breakfast: ["milk", "kola", "", "enter food", "enter food"],
            Lanch: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
            Dinner: [
              "enter food",
              "enter food",
              "enter food",
              "enter food",
              "enter food",
            ],
          },
          {
            date: "",
            Breakfast: ["קרקר", "גבינה", "עוגיות", "שוקו", "קפה"],
            Lanch: ["שניצל", "תפוח אדמה", "אורז", "פיתה", "מתבל"],
            Dinner: ["דג", "אורז", "בטטה", "מלפפון", "עגבניה"],
          },
        ],
      };
      sinon.stub(userModels, "updateOne").returns(userobj);
      const returnuser = await Usertestingservice.updateUser(id, userobj);
      expect(returnuser).to.equal(userobj);
    });
  });
  // describe("user tests", () => {
  //   test("get all users returns a list", async () => {
  //     const result = await Usertestingservice.getUserById();
  //     expect(typeof result).toEqual(typeof Object());
  //   });
  // })

  // describe("json tests", () => {
  //     test("get all json users returns a list", () => {
  //         const result = Usertestingservice.getAllJson();
  //         expect(typeof result).toEqual(typeof Array());
  //     })
  // });
});
