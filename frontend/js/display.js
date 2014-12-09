function GetKeyValueRow(table, data, field, better_name) {
	if (data.hasOwnProperty(field)) {
		AddRow(table, better_name, data[field])
	}
}

function AddRow(table, key, value) {
	row = $("<tr>");
	col1 = $("<td>");
	col1.text(key);
	col2 = $("<td>");
	col2.text(value)
	row.append(col1);
	row.append(col2);
	table.append(row);
}

function processResultController($scope) {
	result = $scope.result;
	var table = angular.element('table')


	GetKeyValueRow(table, result, 'serial-number', 'Serial Number');
    
    case_header = result['case-file-header'];
    GetKeyValueRow(table, case_header, 'mark-identification', 'Word Mark');
    GetKeyValueRow(table, case_header, 'domestic-representative-name', 'Attorney of Record');
    
    statements = result['case-file-statements']
    console.log(statements);

    text = ''
    if (statements.hasOwnProperty('case-file-statement')) {
        statement = statements['case-file-statement'];
        console.log(statement)
        for (var i = 0; i < statement.length; i++) {
    	    text += statement[i]['text'];
            text +='\n'
        }
    }
    if (text != '') {
	    AddRow(table, "Trademark Text", text)
    }
}
