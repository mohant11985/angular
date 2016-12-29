angular.module("myApp", ['angularTreeview'])
    .controller('MainCtrl', function($scope) {
        $scope.treedata =
            [
                { "label" : "User", "id" : "role1", "children" : [] },
                { "label" : "User", "id" : "role11", "children" : [
                    { "label" : "subUser1", "id" : "role111", "children" : [] },
                    { "label" : "subUser2", "id" : "role112", "children" : [
                        { "label" : "subUser2-1", "id" : "role1121", "children" : [
                            { "label" : "subUser2-1-1", "id" : "role11211", "children" : [] },
                            { "label" : "subUser2-1-2", "id" : "role11212", "children" : [] }
                        ]}
                    ]}
                ]},
                { "label" : "Admin", "id" : "role2", "children" : [] },
                { "label" : "Guest", "id" : "role3", "children" : [] }
            ];
        $scope.$watch( 'workspace.currentNode', function( newObj, oldObj ) {
            if( $scope.workspace && angular.isObject($scope.workspace.currentNode) ) {
                console.log( 'Node Selected!!' );

                console.log( $scope.workspace.currentNode );
            }
        }, false);
    });
