var crashSound : AudioClip;

function OnCollisionEnter (collision : Collision) {
GetComponent.<AudioSource>().PlayOneShot(crashSound); }
