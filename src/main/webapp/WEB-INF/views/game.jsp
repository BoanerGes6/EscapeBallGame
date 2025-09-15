<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Retro Game/Escape Ball</title>
<link rel="stylesheet" href="css/game.css">
<link rel="stylesheet" href="css/defaultButtons.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
	<div class="container">
		<div class="retro"></div>
		<div class="game-panel" id="game-panel">
			<div class="popers" id="popers"></div>
			<div class="ball" id ="ball"></div>
		</div>
		<div class="controllers">
			<div class="score">
				<div>
					<label>High Score: </label>
					<label>0</label></div>
				<div>
					<label>Your Score: </label>
					<label>0</label>
				</div>
			</div>
			<div class="arrow-box">
				<button type="button" class="button" id="left-btn">
					<i class="fa-solid fa-arrow-left size"></i>
				</button>
				<button type="button" class="button" id="right-btn">
					<i class="fa-solid fa-arrow-right size"></i>
				</button>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="js/defaultButtonJS.js"></script>
	<script type="text/javascript" src="js/gameJS.js"></script>
</body>
</html>