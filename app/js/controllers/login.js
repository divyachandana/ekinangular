/**
 * Created by dchandana on 2/11/2015.
 */

'use strict';

ekinApp.controller('login',
    function login($scope,$location) {
        var i,j;

        $scope.allusers = {
            users:[
                {
                    username:"divyachandana",
                    password:"123456",
                    email:"divya.chandana@gmail.com",
                    firstname:"divya",
                    lastname:"chandana",
                    weight:"",
                    height:"5'4",
                    age:"24",
                    smoking:""

                },
                {
                    username:"chandana",
                    password:"123456",
                    email:"chandana@gmail.com",
                    firstname:"divya",
                    lastname:"chandana",
                    weight:"",
                    height:"5'3",
                    age:"",
                    smoking:""

                },
                {
                    username:"",
                    password:"",
                    email:"",
                    firstname:"",
                    lastname:"",
                    height:"",
                    weight:"",
                    smoking:""
                }
            ]
        };
        $scope.login=function(user)
        {
            //for(i=0;i<$scope.allusers.users.length)


            if(user.userName===$scope.allusers.users[1].username && user.password===$scope.allusers.users[1].password)
            {

                if($scope.allusers.users[1].weight=== "")
                {
                     $location.path("/weight");
                }
                else if($scope.allusers.users[1].height=== ""){
                    $location.path("/height");
                }
                else if($scope.allusers.users[1].age=== ""){
                    $location.path("/age");
                }
                else if($scope.allusers.users[1].smoking===""){
                    $location.path("/smoking");
                }
                else{
                    $location.path("/userdata");
                }

                }};

        $scope.cancle=function(){
            $location.path("/Login");
        };
        $scope.w_submit=function(uweight){
            //$scope.allusers.users[1].weight=uweight.userweight;
            //window.alert($scope.allusers.users[1].weight);

             if($scope.allusers.users[1].height=== ""){
                 $location.path("/height");
            }
            else if($scope.allusers.users[1].age=== ""){
                 $location.path("/age");
            }
             else if($scope.allusers.users[1].smoking===""){
                 $location.path("/smoking");
             }
            else{
                 $location.path("/userdata");
            }
        };
        $scope.h_submit=function(uheight){
            //$scope.allusers.users[1].weight=uweight.userweight;
            //window.alert($scope.allusers.users[1].height);
            if($scope.allusers.users[1].age=== ""){
                $location.path("/age");
            }
            else if($scope.allusers.users[1].smoking===""){
                $location.path("/smoking");
            }
            else{
                $location.path("/userdata");
            }
        };
        $scope.a_submit=function(uage){
            //$scope.allusers.users[1].weight=uweight.userweight;
            //window.alert($scope.allusers.users[1].smoking);
            //window.location="/userdata";
            if($scope.allusers.users[1].smoking===""){
                $location.path("/smoking");
            }
            else{
                $location.path("/userdata");
            }
        };
        $scope.s_submit=function(usmoking){
            //$scope.allusers.users[1].weight=uweight.userweight;
            window.alert(usmoking.answer);
            $location.path("/userdata");
        };

    }
);
