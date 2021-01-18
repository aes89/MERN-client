function cov_10br8ta488() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/config/api.js";
  var hash = "e6731b74a17d19a7a6da0dee9807fb57fd938e04";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/config/api.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e6731b74a17d19a7a6da0dee9807fb57fd938e04"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10br8ta488 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10br8ta488();
import axios from "axios"; // Create an axios instance

export default axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
  withCredentials: true,
  headers: {
    "access-control-allow-origin": "*"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEIsQyxDQUVBOztBQUNBLGVBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzFCQyxFQUFBQSxPQUFPLEVBQUUsdUJBRGlCO0FBRTFCQyxFQUFBQSxPQUFPLEVBQUUsSUFGaUI7QUFHMUJDLEVBQUFBLGVBQWUsRUFBRSxJQUhTO0FBSTFCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUCxtQ0FBK0I7QUFEeEI7QUFKaUIsQ0FBYixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBDcmVhdGUgYW4gYXhpb3MgaW5zdGFuY2VcbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDA5XCIsXG4gIHRpbWVvdXQ6IDUwMDAsXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgaGVhZGVyczoge1xuICAgIFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI6IFwiKlwiLFxuICB9LFxufSk7XG4iXX0=