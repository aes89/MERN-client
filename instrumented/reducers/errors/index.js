function cov_19eysjn1p2() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/errors/index.js";
  var hash = "cd734da2213bcc4ba3a2974c0bdaf660706847e2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/errors/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 35
        }
      },
      "1": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 35
        }
      },
      "2": {
        start: {
          line: 7,
          column: 23
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 13,
          column: 6
        }
      },
      "4": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 35
        }
      },
      "5": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 46
        }
      },
      "6": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 51
          },
          end: {
            line: 7,
            column: 52
          }
        },
        loc: {
          start: {
            line: 7,
            column: 64
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 20
          },
          end: {
            line: 9,
            column: 21
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
          },
          end: {
            line: 13,
            column: 5
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
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cd734da2213bcc4ba3a2974c0bdaf660706847e2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19eysjn1p2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_19eysjn1p2();
import { createAction, createReducer } from "@reduxjs/toolkit";
const error = (cov_19eysjn1p2().s[0]++, createAction("error"));
const initialState = (cov_19eysjn1p2().s[1]++, {
  error: null
});
const errorsMessages = (cov_19eysjn1p2().s[2]++, createReducer(initialState, builder => {
  cov_19eysjn1p2().f[0]++;
  cov_19eysjn1p2().s[3]++;
  builder.addCase(error, (state, action) => {
    cov_19eysjn1p2().f[1]++;
    cov_19eysjn1p2().s[4]++;
    state.error = action.payload;
    cov_19eysjn1p2().s[5]++;
    console.log("state updated for error!");
    cov_19eysjn1p2().s[6]++;
    console.log(action.payload);
  });
}));
export default errorsMessages;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlZHVjZXIiLCJlcnJvciIsImluaXRpYWxTdGF0ZSIsImVycm9yc01lc3NhZ2VzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxZQUFULEVBQXVCQyxhQUF2QixRQUE0QyxrQkFBNUM7QUFFQSxNQUFNQyxLQUFLLDZCQUFHRixZQUFZLENBQUMsT0FBRCxDQUFmLENBQVg7QUFFQSxNQUFNRyxZQUFZLDZCQUFHO0FBQUVELEVBQUFBLEtBQUssRUFBRTtBQUFULENBQUgsQ0FBbEI7QUFFQSxNQUFNRSxjQUFjLDZCQUFHSCxhQUFhLENBQUNFLFlBQUQsRUFBZ0JFLE9BQUQsSUFBYTtBQUFBO0FBQUE7QUFDOURBLEVBQUFBLE9BQU8sQ0FDSkMsT0FESCxDQUNXSixLQURYLEVBQ2tCLENBQUNLLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUFBO0FBQUE7QUFDakNELElBQUFBLEtBQUssQ0FBQ0wsS0FBTixHQUFjTSxNQUFNLENBQUNDLE9BQXJCO0FBRGlDO0FBRWpDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUZpQztBQUdqQ0QsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0MsT0FBbkI7QUFDRCxHQUxIO0FBTUQsQ0FQbUMsQ0FBaEIsQ0FBcEI7QUFTQSxlQUFlTCxjQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgZXJyb3IgPSBjcmVhdGVBY3Rpb24oXCJlcnJvclwiKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBlcnJvcjogbnVsbH07XG5cbmNvbnN0IGVycm9yc01lc3NhZ2VzID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PiB7XG4gIGJ1aWxkZXJcbiAgICAuYWRkQ2FzZShlcnJvciwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXRlIHVwZGF0ZWQgZm9yIGVycm9yIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JzTWVzc2FnZXM7XG4iXX0=