<!DOCTYPE html>
<html lang="en">
<body>

<h2>JavaScript Datatypes, Let keyword and Loops</h2>

<p id="result"></p>

<script>
let i = 0;
let text = "";

while (i < 10) {
    text += "The values inside the block: " + i + "<br>";
    i++;
}

document.getElementById("result").innerHTML = text;
document.write("The value of i outside the block is: " + i);
</script>

</body>
</html>
