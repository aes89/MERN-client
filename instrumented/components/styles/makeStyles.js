function cov_2pqb2mlxes() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/components/styles/makeStyles.js";
  var hash = "c4fd9c0c936aabb2ec10498ed832d4c1929d9db1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/components/styles/makeStyles.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "1": {
        start: {
          line: 3,
          column: 41
        },
        end: {
          line: 18,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 3,
            column: 41
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 3
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
    hash: "c4fd9c0c936aabb2ec10498ed832d4c1929d9db1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pqb2mlxes = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pqb2mlxes();
import { makeStyles } from "@material-ui/core/styles";
const useStyles = (cov_2pqb2mlxes().s[0]++, makeStyles(theme => {
  cov_2pqb2mlxes().f[0]++;
  cov_2pqb2mlxes().s[1]++;
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      height: "100%",
      maxWidth: "275px"
    },
    paperIngredient: {
      margin: theme.spacing(1),
      maxHeight: "35px",
      maxWidth: "275px"
    }
  };
}));
export default useStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VTdHlsZXMuanMiXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpbiIsImhlaWdodCIsIm1heFdpZHRoIiwicGFwZXJJbmdyZWRpZW50IiwibWF4SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsVUFBVCxRQUEyQiwwQkFBM0I7QUFFQSxNQUFNQyxTQUFTLDZCQUFHRCxVQUFVLENBQUVFLEtBQUQsSUFBWTtBQUFBO0FBQUE7QUFBQTtBQUN2Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFFBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsT0FBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsTUFBQUEsTUFBTSxFQUFFTixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBRkg7QUFHTEUsTUFBQUEsTUFBTSxFQUFFLE1BSEg7QUFJTEMsTUFBQUEsUUFBUSxFQUFFO0FBSkwsS0FKZ0M7QUFVdkNDLElBQUFBLGVBQWUsRUFBRTtBQUNmSCxNQUFBQSxNQUFNLEVBQUVOLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FETztBQUVmSyxNQUFBQSxTQUFTLEVBQUUsTUFGSTtBQUdmRixNQUFBQSxRQUFRLEVBQUU7QUFISztBQVZzQjtBQWV4QyxDQWYyQixDQUFiLENBQWY7QUFpQkEsZUFBZVQsU0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBtYXhXaWR0aDogXCIyNzVweFwiLFxuICB9LFxuICBwYXBlckluZ3JlZGllbnQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWF4SGVpZ2h0OiBcIjM1cHhcIixcbiAgICBtYXhXaWR0aDogXCIyNzVweFwiLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XG4iXX0=