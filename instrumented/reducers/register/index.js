function cov_y3mojan0h() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/register/index.js";
  var hash = "c11df82651fe1b842ea819309c81a8b7ecbfbad0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/register/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 3,
          column: 41
        }
      },
      "1": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 40
        }
      },
      "2": {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 61
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 51
          },
          end: {
            line: 8,
            column: 52
          }
        },
        loc: {
          start: {
            line: 8,
            column: 64
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 29
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c11df82651fe1b842ea819309c81a8b7ecbfbad0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_y3mojan0h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_y3mojan0h();
import { createAction, createReducer } from "@reduxjs/toolkit";
const register = (cov_y3mojan0h().s[0]++, createAction("register"));
const initialState = (cov_y3mojan0h().s[1]++, {
  username: false
}); //This reducer is not necessary

const userRegistered = (cov_y3mojan0h().s[2]++, createReducer(initialState, builder => {
  cov_y3mojan0h().f[0]++;
  cov_y3mojan0h().s[3]++;
  builder.addCase(register, state => {
    cov_y3mojan0h().f[1]++;
    cov_y3mojan0h().s[4]++;
    console.log("state updated for registered & logged in!");
    cov_y3mojan0h().s[5]++;
    state.username = true;
  });
}));
export default userRegistered;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlZHVjZXIiLCJyZWdpc3RlciIsImluaXRpYWxTdGF0ZSIsInVzZXJuYW1lIiwidXNlclJlZ2lzdGVyZWQiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFlBQVQsRUFBdUJDLGFBQXZCLFFBQTRDLGtCQUE1QztBQUVBLE1BQU1DLFFBQVEsNEJBQUdGLFlBQVksQ0FBQyxVQUFELENBQWYsQ0FBZDtBQUVBLE1BQU1HLFlBQVksNEJBQUc7QUFBRUMsRUFBQUEsUUFBUSxFQUFFO0FBQVosQ0FBSCxDQUFsQixDLENBRUE7O0FBQ0EsTUFBTUMsY0FBYyw0QkFBR0osYUFBYSxDQUFDRSxZQUFELEVBQWdCRyxPQUFELElBQWE7QUFBQTtBQUFBO0FBQzlEQSxFQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JMLFFBQWhCLEVBQTJCTSxLQUFELElBQVc7QUFBQTtBQUFBO0FBQ25DQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQ0FBWjtBQURtQztBQUVuQ0YsSUFBQUEsS0FBSyxDQUFDSixRQUFOLEdBQWlCLElBQWpCO0FBQ0QsR0FIRDtBQUlELENBTG1DLENBQWhCLENBQXBCO0FBT0EsZUFBZUMsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IHJlZ2lzdGVyID0gY3JlYXRlQWN0aW9uKFwicmVnaXN0ZXJcIik7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdXNlcm5hbWU6IGZhbHNlIH07XG5cbi8vVGhpcyByZWR1Y2VyIGlzIG5vdCBuZWNlc3NhcnlcbmNvbnN0IHVzZXJSZWdpc3RlcmVkID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PiB7XG4gIGJ1aWxkZXIuYWRkQ2FzZShyZWdpc3RlciwgKHN0YXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZSB1cGRhdGVkIGZvciByZWdpc3RlcmVkICYgbG9nZ2VkIGluIVwiKTtcbiAgICBzdGF0ZS51c2VybmFtZSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWdpc3RlcmVkO1xuIl19