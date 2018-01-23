myApp.directive('booksData', function() {
  return {
    restrict: "E",
    templateUrl: "template/all-books.html",
  }
});

myApp.directive('housesData', function() {
  return {
    restrict: "E",
    templateUrl: "template/all-houses.html",
  }
});
myApp.directive('charactersData', function() {
  return {
    restrict: "E",
    templateUrl: "template/all-characters.html",
  }
});


//tooltip custom directive
myApp.directive('toggle', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (attrs.toggle == "tooltip") {
        element.tooltip();
      }
      if (attrs.toggle == "popover") {
        $(element).popover();
      }
    }
  };
})