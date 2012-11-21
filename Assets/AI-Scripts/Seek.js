#pragma strict

function Start () {

}

var maxSpeed = 10.0;
var radius = 0.01;
var target:Transform;
var velocityVector:Vector3;
var direction:Vector3;
var steeringVector:Vector3;

function Update () {
	Arrive();
	transform.Translate(steeringVector * Time.deltaTime);
}

function Arrive() {
	velocityVector = target.position - this.transform.position;
	if(velocityVector.magnitude > maxSpeed){
	  velocityVector.Normalize();
	  steeringVector = velocityVector *  maxSpeed;
	} 
    if(velocityVector.magnitude < radius)
      steeringVector = Vector3(0,0,0);
}


function Seek() {
	velocityVector = target.position - this.transform.position;
	velocityVector.Normalize();
	steeringVector = velocityVector *  maxSpeed; 
}
