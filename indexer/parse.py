import sys

from elasticsearch import Elasticsearch
import xmltodict

es = Elasticsearch()

def handle_record(path, data):
    if len(path) == 5 and len(path[4]) == 2 and path[4][0] == 'case-file':
        serial_number = int(data['serial-number'])
        result = es.index(index = 'uspto', doc_type='tm', id = serial_number, body = data)
        print result
    return True



result =  xmltodict.parse(file(sys.argv[1]), item_depth = 5, item_callback=handle_record)



