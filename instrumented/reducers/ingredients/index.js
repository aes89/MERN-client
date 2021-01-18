function cov_go1mvsy3() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/ingredients/index.js";
  var hash = "4c6324b07590e80774028eb92d1da4c72a298088";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/ingredients/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 3,
          column: 59
        }
      },
      "1": {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 4,
          column: 59
        }
      },
      "2": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 5,
          column: 55
        }
      },
      "3": {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 6,
          column: 55
        }
      },
      "4": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 69
        }
      },
      "5": {
        start: {
          line: 11,
          column: 24
        },
        end: {
          line: 31,
          column: 2
        }
      },
      "6": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 30,
          column: 6
        }
      },
      "7": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 47
        }
      },
      "8": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 58
        }
      },
      "9": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 33
        }
      },
      "10": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 47
        }
      },
      "11": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 58
        }
      },
      "12": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 33
        }
      },
      "13": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 35
        }
      },
      "14": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 40
        }
      },
      "15": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 35
        }
      },
      "16": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 52
          },
          end: {
            line: 11,
            column: 53
          }
        },
        loc: {
          start: {
            line: 11,
            column: 65
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 32
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 13,
            column: 51
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 33
          }
        },
        loc: {
          start: {
            line: 18,
            column: 51
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 23,
            column: 31
          }
        },
        loc: {
          start: {
            line: 23,
            column: 41
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 23
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 27,
            column: 30
          },
          end: {
            line: 27,
            column: 31
          }
        },
        loc: {
          start: {
            line: 27,
            column: 41
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 27
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4c6324b07590e80774028eb92d1da4c72a298088"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_go1mvsy3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_go1mvsy3();
import { createAction, createReducer } from "@reduxjs/toolkit";
const fridgeIngredients = (cov_go1mvsy3().s[0]++, createAction("fridgeIngredients"));
const pantryIngredients = (cov_go1mvsy3().s[1]++, createAction("pantryIngredients"));
const deleteAllFridge = (cov_go1mvsy3().s[2]++, createAction("deleteAllFridge"));
const deleteAllPantry = (cov_go1mvsy3().s[3]++, createAction("deleteAllPantry"));
const initialState = (cov_go1mvsy3().s[4]++, {
  fridgeIngredients: [],
  pantryIngredients: []
});
const userIngredients = (cov_go1mvsy3().s[5]++, createReducer(initialState, builder => {
  cov_go1mvsy3().f[0]++;
  cov_go1mvsy3().s[6]++;
  builder.addCase(fridgeIngredients, (state, action) => {
    cov_go1mvsy3().f[1]++;
    cov_go1mvsy3().s[7]++;
    state.fridgeIngredients = action.payload;
    cov_go1mvsy3().s[8]++;
    console.log("state updated for fridgeIngredients!");
    cov_go1mvsy3().s[9]++;
    console.log(action.payload);
  }).addCase(pantryIngredients, (state, action) => {
    cov_go1mvsy3().f[2]++;
    cov_go1mvsy3().s[10]++;
    state.pantryIngredients = action.payload;
    cov_go1mvsy3().s[11]++;
    console.log("state updated for pantryIngredients!");
    cov_go1mvsy3().s[12]++;
    console.log(action.payload);
  }).addCase(deleteAllFridge, state => {
    cov_go1mvsy3().f[3]++;
    cov_go1mvsy3().s[13]++;
    state.fridgeIngredients = [];
    cov_go1mvsy3().s[14]++;
    console.log("cleared all fridge");
  }).addCase(deleteAllPantry, state => {
    cov_go1mvsy3().f[4]++;
    cov_go1mvsy3().s[15]++;
    state.pantryIngredients = [];
    cov_go1mvsy3().s[16]++;
    console.log("cleared all pantry");
  });
}));
export default userIngredients;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlZHVjZXIiLCJmcmlkZ2VJbmdyZWRpZW50cyIsInBhbnRyeUluZ3JlZGllbnRzIiwiZGVsZXRlQWxsRnJpZGdlIiwiZGVsZXRlQWxsUGFudHJ5IiwiaW5pdGlhbFN0YXRlIiwidXNlckluZ3JlZGllbnRzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFlBQVQsRUFBdUJDLGFBQXZCLFFBQTRDLGtCQUE1QztBQUVBLE1BQU1DLGlCQUFpQiwyQkFBR0YsWUFBWSxDQUFDLG1CQUFELENBQWYsQ0FBdkI7QUFDQSxNQUFNRyxpQkFBaUIsMkJBQUdILFlBQVksQ0FBQyxtQkFBRCxDQUFmLENBQXZCO0FBQ0EsTUFBTUksZUFBZSwyQkFBR0osWUFBWSxDQUFDLGlCQUFELENBQWYsQ0FBckI7QUFDQSxNQUFNSyxlQUFlLDJCQUFHTCxZQUFZLENBQUMsaUJBQUQsQ0FBZixDQUFyQjtBQUVBLE1BQU1NLFlBQVksMkJBQUc7QUFBRUosRUFBQUEsaUJBQWlCLEVBQUUsRUFBckI7QUFBeUJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQTVDLENBQUgsQ0FBbEI7QUFHQSxNQUFNSSxlQUFlLDJCQUFHTixhQUFhLENBQUNLLFlBQUQsRUFBZ0JFLE9BQUQsSUFBYTtBQUFBO0FBQUE7QUFDL0RBLEVBQUFBLE9BQU8sQ0FDSkMsT0FESCxDQUNXUCxpQkFEWCxFQUM4QixDQUFDUSxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFBQTtBQUFBO0FBQzdDRCxJQUFBQSxLQUFLLENBQUNSLGlCQUFOLEdBQTBCUyxNQUFNLENBQUNDLE9BQWpDO0FBRDZDO0FBRTdDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtBQUY2QztBQUc3Q0QsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0MsT0FBbkI7QUFDRCxHQUxILEVBTUdILE9BTkgsQ0FNV04saUJBTlgsRUFNOEIsQ0FBQ08sS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQUE7QUFBQTtBQUM3Q0QsSUFBQUEsS0FBSyxDQUFDUCxpQkFBTixHQUEwQlEsTUFBTSxDQUFDQyxPQUFqQztBQUQ2QztBQUU3Q0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0NBQVo7QUFGNkM7QUFHN0NELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNDLE9BQW5CO0FBQ0QsR0FWSCxFQVdHSCxPQVhILENBV1dMLGVBWFgsRUFXNkJNLEtBQUQsSUFBVztBQUFBO0FBQUE7QUFDbkNBLElBQUFBLEtBQUssQ0FBQ1IsaUJBQU4sR0FBMEIsRUFBMUI7QUFEbUM7QUFFbkNXLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0QsR0FkSCxFQWVHTCxPQWZILENBZVdKLGVBZlgsRUFlNkJLLEtBQUQsSUFBVztBQUFBO0FBQUE7QUFDbkNBLElBQUFBLEtBQUssQ0FBQ1AsaUJBQU4sR0FBMEIsRUFBMUI7QUFEbUM7QUFFbkNVLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0QsR0FsQkg7QUFtQkQsQ0FwQm9DLENBQWhCLENBQXJCO0FBc0JBLGVBQWVQLGVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBmcmlkZ2VJbmdyZWRpZW50cyA9IGNyZWF0ZUFjdGlvbihcImZyaWRnZUluZ3JlZGllbnRzXCIpO1xuY29uc3QgcGFudHJ5SW5ncmVkaWVudHMgPSBjcmVhdGVBY3Rpb24oXCJwYW50cnlJbmdyZWRpZW50c1wiKTtcbmNvbnN0IGRlbGV0ZUFsbEZyaWRnZSA9IGNyZWF0ZUFjdGlvbihcImRlbGV0ZUFsbEZyaWRnZVwiKTtcbmNvbnN0IGRlbGV0ZUFsbFBhbnRyeSA9IGNyZWF0ZUFjdGlvbihcImRlbGV0ZUFsbFBhbnRyeVwiKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBmcmlkZ2VJbmdyZWRpZW50czogW10sIHBhbnRyeUluZ3JlZGllbnRzOiBbXSB9O1xuXG5cbmNvbnN0IHVzZXJJbmdyZWRpZW50cyA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCAoYnVpbGRlcikgPT4ge1xuICBidWlsZGVyICAgICBcbiAgICAuYWRkQ2FzZShmcmlkZ2VJbmdyZWRpZW50cywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmZyaWRnZUluZ3JlZGllbnRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXRlIHVwZGF0ZWQgZm9yIGZyaWRnZUluZ3JlZGllbnRzIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKVxuICAgIH0pXG4gICAgLmFkZENhc2UocGFudHJ5SW5ncmVkaWVudHMsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5wYW50cnlJbmdyZWRpZW50cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSB1cGRhdGVkIGZvciBwYW50cnlJbmdyZWRpZW50cyFcIik7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcbiAgICB9KVxuICAgIC5hZGRDYXNlKGRlbGV0ZUFsbEZyaWRnZSwgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5mcmlkZ2VJbmdyZWRpZW50cyA9IFtdO1xuICAgICAgY29uc29sZS5sb2coXCJjbGVhcmVkIGFsbCBmcmlkZ2VcIik7XG4gICAgfSlcbiAgICAuYWRkQ2FzZShkZWxldGVBbGxQYW50cnksIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUucGFudHJ5SW5ncmVkaWVudHMgPSBbXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJlZCBhbGwgcGFudHJ5XCIpO1xuICAgIH0pXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckluZ3JlZGllbnRzO1xuIl19