var coins: float = 20;

//show the total coins in the guiText
function Update () 
{
 GetComponent.<GUIText>().text = coins.ToString();
}

