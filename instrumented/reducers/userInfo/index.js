function cov_4aldoggt0() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/userInfo/index.js";
  var hash = "2d9556d3a8283b0fa39c8aa732a4c559c5174379";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers/userInfo/index.js",
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
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 51
        }
      },
      "2": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 5,
          column: 51
        }
      },
      "3": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 7,
          column: 76
        }
      },
      "4": {
        start: {
          line: 10,
          column: 28
        },
        end: {
          line: 27,
          column: 2
        }
      },
      "5": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "6": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 33
        }
      },
      "7": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 45
        }
      },
      "8": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 39
        }
      },
      "9": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 43
        }
      },
      "10": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 41
        }
      },
      "11": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 32
        }
      },
      "12": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "13": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 64
        }
      },
      "14": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 44
        }
      },
      "15": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "16": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 56
          },
          end: {
            line: 10,
            column: 57
          }
        },
        loc: {
          start: {
            line: 10,
            column: 69
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 10
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
            line: 18,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 19,
            column: 34
          }
        },
        loc: {
          start: {
            line: 19,
            column: 53
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 34
          }
        },
        loc: {
          start: {
            line: 23,
            column: 44
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 23
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
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2d9556d3a8283b0fa39c8aa732a4c559c5174379"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_4aldoggt0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_4aldoggt0();
import { createAction, createReducer } from "@reduxjs/toolkit";
const settings = (cov_4aldoggt0().s[0]++, createAction("settings"));
const updateProfile = (cov_4aldoggt0().s[1]++, createAction("updateProfile"));
const removeProfile = (cov_4aldoggt0().s[2]++, createAction("removeProfile"));
const initialState = (cov_4aldoggt0().s[3]++, {
  username: "Username",
  email: "Email",
  profile: null
}); //update initial state (null here) to new state, data collected from component.

const currentUserSettings = (cov_4aldoggt0().s[4]++, createReducer(initialState, builder => {
  cov_4aldoggt0().f[0]++;
  cov_4aldoggt0().s[5]++;
  builder.addCase(settings, (state, action) => {
    cov_4aldoggt0().f[1]++;
    cov_4aldoggt0().s[6]++;
    console.log("hitting start");
    cov_4aldoggt0().s[7]++;
    state.username = action.payload.username;
    cov_4aldoggt0().s[8]++;
    state.email = action.payload.email;
    cov_4aldoggt0().s[9]++;
    state.profile = action.payload.profile;
    cov_4aldoggt0().s[10]++;
    console.log("user settings updated");
    cov_4aldoggt0().s[11]++;
    console.log(action.payload);
  });
  cov_4aldoggt0().s[12]++;
  builder.addCase(updateProfile, (state, actions) => {
    cov_4aldoggt0().f[2]++;
    cov_4aldoggt0().s[13]++;
    console.log("hitting this action", actions.payload.profile);
    cov_4aldoggt0().s[14]++;
    state.profile = actions.payload.profile;
  });
  cov_4aldoggt0().s[15]++;
  builder.addCase(removeProfile, state => {
    cov_4aldoggt0().f[3]++;
    cov_4aldoggt0().s[16]++;
    state.profile = null;
  });
}));
export default currentUserSettings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlZHVjZXIiLCJzZXR0aW5ncyIsInVwZGF0ZVByb2ZpbGUiLCJyZW1vdmVQcm9maWxlIiwiaW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJjdXJyZW50VXNlclNldHRpbmdzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFlBQVQsRUFBdUJDLGFBQXZCLFFBQTRDLGtCQUE1QztBQUVBLE1BQU1DLFFBQVEsNEJBQUdGLFlBQVksQ0FBQyxVQUFELENBQWYsQ0FBZDtBQUNBLE1BQU1HLGFBQWEsNEJBQUdILFlBQVksQ0FBQyxlQUFELENBQWYsQ0FBbkI7QUFDQSxNQUFNSSxhQUFhLDRCQUFHSixZQUFZLENBQUMsZUFBRCxDQUFmLENBQW5CO0FBRUEsTUFBTUssWUFBWSw0QkFBRztBQUFFQyxFQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3QkMsRUFBQUEsS0FBSyxFQUFFLE9BQS9CO0FBQXdDQyxFQUFBQSxPQUFPLEVBQUU7QUFBakQsQ0FBSCxDQUFsQixDLENBRUE7O0FBQ0EsTUFBTUMsbUJBQW1CLDRCQUFHUixhQUFhLENBQUNJLFlBQUQsRUFBZ0JLLE9BQUQsSUFBYTtBQUFBO0FBQUE7QUFDbkVBLEVBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlQsUUFBaEIsRUFBMEIsQ0FBQ1UsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQUE7QUFBQTtBQUMzQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUQyQztBQUUzQ0gsSUFBQUEsS0FBSyxDQUFDTixRQUFOLEdBQWlCTyxNQUFNLENBQUNHLE9BQVAsQ0FBZVYsUUFBaEM7QUFGMkM7QUFHM0NNLElBQUFBLEtBQUssQ0FBQ0wsS0FBTixHQUFjTSxNQUFNLENBQUNHLE9BQVAsQ0FBZVQsS0FBN0I7QUFIMkM7QUFJM0NLLElBQUFBLEtBQUssQ0FBQ0osT0FBTixHQUFnQkssTUFBTSxDQUFDRyxPQUFQLENBQWVSLE9BQS9CO0FBSjJDO0FBSzNDTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUwyQztBQU0zQ0QsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csT0FBbkI7QUFDRCxHQVBEO0FBRG1FO0FBU25FTixFQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JSLGFBQWhCLEVBQStCLENBQUNTLEtBQUQsRUFBUUssT0FBUixLQUFvQjtBQUFBO0FBQUE7QUFDakRILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DRSxPQUFPLENBQUNELE9BQVIsQ0FBZ0JSLE9BQW5EO0FBRGlEO0FBRWpESSxJQUFBQSxLQUFLLENBQUNKLE9BQU4sR0FBZ0JTLE9BQU8sQ0FBQ0QsT0FBUixDQUFnQlIsT0FBaEM7QUFDRCxHQUhEO0FBVG1FO0FBYW5FRSxFQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JQLGFBQWhCLEVBQWdDUSxLQUFELElBQVc7QUFBQTtBQUFBO0FBQ3RDQSxJQUFBQSxLQUFLLENBQUNKLE9BQU4sR0FBZ0IsSUFBaEI7QUFDRCxHQUZIO0FBSUQsQ0FqQndDLENBQWhCLENBQXpCO0FBbUJBLGVBQWVDLG1CQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3Qgc2V0dGluZ3MgPSBjcmVhdGVBY3Rpb24oXCJzZXR0aW5nc1wiKTtcbmNvbnN0IHVwZGF0ZVByb2ZpbGUgPSBjcmVhdGVBY3Rpb24oXCJ1cGRhdGVQcm9maWxlXCIpO1xuY29uc3QgcmVtb3ZlUHJvZmlsZSA9IGNyZWF0ZUFjdGlvbihcInJlbW92ZVByb2ZpbGVcIik7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdXNlcm5hbWU6IFwiVXNlcm5hbWVcIiwgZW1haWw6IFwiRW1haWxcIiwgcHJvZmlsZTogbnVsbCB9O1xuXG4vL3VwZGF0ZSBpbml0aWFsIHN0YXRlIChudWxsIGhlcmUpIHRvIG5ldyBzdGF0ZSwgZGF0YSBjb2xsZWN0ZWQgZnJvbSBjb21wb25lbnQuXG5jb25zdCBjdXJyZW50VXNlclNldHRpbmdzID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PiB7XG4gIGJ1aWxkZXIuYWRkQ2FzZShzZXR0aW5ncywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhpdHRpbmcgc3RhcnRcIik7XG4gICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTsgICBcbiAgICBzdGF0ZS5lbWFpbCA9IGFjdGlvbi5wYXlsb2FkLmVtYWlsO1xuICAgIHN0YXRlLnByb2ZpbGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9maWxlO1xuICAgIGNvbnNvbGUubG9nKFwidXNlciBzZXR0aW5ncyB1cGRhdGVkXCIpO1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcbiAgfSk7XG4gIGJ1aWxkZXIuYWRkQ2FzZSh1cGRhdGVQcm9maWxlLCAoc3RhdGUsIGFjdGlvbnMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhpdHRpbmcgdGhpcyBhY3Rpb25cIiwgYWN0aW9ucy5wYXlsb2FkLnByb2ZpbGUpO1xuICAgIHN0YXRlLnByb2ZpbGUgPSBhY3Rpb25zLnBheWxvYWQucHJvZmlsZTtcbiAgfSk7XG4gIGJ1aWxkZXIuYWRkQ2FzZShyZW1vdmVQcm9maWxlLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnByb2ZpbGUgPSBudWxsO1xuICAgIH0pXG4gIFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRVc2VyU2V0dGluZ3M7XG4iXX0=