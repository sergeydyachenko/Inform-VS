<!DOCTYPE html>
<html>
<head>
	<title>Название старницы</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<link rel="stylesheet" type="text/css" href="css/contacts_print.css">
		<script type="text/javascript" src="../js/jquery-1-11-1.js"></script>
		<script src="http://api-maps.yandex.ru/2.0-stable/?load=package.standard&amp;lang=ru-RU" type="text/javascript"></script>
</head>
<body>
<div class="center contacts-print">
	<div class="clearfix">
		<a href="#"><img src="../img/logo.png" class="logo" alt=""></a>
		<div class="contacts-print-table">
			<div class="title-contacts">ООО “Информ-ВС”</div>
			<table class="contacts-table">
				<tr>
					<td>Адрес.................</td>
					<td>Москва, ул Спасский тупик, дом 8, стр. 1</td>
				</tr>
				<tr>
					<td>Режим работы...</td>
					<td>09:00 - 18:00 (по рабочим дням)</td>
				</tr>
				<tr>
					<td>Телефон............</td>
					<td>+7(495) 966-0501</td>
				</tr>
				<tr>
					<td>E-mail.................</td>
					<td><a href="#">info@inform-vs.ru</a></td>
				</tr>
			</table>
		</div>
	</div>
	<script type="text/javascript">
		var myMap;
		ymaps.ready(function () {
		myMap = new ymaps.Map("map", {
			center: [55.774363,37.645503],
			zoom: 16
		});
		var myPlacemark = new ymaps.Placemark([55.774363,37.645503], {}, {
			iconImageHref: '../img/loveC.png',
			iconImageSize: [33, 29],
			iconImageOffset: [-20, -38]
		});
		myMap.geoObjects.add(myPlacemark);
		});
	</script>
	<div id="map" style="width: 100%; height: 604px;"></div>
</div>
</body>
</html>