#pragma strict
//from http://answers.unity3d.com/questions/32337/interactively-moving-a-game-object-in-a-circle.html
function Start () {

}

var rotation : Quaternion;
var radius = Vector3(5,0,0);
var currentRotation = 0.0;

function Update () {

    currentRotation += Input.GetAxis("Horizontal")*Time.deltaTime*100;
    rotation.eulerAngles = Vector3(0, currentRotation, 0);
    transform.position = rotation * radius;

}