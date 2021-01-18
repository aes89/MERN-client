function cov_2edbfbkcg8() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/modals/index.js";
  var hash = "e937d2083bd27696bfa8a4636758bc41cf2f8a20";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/modals/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 43
        }
      },
      "1": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 45
        }
      },
      "2": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 36
        }
      },
      "3": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 16,
          column: 2
        }
      },
      "4": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 15,
          column: 7
        }
      },
      "5": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 35
        }
      },
      "6": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 46
          },
          end: {
            line: 8,
            column: 47
          }
        },
        loc: {
          start: {
            line: 8,
            column: 59
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 25
          }
        },
        loc: {
          start: {
            line: 10,
            column: 43
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 25
          },
          end: {
            line: 13,
            column: 26
          }
        },
        loc: {
          start: {
            line: 13,
            column: 36
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
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
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e937d2083bd27696bfa8a4636758bc41cf2f8a20"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2edbfbkcg8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2edbfbkcg8();
import { createAction, createReducer } from "@reduxjs/toolkit";
const openModal = (cov_2edbfbkcg8().s[0]++, createAction("openModal"));
const closeModal = (cov_2edbfbkcg8().s[1]++, createAction("closeModal"));
const initialState = (cov_2edbfbkcg8().s[2]++, {
  modal: null
});
const modalOpen = (cov_2edbfbkcg8().s[3]++, createReducer(initialState, builder => {
  cov_2edbfbkcg8().f[0]++;
  cov_2edbfbkcg8().s[4]++;
  builder.addCase(openModal, (state, action) => {
    cov_2edbfbkcg8().f[1]++;
    cov_2edbfbkcg8().s[5]++;
    state.modal = action.payload;
  }).addCase(closeModal, state => {
    cov_2edbfbkcg8().f[2]++;
    cov_2edbfbkcg8().s[6]++;
    state.modal = null;
  });
}));
export default modalOpen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlZHVjZXIiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiaW5pdGlhbFN0YXRlIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJidWlsZGVyIiwiYWRkQ2FzZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFlBQVQsRUFBdUJDLGFBQXZCLFFBQTRDLGtCQUE1QztBQUVBLE1BQU1DLFNBQVMsNkJBQUdGLFlBQVksQ0FBQyxXQUFELENBQWYsQ0FBZjtBQUNBLE1BQU1HLFVBQVUsNkJBQUdILFlBQVksQ0FBQyxZQUFELENBQWYsQ0FBaEI7QUFFQSxNQUFNSSxZQUFZLDZCQUFHO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQUgsQ0FBbEI7QUFFQSxNQUFNQyxTQUFTLDZCQUFHTCxhQUFhLENBQUNHLFlBQUQsRUFBZ0JHLE9BQUQsSUFBYTtBQUFBO0FBQUE7QUFDekRBLEVBQUFBLE9BQU8sQ0FDSkMsT0FESCxDQUNXTixTQURYLEVBQ3NCLENBQUNPLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUFBO0FBQUE7QUFDckNELElBQUFBLEtBQUssQ0FBQ0osS0FBTixHQUFjSyxNQUFNLENBQUNDLE9BQXJCO0FBQ0QsR0FISCxFQUlHSCxPQUpILENBSVdMLFVBSlgsRUFJd0JNLEtBQUQsSUFBVztBQUFBO0FBQUE7QUFDOUJBLElBQUFBLEtBQUssQ0FBQ0osS0FBTixHQUFjLElBQWQ7QUFDRCxHQU5IO0FBT0QsQ0FSOEIsQ0FBaEIsQ0FBZjtBQVVBLGVBQWVDLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBvcGVuTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJvcGVuTW9kYWxcIik7XG5jb25zdCBjbG9zZU1vZGFsID0gY3JlYXRlQWN0aW9uKFwiY2xvc2VNb2RhbFwiKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBtb2RhbDogbnVsbCB9O1xuXG5jb25zdCBtb2RhbE9wZW4gPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgKGJ1aWxkZXIpID0+IHtcbiAgYnVpbGRlclxuICAgIC5hZGRDYXNlKG9wZW5Nb2RhbCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLm1vZGFsID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSlcbiAgICAuYWRkQ2FzZShjbG9zZU1vZGFsLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLm1vZGFsID0gbnVsbDtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbE9wZW47XG4iXX0=