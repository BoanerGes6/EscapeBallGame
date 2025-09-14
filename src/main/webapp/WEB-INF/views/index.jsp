<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Retro Game mode</title>

<link rel="stylesheet" href="css/dashboardBasic.css">
<link rel="stylesheet" href="css/defaultButtons.css">
</head>
<body>
	<nav class="navContainer">
		<div class="logo">
		</div>
		<div class="nav-properties"> 
			<div class = "button">profile</div>
			<button type="button" class = "button">Login</button>
			<button type="button" class = "button">Sign-up</button>
		</div>
	</nav>
	<div class="container">
		<div class="scoreContainer">
			<div>
				<label>High Score:</label> 
				<label> -- </label>
				<label> By</label>
				<label> -- </label>
			</div>
			<div>
				<label>Your Score:</label>
				<label>--</label>
			</div>
		</div>
		<div class="secondaryConttainer">
			<div class="box-container">
				<label>Play Game</label>
				<button type="button" class="play-btn" id="play-btn">play</button>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="js/indexJS.js"></script>
	<script type="text/javascript" src="js/defaultButtonJS.js"></script>
</body>
</html>