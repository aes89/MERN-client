function cov_6nqsxo8n1() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/middleware/logger.js";
  var hash = "11cd84724c36df3094c3fc22b2f39c3e5e34119f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/middleware/logger.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 1,
          column: 26
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "2": {
        start: {
          line: 1,
          column: 36
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "3": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 29
        }
      },
      "4": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 38
        }
      },
      "5": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 27
        }
      },
      "6": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 46
        }
      },
      "7": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 21
        }
      },
      "8": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 15
          },
          end: {
            line: 1,
            column: 16
          }
        },
        loc: {
          start: {
            line: 1,
            column: 26
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 1,
            column: 26
          },
          end: {
            line: 1,
            column: 27
          }
        },
        loc: {
          start: {
            line: 1,
            column: 36
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 1
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 1,
            column: 36
          },
          end: {
            line: 1,
            column: 37
          }
        },
        loc: {
          start: {
            line: 1,
            column: 48
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 1
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "11cd84724c36df3094c3fc22b2f39c3e5e34119f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6nqsxo8n1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_6nqsxo8n1();
cov_6nqsxo8n1().s[0]++;

const logger = store => {
  cov_6nqsxo8n1().f[0]++;
  cov_6nqsxo8n1().s[1]++;
  return next => {
    cov_6nqsxo8n1().f[1]++;
    cov_6nqsxo8n1().s[2]++;
    return action => {
      cov_6nqsxo8n1().f[2]++;
      cov_6nqsxo8n1().s[3]++;
      console.group(action.type);
      cov_6nqsxo8n1().s[4]++;
      console.info("dispatching", action);
      let result = (cov_6nqsxo8n1().s[5]++, next(action));
      cov_6nqsxo8n1().s[6]++;
      console.log("next state", store.getState());
      cov_6nqsxo8n1().s[7]++;
      console.groupEnd();
      cov_6nqsxo8n1().s[8]++;
      return result;
    };
  };
};

export default logger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci5qcyJdLCJuYW1lcyI6WyJsb2dnZXIiLCJzdG9yZSIsIm5leHQiLCJhY3Rpb24iLCJjb25zb2xlIiwiZ3JvdXAiLCJ0eXBlIiwiaW5mbyIsInJlc3VsdCIsImxvZyIsImdldFN0YXRlIiwiZ3JvdXBFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7Ozs7QUFmWixNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUFBO0FBQUE7QUFBQSxTQUFDQyxJQUFELElBQVU7QUFBQTtBQUFBO0FBQUEsV0FBQ0MsTUFBRCxJQUFZO0FBQUE7QUFBQTtBQUM5Q0MsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNGLE1BQU0sQ0FBQ0csSUFBckI7QUFEOEM7QUFFOUNGLE1BQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhLGFBQWIsRUFBNEJKLE1BQTVCO0FBQ0EsVUFBSUssTUFBTSw0QkFBR04sSUFBSSxDQUFDQyxNQUFELENBQVAsQ0FBVjtBQUg4QztBQUk5Q0MsTUFBQUEsT0FBTyxDQUFDSyxHQUFSLENBQVksWUFBWixFQUEwQlIsS0FBSyxDQUFDUyxRQUFOLEVBQTFCO0FBSjhDO0FBSzlDTixNQUFBQSxPQUFPLENBQUNPLFFBQVI7QUFMOEM7QUFNOUMsYUFBT0gsTUFBUDtBQUNELEtBUG1DO0FBT25DLEdBUHlCO0FBT3pCLENBUEQ7O0FBU0EsZUFBZVIsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ2dlciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgY29uc29sZS5ncm91cChhY3Rpb24udHlwZSk7XG4gIGNvbnNvbGUuaW5mbyhcImRpc3BhdGNoaW5nXCIsIGFjdGlvbik7XG4gIGxldCByZXN1bHQgPSBuZXh0KGFjdGlvbik7XG4gIGNvbnNvbGUubG9nKFwibmV4dCBzdGF0ZVwiLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgY29uc29sZS5ncm91cEVuZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuIl19