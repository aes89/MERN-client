function cov_oit0neioo() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/preferences/index.js";
  var hash = "109a709bc9cd93e39f592d01e5c3e4a2185e3afd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/preferences/index.js",
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
          line: 5,
          column: 21
        },
        end: {
          line: 12,
          column: 42
        }
      },
      "2": {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 22,
          column: 2
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "4": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 39
        }
      },
      "5": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 37
        }
      },
      "6": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 52
          },
          end: {
            line: 16,
            column: 53
          }
        },
        loc: {
          start: {
            line: 16,
            column: 65
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 37
          },
          end: {
            line: 17,
            column: 38
          }
        },
        loc: {
          start: {
            line: 17,
            column: 56
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 17
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "109a709bc9cd93e39f592d01e5c3e4a2185e3afd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_oit0neioo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_oit0neioo();
import { createAction, createReducer } from "@reduxjs/toolkit";
const updatePreferences = (cov_oit0neioo().s[0]++, createAction("updatePreferences"));
const initialState = (cov_oit0neioo().s[1]++, {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false
}); //update initial state (null here) to new state, data collected from component.

const userPreferences = (cov_oit0neioo().s[2]++, createReducer(initialState, builder => {
  cov_oit0neioo().f[0]++;
  cov_oit0neioo().s[3]++;
  builder.addCase(updatePreferences, (state, action) => {
    cov_oit0neioo().f[1]++;
    cov_oit0neioo().s[4]++;
    state.preferences = action.payload;
    cov_oit0neioo().s[5]++;
    console.log("updated redux pref");
    cov_oit0neioo().s[6]++;
    console.log(action.payload);
  });
}));
export default userPreferences;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlZHVjZXIiLCJ1cGRhdGVQcmVmZXJlbmNlcyIsImluaXRpYWxTdGF0ZSIsInZlZ2V0YXJpYW4iLCJ2ZWdhbiIsImdsdXRlbkZyZWUiLCJkYWlyeUZyZWUiLCJ2ZXJ5SGVhbHRoeSIsImNoZWFwIiwidmVyeVBvcHVsYXIiLCJzdXN0YWluYWJsZSIsInVzZXJQcmVmZXJlbmNlcyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwic3RhdGUiLCJhY3Rpb24iLCJwcmVmZXJlbmNlcyIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxZQUFULEVBQXVCQyxhQUF2QixRQUE0QyxrQkFBNUM7QUFFQSxNQUFNQyxpQkFBaUIsNEJBQUdGLFlBQVksQ0FBQyxtQkFBRCxDQUFmLENBQXZCO0FBRUEsTUFBTUcsWUFBWSw0QkFBRztBQUFFQyxFQUFBQSxVQUFVLEVBQUUsS0FBZDtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsS0FEVDtBQUVFQyxFQUFBQSxVQUFVLEVBQUUsS0FGZDtBQUdFQyxFQUFBQSxTQUFTLEVBQUUsS0FIYjtBQUlFQyxFQUFBQSxXQUFXLEVBQUUsS0FKZjtBQUtFQyxFQUFBQSxLQUFLLEVBQUUsS0FMVDtBQU1FQyxFQUFBQSxXQUFXLEVBQUUsS0FOZjtBQU9FQyxFQUFBQSxXQUFXLEVBQUU7QUFQZixDQUFILENBQWxCLEMsQ0FVQTs7QUFDQSxNQUFNQyxlQUFlLDRCQUFHWCxhQUFhLENBQUNFLFlBQUQsRUFBZ0JVLE9BQUQsSUFBYTtBQUFBO0FBQUE7QUFDL0RBLEVBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlosaUJBQWhCLEVBQW1DLENBQUNhLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUFBO0FBQUE7QUFDcERELElBQUFBLEtBQUssQ0FBQ0UsV0FBTixHQUFvQkQsTUFBTSxDQUFDRSxPQUEzQjtBQURvRDtBQUVwREMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFGb0Q7QUFHcERELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFNLENBQUNFLE9BQW5CO0FBQ0QsR0FKRDtBQUtELENBTm9DLENBQWhCLENBQXJCO0FBUUEsZUFBZU4sZUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IHVwZGF0ZVByZWZlcmVuY2VzID0gY3JlYXRlQWN0aW9uKFwidXBkYXRlUHJlZmVyZW5jZXNcIik7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdmVnZXRhcmlhbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHZlZ2FuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgZ2x1dGVuRnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgIGRhaXJ5RnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHZlcnlIZWFsdGh5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgY2hlYXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICB2ZXJ5UG9wdWxhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHN1c3RhaW5hYmxlOiBmYWxzZX07XG5cblxuLy91cGRhdGUgaW5pdGlhbCBzdGF0ZSAobnVsbCBoZXJlKSB0byBuZXcgc3RhdGUsIGRhdGEgY29sbGVjdGVkIGZyb20gY29tcG9uZW50LlxuY29uc3QgdXNlclByZWZlcmVuY2VzID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PiB7XG4gIGJ1aWxkZXIuYWRkQ2FzZSh1cGRhdGVQcmVmZXJlbmNlcywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzdGF0ZS5wcmVmZXJlbmNlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlZCByZWR1eCBwcmVmXCIpXG4gICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJQcmVmZXJlbmNlcztcbiJdfQ==