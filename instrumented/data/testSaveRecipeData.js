function cov_1kshstolr1() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/data/testSaveRecipeData.js";
  var hash = "5de00233642c5f99b52a4edff631968d91cc2f3d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/data/testSaveRecipeData.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 14
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "1": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "TestSaveData",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 21
          }
        },
        loc: {
          start: {
            line: 1,
            column: 25
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5de00233642c5f99b52a4edff631968d91cc2f3d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1kshstolr1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1kshstolr1();

function TestSaveData() {
  cov_1kshstolr1().f[0]++;
  let array = (cov_1kshstolr1().s[0]++, [{
    username: "test",
    _id: 1234,
    title: "testRecipe",
    readyInMinutes: 20,
    servings: 4,
    sourceUrl: "www.test.com",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80",
    cuisines: ["Asian", "indian"],
    dishTypes: ["breakfast", "lunch"],
    diets: ["healthy", "paleo"],
    instructions: ["1", "2"],
    create_date: Date.now(),
    modified_date: Date.now()
  }]);
  cov_1kshstolr1().s[1]++;
  return array;
}

;
export default TestSaveData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RTYXZlUmVjaXBlRGF0YS5qcyJdLCJuYW1lcyI6WyJUZXN0U2F2ZURhdGEiLCJhcnJheSIsInVzZXJuYW1lIiwiX2lkIiwidGl0bGUiLCJyZWFkeUluTWludXRlcyIsInNlcnZpbmdzIiwic291cmNlVXJsIiwiaW1hZ2UiLCJjdWlzaW5lcyIsImRpc2hUeXBlcyIsImRpZXRzIiwiaW5zdHJ1Y3Rpb25zIiwiY3JlYXRlX2RhdGUiLCJEYXRlIiwibm93IiwibW9kaWZpZWRfZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixTQUFTQSxZQUFULEdBQXlCO0FBQUE7QUFDdkIsTUFBSUMsS0FBSyw2QkFBRyxDQUNWO0FBQ0FDLElBQUFBLFFBQVEsRUFBRSxNQURWO0FBRUFDLElBQUFBLEdBQUcsRUFBRyxJQUZOO0FBR0FDLElBQUFBLEtBQUssRUFBRSxZQUhQO0FBSUFDLElBQUFBLGNBQWMsRUFBRSxFQUpoQjtBQUtBQyxJQUFBQSxRQUFRLEVBQUUsQ0FMVjtBQU1BQyxJQUFBQSxTQUFTLEVBQUUsY0FOWDtBQU9BQyxJQUFBQSxLQUFLLEVBQUUsa0tBUFA7QUFRQUMsSUFBQUEsUUFBUSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FSVjtBQVNBQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxXQUFELEVBQWMsT0FBZCxDQVRYO0FBVUFDLElBQUFBLEtBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxPQUFaLENBVlA7QUFXQUMsSUFBQUEsWUFBWSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FYZDtBQVlBQyxJQUFBQSxXQUFXLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQVpiO0FBYUFDLElBQUFBLGFBQWEsRUFBRUYsSUFBSSxDQUFDQyxHQUFMO0FBYmYsR0FEVSxDQUFILENBQVQ7QUFEdUI7QUFrQnZCLFNBQU9kLEtBQVA7QUFDQzs7QUFBQTtBQUVELGVBQWVELFlBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBUZXN0U2F2ZURhdGEgKCkgeyBcbiAgbGV0IGFycmF5ID0gW1xuICAgIHtcbiAgICB1c2VybmFtZTogXCJ0ZXN0XCIsXG4gICAgX2lkIDogMTIzNCxcbiAgICB0aXRsZTogXCJ0ZXN0UmVjaXBlXCIsXG4gICAgcmVhZHlJbk1pbnV0ZXM6IDIwLFxuICAgIHNlcnZpbmdzOiA0LFxuICAgIHNvdXJjZVVybDogXCJ3d3cudGVzdC5jb21cIixcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5MDY0NTkzNTk2Ny0xMGRlNmJhMTcwNjE/aXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTMzNSZxPTgwXCIsXG4gICAgY3Vpc2luZXM6IFtcIkFzaWFuXCIsIFwiaW5kaWFuXCJdLFxuICAgIGRpc2hUeXBlczogW1wiYnJlYWtmYXN0XCIsIFwibHVuY2hcIl0sXG4gICAgZGlldHM6IFtcImhlYWx0aHlcIiwgXCJwYWxlb1wiXSxcbiAgICBpbnN0cnVjdGlvbnM6IFtcIjFcIiwgXCIyXCJdLFxuICAgIGNyZWF0ZV9kYXRlOiBEYXRlLm5vdygpLFxuICAgIG1vZGlmaWVkX2RhdGU6IERhdGUubm93KCkgXG4gICAgfVxuICBdXG4gIHJldHVybiBhcnJheVxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgVGVzdFNhdmVEYXRhO1xuICBcblxuXG4iXX0=