#pragma strict

function Start () {

}

var maxSpeed = 10.0;
var radius = 0.01;
var target:Transform;
var steeringVelocity:Vector3;
var direction:Vector3;
var velocity:Vector3;
var rotation:Vector3;

function Update () {
	KinematicArrive();
	getNewOrientation();
	transform.Translate(velocity * Time.deltaTime,Space.World);
	transform.Rotate(rotation * Time.deltaTime);
}

function getNewOrientation() {
	if (velocity.magnitude > 0)
		transform.rotation = Quaternion.Euler(0,57.3 *Mathf.Atan2(velocity.x,velocity.z),0);
	    //transform.Rotate(0,Mathf.Atan2(velocity.x,-velocity.z),0);
	    
		//transform.LookAt(target.position);
		// we are not supposed to mess internally with quaternions
}

function KinematicArrive() {
	steeringVelocity = target.position - this.transform.position;
	if(steeringVelocity.magnitude > maxSpeed){
	  steeringVelocity.Normalize();
	  velocity = steeringVelocity *  maxSpeed;
	} 
    if(steeringVelocity.magnitude < radius)
      velocity = Vector3(0,0,0);
    rotation = Vector3(0,0,0);
}


function KinematicSeek() {
	steeringVelocity = target.position - this.transform.position;
	steeringVelocity.Normalize();
	velocity = steeringVelocity *  maxSpeed; 
	rotation = Vector3(0,0,0);
}

class SeekTest extends UUnitTestCase {
  @UUnitTest
  function firstTest() {
  	UUnitAssert.Equals( "one", XApple.returnOne() );
  	Debug.Log("javascript test runs");
  }
  @UUnitTest
  function mathFTest() {
  	UUnitAssert.Equals( 0.7853982, Mathf.Atan2(0.5,0.5),0.0001 );
  	Debug.Log("Mathf Atan2 test run");
  }

}