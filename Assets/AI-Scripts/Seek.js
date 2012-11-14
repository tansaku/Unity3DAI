#pragma strict

function Start () {

}

var maxSpeed = 10.0;
var target:Transform;
var velocityVector:Vector3;
var direction:Vector3;
var steeringVector:Vector3;

function Update () {

	velocityVector = target.position - this.transform.position;
	velocityVector.Normalize();
	steeringVector = velocityVector *  maxSpeed; 
	
	transform.Translate(steeringVector * Time.deltaTime);
	
}
