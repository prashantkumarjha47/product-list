function ListaComprasController($scope) {
  $scope.item = {};

  $scope.itens = [
    { product: "Bananas", quantity: 2, inStock: false },
    { product: "Mangoes", quantity: 12, inStock: false }
  ];

  $scope.adicionaItem = function() {
    $scope.itens.push({
      product: $scope.item.product,
      quantity: $scope.item.quantity,
      inStock: false
    });
    $scope.item.product = $scope.item.quantity = "";
    toastr.success("Item added successfully.");
  };

  $scope.editarItem = function(index) {
    $scope.item = $scope.itens[index];
    $scope.edit = true;
  };

  $scope.applyChanges = function(index) {
    $scope.item = {};
    $scope.edit = false;
    toastr.success("Item updated successfully.");
  };

  $scope.deleteItem = function(index) {
    $scope.itens.splice(index, 1);
    toastr.success("Item removed successfully.");
  };
}
