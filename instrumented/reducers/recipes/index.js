function cov_2jc3ua0cmm() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/recipes/index.js";
  var hash = "6edcaa6867e6aee0bfdade720d7681da875bda9c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/recipes/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 51
        }
      },
      "1": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 49
        }
      },
      "2": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 49
        }
      },
      "3": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 7,
          column: 84
        }
      },
      "4": {
        start: {
          line: 9,
          column: 16
        },
        end: {
          line: 27,
          column: 2
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "6": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 43
        }
      },
      "7": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 55
        }
      },
      "8": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 33
        }
      },
      "9": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 42
        }
      },
      "10": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 54
        }
      },
      "11": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 33
        }
      },
      "12": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 42
        }
      },
      "13": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 54
        }
      },
      "14": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 44
          },
          end: {
            line: 9,
            column: 45
          }
        },
        loc: {
          start: {
            line: 9,
            column: 57
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 28
          },
          end: {
            line: 11,
            column: 29
          }
        },
        loc: {
          start: {
            line: 11,
            column: 47
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 27
          },
          end: {
            line: 16,
            column: 28
          }
        },
        loc: {
          start: {
            line: 16,
            column: 46
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 21,
            column: 46
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 21
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
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6edcaa6867e6aee0bfdade720d7681da875bda9c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2jc3ua0cmm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2jc3ua0cmm();
import { createAction, createReducer } from "@reduxjs/toolkit";
const browseRecipes = (cov_2jc3ua0cmm().s[0]++, createAction("browseRecipes"));
const savedRecipes = (cov_2jc3ua0cmm().s[1]++, createAction("savedRecipes"));
const singleRecipe = (cov_2jc3ua0cmm().s[2]++, createAction("singleRecipe"));
const initialState = (cov_2jc3ua0cmm().s[3]++, {
  browseRecipes: null,
  savedRecipes: null,
  singleRecipe: null
});
const recipes = (cov_2jc3ua0cmm().s[4]++, createReducer(initialState, builder => {
  cov_2jc3ua0cmm().f[0]++;
  cov_2jc3ua0cmm().s[5]++;
  builder.addCase(browseRecipes, (state, action) => {
    cov_2jc3ua0cmm().f[1]++;
    cov_2jc3ua0cmm().s[6]++;
    state.browseRecipes = action.payload;
    cov_2jc3ua0cmm().s[7]++;
    console.log("state updated for browse Recipes!");
    cov_2jc3ua0cmm().s[8]++;
    console.log(action.payload);
  }).addCase(savedRecipes, (state, action) => {
    cov_2jc3ua0cmm().f[2]++;
    cov_2jc3ua0cmm().s[9]++;
    state.savedRecipes = action.payload;
    cov_2jc3ua0cmm().s[10]++;
    console.log("state updated for saved Recipes!");
    cov_2jc3ua0cmm().s[11]++;
    console.log(action.payload);
  }).addCase(singleRecipe, (state, action) => {
    cov_2jc3ua0cmm().f[3]++;
    cov_2jc3ua0cmm().s[12]++;
    state.singleRecipe = action.payload;
    cov_2jc3ua0cmm().s[13]++;
    console.log("state updated for single Recipe!");
    cov_2jc3ua0cmm().s[14]++;
    console.log(action.payload);
  });
}));
export default recipes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlZHVjZXIiLCJicm93c2VSZWNpcGVzIiwic2F2ZWRSZWNpcGVzIiwic2luZ2xlUmVjaXBlIiwiaW5pdGlhbFN0YXRlIiwicmVjaXBlcyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsWUFBVCxFQUF1QkMsYUFBdkIsUUFBNEMsa0JBQTVDO0FBRUEsTUFBTUMsYUFBYSw2QkFBR0YsWUFBWSxDQUFDLGVBQUQsQ0FBZixDQUFuQjtBQUNBLE1BQU1HLFlBQVksNkJBQUdILFlBQVksQ0FBQyxjQUFELENBQWYsQ0FBbEI7QUFDQSxNQUFNSSxZQUFZLDZCQUFHSixZQUFZLENBQUMsY0FBRCxDQUFmLENBQWxCO0FBRUEsTUFBTUssWUFBWSw2QkFBRztBQUFFSCxFQUFBQSxhQUFhLEVBQUUsSUFBakI7QUFBdUJDLEVBQUFBLFlBQVksRUFBRSxJQUFyQztBQUEyQ0MsRUFBQUEsWUFBWSxFQUFFO0FBQXpELENBQUgsQ0FBbEI7QUFFQSxNQUFNRSxPQUFPLDZCQUFHTCxhQUFhLENBQUNJLFlBQUQsRUFBZ0JFLE9BQUQsSUFBYTtBQUFBO0FBQUE7QUFDdkRBLEVBQUFBLE9BQU8sQ0FDSkMsT0FESCxDQUNXTixhQURYLEVBQzBCLENBQUNPLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUFBO0FBQUE7QUFDekNELElBQUFBLEtBQUssQ0FBQ1AsYUFBTixHQUFzQlEsTUFBTSxDQUFDQyxPQUE3QjtBQUR5QztBQUV6Q0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFGeUM7QUFHekNELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNDLE9BQW5CO0FBQ0QsR0FMSCxFQU1HSCxPQU5ILENBTVdMLFlBTlgsRUFNeUIsQ0FBQ00sS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQUE7QUFBQTtBQUN4Q0QsSUFBQUEsS0FBSyxDQUFDTixZQUFOLEdBQXFCTyxNQUFNLENBQUNDLE9BQTVCO0FBRHdDO0FBRXhDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUZ3QztBQUd4Q0QsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0MsT0FBbkI7QUFDRCxHQVZILEVBV0dILE9BWEgsQ0FXV0osWUFYWCxFQVd5QixDQUFDSyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFBQTtBQUFBO0FBQ3hDRCxJQUFBQSxLQUFLLENBQUNMLFlBQU4sR0FBcUJNLE1BQU0sQ0FBQ0MsT0FBNUI7QUFEd0M7QUFFeENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFaO0FBRndDO0FBR3hDRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDQyxPQUFuQjtBQUNELEdBZkg7QUFpQkQsQ0FsQjRCLENBQWhCLENBQWI7QUFvQkEsZUFBZUwsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGJyb3dzZVJlY2lwZXMgPSBjcmVhdGVBY3Rpb24oXCJicm93c2VSZWNpcGVzXCIpOyAgICBcbmNvbnN0IHNhdmVkUmVjaXBlcyA9IGNyZWF0ZUFjdGlvbihcInNhdmVkUmVjaXBlc1wiKTtcbmNvbnN0IHNpbmdsZVJlY2lwZSA9IGNyZWF0ZUFjdGlvbihcInNpbmdsZVJlY2lwZVwiKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBicm93c2VSZWNpcGVzOiBudWxsLCBzYXZlZFJlY2lwZXM6IG51bGwsIHNpbmdsZVJlY2lwZTogbnVsbCB9O1xuXG5jb25zdCByZWNpcGVzID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PiB7XG4gIGJ1aWxkZXJcbiAgICAuYWRkQ2FzZShicm93c2VSZWNpcGVzLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuYnJvd3NlUmVjaXBlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSB1cGRhdGVkIGZvciBicm93c2UgUmVjaXBlcyFcIik7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcbiAgICB9KVxuICAgIC5hZGRDYXNlKHNhdmVkUmVjaXBlcywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnNhdmVkUmVjaXBlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSB1cGRhdGVkIGZvciBzYXZlZCBSZWNpcGVzIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKVxuICAgIH0pXG4gICAgLmFkZENhc2Uoc2luZ2xlUmVjaXBlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuc2luZ2xlUmVjaXBlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXRlIHVwZGF0ZWQgZm9yIHNpbmdsZSBSZWNpcGUhXCIpO1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXG4gICAgfSlcbiAgICBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWNpcGVzO1xuIl19