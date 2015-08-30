ymaps.ready(init);

var myMap,
	fullScreen = false;

function init () {
	myMap = new ymaps.Map('map', {
		center: [55.755768, 37.617671],
		zoom: 10
	});
	$('#toggler').click(toggle);
}

function toggle () {
	fullScreen = !fullScreen;

	// ���������/������� CSS-�����, ������������ ������� ���������� �����,
	// �������� � ���������� �������� (300x200 px).
	if (fullScreen) {
		$('#map').removeClass('smallMap');
	} else {
		$('#map').addClass('smallMap');
	}

	// ���� ��������� ����, �������� �����, ��� �� �������
	// �������� ���� ������� � �������� ����������.
	if ($('#checkbox').prop('true')) {
		myMap.container.fitToViewport();
	}
}